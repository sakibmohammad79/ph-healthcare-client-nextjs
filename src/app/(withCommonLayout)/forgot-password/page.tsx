"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  email: z.string().email("Enter a valid email address!"),
});

const forgotPasswordPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    // try {
    //   const res = await loginPatient(data);
    //   if (res?.data?.accessToken) {
    //     toast.success(res.message);
    //     storeUserInfo(res?.data?.accessToken);
    //   } else {
    //     setError(res?.message);
    //   }
    // } catch (error: any) {
    //   toast.error(error.message);
    // }
  };

  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: "550px",
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
                Forgot Password
              </Typography>
            </Box>
          </Stack>

          <Box>
            <PHForm
              onSubmit={onSubmit}
              resolver={zodResolver(validationSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <PHInput
                    fullWidth={true}
                    label="Email"
                    name="email"
                    type="text"
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth sx={{ my: 3 }}>
                Forgot Password
              </Button>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default forgotPasswordPage;
