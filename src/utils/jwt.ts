import { jwtDecode } from "jwt-decode";
export const decodedToken = (token: string) => {
  if (!token || token.split(".").length !== 3) {
    throw new Error("Invalid token format");
  }
  return jwtDecode(token);
};
