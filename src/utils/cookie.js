import cookie from "cookie";

export const setCookie = (name, value) => {
  const options = {
    path: "/", // Set the cookie path as needed
    // other options like 'expires', 'secure', etc.
  };
  document.cookie = cookie.serialize(name, value, options);
};

export const getCookie = (name) => {
  const cookies = cookie.parse(document.cookie);
  return cookies[name] || null;
};

export const clearCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

