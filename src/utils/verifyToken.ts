import { jwtDecode } from "jwt-decode";
export const verifyToken = (token: string) => {
  const decodedUser = jwtDecode(token);
  return decodedUser;
};
