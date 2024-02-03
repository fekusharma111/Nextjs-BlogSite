import { API } from "../service/axiosInstance";

export const setExpirationDate = () => {
  //   const accessToken = getCookie("accessToken"); // Assuming you have a function to get cookies
  //   if (accessToken) {
  const expirationTime = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now
  document.cookie = `expires=${expirationTime.toUTCString()}`;
  //   }
};

export function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

export const checkisAuthenticated = async () => {
  try {
    const accessToken = getCookie("accessToken");
    const expirationTime = new Date(getCookie("expires"));
    // console.log(accessToken);
    if (accessToken && expirationTime > new Date()) {
      await API.validatePageRefreshLogin({}, true);
      // The session is still valid, so auto-login the user
      // return { isAuthenticated: true, userDetails:  };
      // dispatch(setUserData(userData));
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
      // The session has expired or no token is present, prompt the user to log in
    }
  } catch (error) {
    console.error("error while authenticating pagerefresh", error);
    return { isAuthenticated: false };
  }
};
export const generateSlug = (title) => {
  const slug = title
    .toLowerCase() // Convert the title to lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w\-]+/g, "") // Remove non-word characters except dashes
    .replace(/\-\-+/g, "-") // Replace multiple consecutive dashes with a single dash
    .replace(/^\-+/, "") // Remove dashes from the beginning
    .replace(/\-+$/, ""); // Remove dashes from the end
  return slug;
};
