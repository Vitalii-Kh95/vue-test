import { defineStore } from 'pinia';
import { baseURL } from '@/constants';
import { getCookie, getCsrfToken } from '@/utils/functionsAPIRelated';

async function apiCall(endpoint, options = {}) {
  const url = new URL(endpoint, baseURL);
  const defaultHeaders = { 'Content-Type': 'application/json' };
  const csrftoken = getCookie('csrftoken') || (await getCsrfToken());

  options.headers = {
    ...defaultHeaders,
    ...(options.noCsrf ? {} : { 'X-CSRFToken': csrftoken }),
    ...(options.headers || {})
  };

  try {
    const response = await fetch(url, {
      credentials: 'include',
      ...options
    });

    return handleApiResponse(response);
  } catch (error) {
    console.error('Network error:', error);
    return { status: 500, error: 'Network error' };
  }
}

async function handleApiResponse(response) {
  let data = null;
  if (response.status !== 204) {
    try {
      data = await response.json(); // Try to parse the response text
    } catch (error) {
      console.log('Error parsing response JSON:', error);
    }
  }

  return {
    status: response.status,
    data,
    error: response.ok
      ? null
      : extractDjangoErrors(data) || { detail: `HTTP ${response.status} Error` },
    ok: response.ok // there was some confusion when I expected returned object to act like object returned by fetch,
    // so I added this property to consolidate my confusion
  };
}

function extractDjangoErrors(data) {
  // Step 1: Ensure `data` is an object
  if (!data || typeof data !== 'object') return null;

  // Step 2: Handle DRF's general error messages under the "detail" field
  if (data.detail) return { detail: data.detail };

  // Step 3: Process field-specific validation errors
  const errors = {};

  for (const [field, message] of Object.entries(data)) {
    // Handle array format (multiple messages for the same field)
    if (Array.isArray(message)) {
      errors[field] = message.join('; ');
    } else if (typeof message === 'string') {
      errors[field] = message;
    }
  }

  return Object.keys(errors).length ? errors : null;
}

export const useUserStore = defineStore('userStore', {
  state: () => ({
    loggedIn: false,
    user: null,
    errorMessage: {}
  }),
  actions: {
    async fetchUserState() {
      // const url = new URL('whoami/', baseURL);
      const result = await apiCall('whoami/', { noCsrf: true });
      // const result = await fetch(url, {
      //   credentials: 'include',
      //   headers: { 'Content-Type': 'application/json' }
      // });
      console.log('whoami result:', result);
      if (result.ok) {
        this.loggedIn = true;
        // const data = await result.json();
        // this.user = data.username;
        this.user = result.data?.username || null;
        return true;
      } else {
        this.loggedIn = false;
        this.user = null;
        this.errorMessage = result.error || {};
        return false;
      }
    },

    async register(username, email, password, passwordConfirm) {
      this.errorMessage = {};
      const result = await apiCall('register/', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm
        })
      });

      if (result.ok) {
        console.log('Registration successful');
        this.loggedIn = await this.login(username, password);
        return true;
      } else {
        console.warn('Login failed:', result.error);
        this.errorMessage = result.error || {};
        return false;
      }
    },

    async login(username, password) {
      this.errorMessage = {};
      const result = await apiCall('login/', {
        method: 'POST',
        body: JSON.stringify({ 'username or email': username, password })
      });

      if (result.ok) {
        // Try to extract username from the login response
        const username = result.data?.username;
        if (username) {
          // Login successful, set the user state
          this.loggedIn = true;
          this.user = username;
          console.log('Login successful');
          return true;
        } else {
          console.warn('Username missing in the login response, attempting to fetch user state...');
          // Fetch user state if username is not in the response
          const userStateSuccess = await this.fetchUserState();
          // If user is still not logged in after fetchUserState, raise an error
          if (!userStateSuccess) {
            this.errorMessage = { detail: 'Failed to retrieve username' };
            return false;
          }
          return true;
        }
      } else {
        console.warn('Login failed:', result.error);
        this.errorMessage = result.error || {};
        return false;
      }
    },

    async logout() {
      this.errorMessage = {};
      const result = await apiCall('logout/', { method: 'POST' });

      if (result.status === 204) {
        this.loggedIn = false;
        this.user = null;
        console.log('Logout successful');
        return true;
      } else {
        this.errorMessage = result.error || {};
        console.error('Logout error:', result.error);
        return false;
      }
    }
  }
});
