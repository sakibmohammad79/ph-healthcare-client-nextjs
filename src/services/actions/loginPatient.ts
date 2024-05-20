import { authKey } from "@/constant/authKey";
import { redirect } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";
import setAccessToken from "./setAccessToken";

export const loginPatient = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );
  const userInfo = await res.json();

  if (userInfo?.data?.accessToken) {
    setAccessToken(userInfo?.data?.accessToken, { redirect: "/dashboard" });
  }

  return userInfo;
};
