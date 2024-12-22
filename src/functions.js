import { baseURL } from '@/constants';

///////////////// API related functions ///////////////////////////

export async function getPost(slug) {
  const url = new URL('posts/', baseURL);
  url.pathname += slug;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

export async function getPosts({ limit = 6, offset = 0, search = undefined, tag = undefined }) {
  const url = new URL('posts/', baseURL);
  if (limit) {
    url.searchParams.set('limit', limit);
  }
  if (offset) {
    url.searchParams.append('offset', offset);
  }
  if (search) {
    url.searchParams.append('search', search);
  }
  if (tag) {
    url.searchParams.append('tag', tag);
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

export async function parseUrlParams(url) {
  const params = new URL(url).searchParams; // Extract search parameters from the URL
  const result = {
    limit: params.get('limit') || null,
    offset: params.get('offset') || null,
    search: params.get('search') || null,
    tag: params.get('tag') || null
  };
  return result;
}

export async function getCsrfToken() {
  const url = new URL('csrf_token/', baseURL);
  const response = await fetch(url, {
    credentials: 'include'
  });
  const data = await response.json();
  return data.csrftoken;
}

export function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
}
// export async function checkBackendStatus() {
//   try {
//     // Prefer a lightweight endpoint or dedicated health check
//     const url = new URL('whoami/', baseURL);
//     const response = await fetch('/api/health', { method: 'HEAD', credentials: 'include' });
//     return response.ok; // True if the backend is reachable
//   } catch {
//     return false; // Backend is unreachable
//   }
// }

// export async function login(username, password) {
//   const csrftoken = getCookie('csrftoken') || (await getCsrfToken());

//   const url = new URL('login/', baseURL);
//   const response = await fetch(url, {
//     method: 'POST',
//     credentials: 'include', // Important for sending cookies
//     headers: {
//       'Content-Type': 'application/json',
//       'X-CSRFToken': csrftoken
//     },
//     body: JSON.stringify({ username, password })
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     console.error('Login failed:', errorData);
//   } else {
//     const data = await response.json();
//     console.log('Login successful:', data);
//   }
// }

// export async function logout() {
//   const csrftoken = getCookie('csrftoken') || (await getCsrfToken());

//   const url = new URL('logout/', baseURL);
//   const response = await fetch(url, {
//     method: 'POST',
//     credentials: 'include',
//     headers: {
//       'X-CSRFToken': csrftoken
//     }
//   });

//   const data = await response.json();
//   if (response.ok) {
//     console.log('Logout successful:', data);
//   } else {
//     console.error('Logout failed:', data);
//   }
// }

// export async function whoami() {
//   const response = await fetch('/api/whoami/', {
//     credentials: 'include'
//   });
//   const data = await response.json();

//   if (response.ok) {
//     console.log('Current user:', data);
//   } else {
//     console.log('Not authenticated:', data);
//   }
// }

// export async function register(username, email, password, passwordConfirm) {
//   const csrftoken = getCookie('csrftoken') || (await getCsrfToken());

//   const url = new URL('register/', baseURL);
//   const response = await fetch(url, {
//     method: 'POST',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-CSRFToken': csrftoken
//     },
//     body: JSON.stringify({
//       username,
//       email,
//       password,
//       password_confirm: passwordConfirm
//     })
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     let errorMessages = [];

//     if (typeof data === 'object' && data !== null) {
//       // Handle non-field errors first
//       if (Array.isArray(data.non_field_errors) && data.non_field_errors.length > 0) {
//         errorMessages.push(...data.non_field_errors);
//       }

//       for (const [field, messages] of Object.entries(data)) {
//         if (field === 'non_field_errors') continue;
//         if (Array.isArray(messages)) {
//           errorMessages.push(...messages.map((msg) => `${field}: ${msg}`));
//         }
//       }
//     }

//     if (errorMessages.length === 0) {
//       errorMessages.push('Registration failed. Please try again.');
//     }

//     throw new Error(errorMessages.join('\n'));
//   }

//   console.log('Registration successful:', data);
//   return data;
// }
