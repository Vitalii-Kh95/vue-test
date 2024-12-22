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
