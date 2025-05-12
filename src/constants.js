// export const baseURL = 'http://localhost:8000/api/';

// dev level environment variable. Defined in vite.config file
// eslint-disable-next-line
export const baseURL = `http://${__HOST_IP__}:8000/api/`;

// To not bother with path resolution I put image to public dir instead of src/assets
export const projects = [
  {
    title: 'Blog',
    description: 'Description for Blog',
    routeByName: 'blog',
    image: 'public/BlogScreenshot.png'
  },
  {
    title: 'Blog',
    description: 'Description for Blog',
    routeByName: 'blog',
    image: 'public/BlogScreenshot.png'
  }
];
