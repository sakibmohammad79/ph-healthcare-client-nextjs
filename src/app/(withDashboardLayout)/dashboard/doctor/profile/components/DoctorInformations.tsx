import { dateFormatter } from "@/utils/dateFormatter";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
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

const DoctorInformations = ({ data }: any) => {
  const formattedTime = dateFormatter(data?.createdAt);
  return (
    <>
      <Grid item xs={12} sm={12} md={8}>
        <Typography color="primary" component="h5" variant="h5" mb={1}>
          Personal Information
        </Typography>
        <Stack direction={{ sm: "column", md: "row" }} gap={2} flexWrap="wrap">
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
        <Typography color="primary" component="h5" variant="h5" mt={4} mb={1}>
          Professional Information
        </Typography>
        <Stack direction={{ sm: "column", md: "row" }} gap={2} flexWrap="wrap">
          <StyledInformationBox>
            <Typography variant="caption" color="secondary">
              Appointment Fee
            </Typography>
            <Typography>{data?.appointmentFee}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography variant="caption" color="secondary">
              Qualification
            </Typography>
            <Typography>{data?.qualification}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography variant="caption" color="secondary">
              Current Working Place
            </Typography>
            <Typography>{data?.currentWorkingPlace}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography variant="caption" color="secondary">
              Average Rating
            </Typography>
            <Typography>{data?.averageRating}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography variant="caption" color="secondary">
              Status
            </Typography>
            <Typography>{data?.status}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography variant="caption" color="secondary">
              Experience
            </Typography>
            <Typography>{data?.experience}</Typography>
          </StyledInformationBox>
          <StyledInformationBox>
            <Typography variant="caption" color="secondary">
              Joined
            </Typography>
            <Typography>{formattedTime}</Typography>
          </StyledInformationBox>
        </Stack>
      </Grid>
    </>
  );
};

export default DoctorInformations;
