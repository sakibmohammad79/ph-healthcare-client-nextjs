import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  return (
    <Container>
      <Box
        sx={{
          mt: 10,
          mb: 10,
          textAlign: "center",
        }}
      >
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Explore Experienced Doctor Across All Specialties
          </Typography>
        </Box>
        <Stack direction="row" mt={5} gap={4}>
          {specialties.map((speciality: any) => (
            <Box
              key={speciality.id}
              sx={{
                flex: 1,
                width: "150px",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                backgroundColor: "rgb(245, 245,245, 1)",
                border: "rgb(250, 250, 250, 1)",
                "& img": {
                  height: "50px",
                  width: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  padding: "40px 10px",
                  borderRadius: "10px",
                },
              }}
            >
              <Image
                src={speciality.icon}
                alt="specialty icons"
                height={100}
                width={100}
              />
              <Box>
                <Typography component="p" fontWeight={300} fontSize={18} mt={2}>
                  {speciality.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Button
          sx={{
            marginTop: "30px",
          }}
          variant="outlined"
        >
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
