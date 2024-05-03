"use client";
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
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { loginPatient } from "@/services/actions/loginPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";

const LoginPage = () => {
  const router = useRouter();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
      const res = await loginPatient(data);
      console.log("res: ", res);
      if (res?.data?.accessToken) {
        toast.success(res.message);
        storeUserInfo(res?.data?.accessToken);
        router.push("/");
      }
      //else if (res?.success === false) {
      //   toast.error(res.message);
      // }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            padding: 4,
            boxShadow: 1,
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <Image src={assets.svgs.logo} alt="logo" height={50} width={50} />
            </Box>
            <Box my={3}>
              <Typography variant="h5" component="h6" fontWeight={600}>
                Login PH HealthCare
              </Typography>
            </Box>
          </Stack>
          <Box>
            <PHForm onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <PHInput
                    fullWidth={true}
                    label="Email"
                    name="email"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    fullWidth={true}
                    label="Password"
                    name="password"
                    type="text"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Link href="/forgotpassword">
                <Typography
                  textAlign="end"
                  mt={1}
                  component="p"
                  fontWeight={300}
                >
                  Forgot Password?
                </Typography>
              </Link>
              <Button type="submit" fullWidth sx={{ my: 3 }}>
                Please login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&rsquo;t have an account?{" "}
                <Link href="/register" color="primary.main">
                  Create account
                </Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
