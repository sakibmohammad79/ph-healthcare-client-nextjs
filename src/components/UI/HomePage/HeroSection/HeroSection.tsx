import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets/index";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",

            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} height={600} alt="grid"></Image>
        </Box>
        <Typography fontWeight={600} variant="h4" component="h1">
          Healthier Hearts
        </Typography>
        <Typography fontWeight={600} variant="h4" component="h1">
          Come From
        </Typography>
        <Typography
          color="primary.main"
          fontWeight={600}
          variant="h4"
          component="h1"
        >
          Preventie Care
        </Typography>
        <Typography
          sx={{
            py: 1,
          }}
          variant="h6"
          component="p"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam
          at doloremque tempore voluptatum, aspernatur alias necessitatibus
          minus nobis quaerat ullam adipisci! Tempore laborum nemo doloremque
          illum harum facere voluptates!
        </Typography>
        <Box display="flex" gap={2}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 0,
          p: 1,
          display: "flex",
          flex: 1,
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -30,
            left: 200,
          }}
        >
          <Image src={assets.svgs.arrow} alt="arrow" height={100} width={100} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              height={380}
              width={240}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor2"
              height={350}
              width={240}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 220,
            left: 160,
          }}
        >
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            height={220}
            width={220}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: -1,
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="doctor3"
            height={180}
            width={180}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
