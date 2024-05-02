import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import howItWorksImg from "@/assets/how-it-works-img.png";
import assets from "@/assets";

const HowWorks = () => {
  return (
    <Container>
      <Stack my={8}>
        <Box>
          <Typography component="p" color="primary">
            How It Works
          </Typography>
          <Typography variant="h4" component="h6" fontWeight={600} my={1}>
            4 Easy Steps To Get Your Solutions
          </Typography>
          <Typography component="p">
            Access to expers physicians and surgeons, advanced technology <br />{" "}
            and top-qulity surgery facilities right here
          </Typography>
        </Box>
      </Stack>
      <Grid
        container
        spacing={2}
        mb={8}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={6}>
          <Box>
            <Image src={howItWorksImg} alt="how-works" />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item md={6}>
              <Box boxShadow={1} padding={2} borderRadius={2}>
                <Image src={assets.svgs.doctorSearch} alt="search-doctor" />
                <Typography variant="h6" fontWeight={600} my={2}>
                  Search Doctor
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box boxShadow={1} padding={2} borderRadius={2}>
                <Image src={assets.svgs.profile} alt="search-doctor" />
                <Typography variant="h6" fontWeight={600} my={2}>
                  Check Doctor Profile
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box boxShadow={1} padding={2} borderRadius={2}>
                <Image src={assets.svgs.schedule} alt="search-doctor" />
                <Typography variant="h6" fontWeight={600} my={2}>
                  Schedule Appointment
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box boxShadow={1} padding={2} borderRadius={2}>
                <Image src={assets.svgs.solution} alt="search-doctor" />
                <Typography variant="h6" fontWeight={600} my={2}>
                  Get Your Solution
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        boxShadow={1}
        padding={4}
        borderRadius={4}
        mb={16}
        color="white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(0, 51, 202), rgb(0, 170, 230))",
          backgroundSize: "100% 100%",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h3" component="h6">
            180+
          </Typography>
          <Typography variant="h6" component="h6">
            Expert Doctors
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h3" component="h6">
            26+
          </Typography>
          <Typography variant="h6" component="h6">
            Expert Services
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h3" component="h6">
            180+
          </Typography>
          <Typography variant="h6" component="h6">
            Happy Patients
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h3" component="h6">
            150+
          </Typography>
          <Typography variant="h6" component="h6">
            Best Award Winners
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default HowWorks;
