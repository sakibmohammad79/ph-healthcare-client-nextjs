import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const TopRatedDoctor = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgb(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Top Rated Doctor
        </Typography>
        <Typography component="p" fontSize={18}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontSize={18}>
          and top quality surgery facilities right here
        </Typography>
      </Box>
      <Container
        sx={{
          margin: "30px auto",
        }}
      >
        <Grid container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid key={doctor.id} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <Box>
                  <Image
                    alt="doctorImage"
                    height={500}
                    width={500}
                    src={doctor.profilePhoto}
                  ></Image>
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification}, {doctor.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" pt={1}>
                    <LocationOnIcon /> {doctor?.address}, <LocalHospitalIcon />{" "}
                    {doctor?.currentWorkingPlace}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    paddingBottom: "20px",
                  }}
                >
                  <Button>Book Now</Button>
                  <Button variant="outlined">View Profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ marginTop: "40px", textAlign: "center" }}>
          <Button variant="outlined">View More</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctor;
