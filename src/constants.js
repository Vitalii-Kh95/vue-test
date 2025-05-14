// export const baseURL = 'http://localhost:8000/api/';

// dev level environment variable. Defined in vite.config file
// eslint-disable-next-line
export const baseURL = `http://${__HOST_IP__}:8000/api/`;

// To not bother with path resolution I put image to public dir instead of src/assets
export const projects = [
  {
    title: 'Blog',
    description:
      'Description for Blog lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    routeByName: 'blog',
    image: '/BlogScreenshot.png'
  },
  {
    title: 'Blog',
    description: 'Description for Blog',
    routeByName: 'blog',
    image: '/BlogScreenshot.png'
  }
];
