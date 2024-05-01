import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

const Page = () => {
  return (
    <Container>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            boxShadow: 1,
            padding: 4,
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <Image
                src={assets.svgs.logo}
                alt="logo"
                width={50}
                height={50}
              ></Image>
            </Box>
            <Box my={2}>
              <Typography variant="h5" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <form>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Contact Number"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Button fullWidth sx={{ my: 3 }}>
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you have already an account?{" "}
                <Link href="/login">Please Login</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Page;
