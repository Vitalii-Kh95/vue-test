import { baseURL } from '@/constants';

//////////////// CSRF and cookie /////////////////////////

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

///////////////// blog and project related functions ///////////////////////////
// These functions utilize similar structure of blog and project API endpoints
// That's why I decided to take them out of stores
export async function getPost({ slug = undefined, type = 'blog' }) {
  const basePath = type === 'projects' ? 'projects/' : 'posts/';
  const url = new URL(`${basePath}${slug ? `${slug}/` : ''}`, baseURL);
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

export async function getPosts({
  limit = 6,
  offset = 0,
  search = undefined,
  tag = undefined,
  type = 'blog'
}) {
  const url = type === 'projects' ? new URL('projects/', baseURL) : new URL('posts/', baseURL);
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
