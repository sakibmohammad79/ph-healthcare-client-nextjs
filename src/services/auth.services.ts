import { authKey } from "@/constant/authKey";
import { setToLocalStorage } from "@/utils/localStorage";

export const storeUserInfo = (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);
};
