import { defineStore } from 'pinia';
import { baseURL } from '@/constants';
import { getCookie, getCsrfToken } from '@/functionsAPIRelated';

async function apiCall(endpoint, options = {}) {
  const url = new URL(endpoint, baseURL);
  const defaultHeaders = { 'Content-Type': 'application/json' };
  const csrftoken = getCookie('csrftoken') || (await getCsrfToken());

  options.headers = {
    ...defaultHeaders,
    'X-CSRFToken': csrftoken,
    ...(options.headers || {})
  };

  try {
    const response = await fetch(url, {
      credentials: 'include',
      ...options
    });

    // Handle 204 No Content
    if (response.status === 204) {
      return { status: response.status, data: null };
    }

    // Parse JSON response
    const data = await response.json();

    // Handle errors
    if (!response.ok) {
      const errorMessages = [];

      // DRF error structure
      if (data.non_field_errors) {
        errorMessages.push(...data.non_field_errors);
      }
      for (const [field, messages] of Object.entries(data)) {
        if (field !== 'non_field_errors' && Array.isArray(messages)) {
          errorMessages.push(...messages.map((msg) => `${field}: ${msg}`));
        }
      }

      return {
        status: response.status,
        error: errorMessages.join('\n') || 'An unknown error occurred.'
      };
    }

    return { status: response.status, data };
  } catch (error) {
    // Handle unexpected errors (e.g., network issues)
    return { status: 500, error: error.message || 'A network error occurred.' };
  }
}

export const useUserStore = defineStore('userStore', {
  state: () => ({
    loggedIn: false,
    user: null,
    errorMessage: ''
  }),
  actions: {
    async fetchUserState() {
      const result = await apiCall('whoami/');
      if (result.status === 200) {
        this.loggedIn = true;
        this.user = result.data.username;
      } else {
        this.loggedIn = false;
        this.user = null;
        this.errorMessage = result.error;
      }
    },

    async register(username, email, password, passwordConfirm) {
      this.errorMessage = '';
      const result = await apiCall('register/', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm
        })
      });

      if (result.status === 201) {
        await this.fetchUserState(); // Update logged-in state
        return true;
      } else {
        this.errorMessage = result.error;
        return false;
      }
    },

    async login(username, password) {
      this.errorMessage = '';
      const result = await apiCall('login/', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      });

      if (result.status === 200) {
        await this.fetchUserState(); // Update logged-in state
        return true;
      } else {
        this.errorMessage = result.error;
        return false;
      }
    },

    async logout() {
      this.errorMessage = '';
      const result = await apiCall('logout/', { method: 'POST' });
      if (result.status === 204) {
        this.loggedIn = false;
        this.user = null;
        return true;
      } else if (result.status === 403) {
        // Handle the case where the user is not authenticated
        console.warn('Logout attempt by unauthenticated user.');
        this.loggedIn = false;
        this.user = null;
        this.errorMessage = 'You are not logged in.';
        return false;
      } else if (result.status === 500) {
        // Handle unexpected server error
        console.error('Server error during logout:', result.error);
        this.errorMessage = 'An unexpected server error occurred. Please try again later.';
        return false;
      } else {
        // Handle unexpected errors
        this.errorMessage = result.error;
        return false;
      }
    }
  }
});
