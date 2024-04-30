import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets/index";
import { relative } from "path";

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
            width: "50%",
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
      <Box>right</Box>
    </Container>
  );
};

export default HeroSection;
