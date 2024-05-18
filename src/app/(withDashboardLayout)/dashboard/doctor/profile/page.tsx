"use client";

import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import DoctorInformations from "./components/DoctorInformations";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/myProfileApi";

const DoctorProfile = () => {
  const { data, isLoading } = useGetMyProfileQuery({});
  const [updateMyProfile, { isLoading: isUploading }] =
    useUpdateMyProfileMutation();

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  const fileUploadHandler = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));
    const res = await updateMyProfile(formData);
    console.log(res);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Box
            sx={{
              height: 350,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
              mt: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={data?.profilePhoto}
              alt="Doctor Image"
              height={350}
              width={450}
            ></Image>
          </Box>

          {isUploading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <AutoFileUploader
                name="file"
                label="choose your profile photo"
                icon={<CloudUploadIcon />}
                onFileUpload={fileUploadHandler}
                variant="text"
              ></AutoFileUploader>
            </Box>
          )}
        </Grid>

        <DoctorInformations data={data}></DoctorInformations>
      </Grid>
    </Box>
  );
};

export default DoctorProfile;
