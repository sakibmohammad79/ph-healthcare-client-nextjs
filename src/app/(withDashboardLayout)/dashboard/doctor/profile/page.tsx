"use client";

import { useMyProfileQuery } from "@/redux/api/myProfileApi";
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  padding: "8px 16px",
  width: "45%",

  "& p": {
    fontWeight: 600,
  },
}));

const DoctorProfile = () => {
  const { data, isLoading } = useMyProfileQuery({});
  console.log(data);
  if (isLoading) {
    return <h2>isLoading....</h2>;
  }
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              src={data?.profilePhoto}
              alt="Doctor Image"
              height={300}
              width={400}
            ></Image>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Typography color="primary" component="h5" variant="h5">
            Doctor Information
          </Typography>
          <Stack
            direction={{ sm: "column", md: "row" }}
            gap={2}
            flexWrap="wrap"
          >
            <StyledInformationBox>
              <Typography variant="caption" color="secondary">
                Role
              </Typography>
              <Typography>{data?.role}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption" color="secondary">
                Name
              </Typography>
              <Typography>{data?.name}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption" color="secondary">
                Email
              </Typography>
              <Typography>{data?.email}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
              <Typography variant="caption" color="secondary">
                Gender
              </Typography>
              <Typography>{data?.gender}</Typography>
            </StyledInformationBox>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DoctorProfile;
