///////////////// API related functions ///////////////////////////

export async function getPost(slug) {
  const url = 'http://localhost:8000/api/posts/' + slug;
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

export async function getPosts({ limit = 6, offset = 0, searchQuery = undefined }) {
  let url = 'http://localhost:8000/api/posts/';
  if (limit) {
    url += '?limit=' + limit;
  }
  if (offset) {
    url += '&offset=' + offset;
  }
  if (searchQuery) {
    url = url + '&search=' + searchQuery;
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

export async function getTags() {
  const url = 'http://localhost:8000/api/tags/';
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

export async function getPostsByTag(slug) {
  const url = 'http://localhost:8000/api/tags/' + slug;
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
