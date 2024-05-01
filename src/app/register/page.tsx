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
import { useForm, SubmitHandler } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerPatient } from "@/services/actions/registerPatient";
import { loginPatient } from "@/services/actions/loginPatient";
import { storeUserInfo } from "@/services/auth.services";

export interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

export interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>();

  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async (values) => {
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
      } else if (res?.success === false) {
        toast.error(res?.message);
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <TextField
                    {...register("patient.name")}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    {...register("patient.email")}
                    fullWidth
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    {...register("password")}
                    fullWidth
                    label="Password"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    {...register("patient.contactNumber")}
                    fullWidth
                    label="Contact Number"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    {...register("patient.address")}
                    fullWidth
                    label="Address"
                    variant="outlined"
                    size="small"
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
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
