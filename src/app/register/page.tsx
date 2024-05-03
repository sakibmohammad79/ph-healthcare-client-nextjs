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
import { modifyPayload } from "@/utils/modifyPayload";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerPatient } from "@/services/actions/registerPatient";
import { loginPatient } from "@/services/actions/loginPatient";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await registerPatient(data);
      console.log("register", res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await loginPatient({
          password: values?.password,
          email: values?.patient?.email,
        });
        console.log("login", result);
        if (result?.data?.accessToken) {
          storeUserInfo(result?.data?.accessToken);
          router.push("/");
        }
      }
    } catch (err: any) {
      toast.error(err.message);
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
            <PHForm onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <PHInput
                    name="patient.name"
                    fullWidth={true}
                    label="Name"
                    type="text"
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="patient.email"
                    fullWidth={true}
                    label="Email"
                    type="text"
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    fullWidth={true}
                    label="Password"
                    type="text"
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="patient.contactNumber"
                    fullWidth={true}
                    label="Contact Number"
                    type="text"
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="patient.address"
                    fullWidth={true}
                    label="Address"
                    type="text"
                    required={true}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth sx={{ my: 3 }}>
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you have already an account?{" "}
                <Link href="/login" color="primary.main">
                  Please Login
                </Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
