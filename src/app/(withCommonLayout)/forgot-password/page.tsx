"use client";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import CheckIcon from "@mui/icons-material/Check";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgotPasswordMutation } from "@/redux/api/authApi";

const validationSchema = z.object({
  email: z.string().email("Enter a valid email address!"),
});

const ForgotPasswordPage = () => {
  const [forgotPassword, { isSuccess }] = useForgotPasswordMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await forgotPassword(data);
      console.log(res);
      if (res?.data?.success == true) {
        toast.success("Check your email for set new password!");
      } else {
        throw new Error("Something went wrong, try again!");
      }
    } catch (err) {
      console.log(err);
    }
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
            {isSuccess && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                An email with reset password link was send to your email!
              </Alert>
            )}
            {!isSuccess && (
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
            )}
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ForgotPasswordPage;
