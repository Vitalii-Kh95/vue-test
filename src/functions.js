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

export async function getPosts({
  limit = 6,
  offset = 0,
  searchQuery: search = undefined,
  tag = undefined
}) {
  let url = 'http://localhost:8000/api/posts/';
  if (limit) {
    url += '?limit=' + limit;
  }
  if (offset) {
    url += '&offset=' + offset;
  }
  if (search) {
    url = url + '&search=' + search;
  }
  if (tag) {
    url = url + '&tag=' + tag;
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

// export async function getPostsByURL(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(error.message);
//   }
// }

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

// export async function getPostsByTag({ limit = 6, offset = 0, slug = undefined }) {
//   if (!slug) {
//     throw new Error('slug is required');
//   }
//   const url = 'http://localhost:8000/api/tags/' + slug;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error(error.message);
//   }
// }
