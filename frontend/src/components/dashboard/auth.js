import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  return !!localStorage.getItem("user");
  // Check if the 'auth' cookie exists
};