"use client";

import { useMyProfileQuery } from "@/redux/api/myProfileApi";
import { dateFormatter } from "@/utils/dateFormatter";

import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import DoctorInformations from "./components/DoctorInformations";

const DoctorProfile = () => {
  const { data, isLoading } = useMyProfileQuery({});
  console.log(data);

  if (isLoading) {
    return <h2>isLoading....</h2>;
  }
  return (
    <Box>
      <Grid container spacing={2}>
        <DoctorInformations data={data}></DoctorInformations>
      </Grid>
    </Box>
  );
};

export default DoctorProfile;
