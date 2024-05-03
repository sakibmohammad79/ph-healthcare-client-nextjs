"use server";

import { FieldValues } from "react-hook-form";

export const loginPatient = async (data: FieldValues) => {
  console.log("logindata", data);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
