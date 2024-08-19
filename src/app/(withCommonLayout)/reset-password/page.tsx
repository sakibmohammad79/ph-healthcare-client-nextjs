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
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "@/redux/api/authApi";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { authKey } from "@/constant/authKey";

const validationSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 charcters long!"),
});

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("userId");
  const token = searchParams.get("token");

  const [resetPassword, { isSuccess }] = useResetPasswordMutation();

  useEffect(() => {
    if (!token) return;
    localStorage.setItem(authKey, token);
  }, [token]);

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      const updatedData = { ...values, id };

      const res = await resetPassword(updatedData);
      console.log(res);
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
          </Stack>

          <Box>
            {isSuccess && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Password reset successfully!
              </Alert>
            )}
            {!isSuccess && (
              <PHForm
                onSubmit={onSubmit}
                resolver={zodResolver(validationSchema)}
                defaultValues={{ password: "" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <PHInput
                      fullWidth={true}
                      label="New Password"
                      name="password"
                      type="password"
                    />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth sx={{ my: 3 }}>
                  Reset Password
                </Button>
              </PHForm>
            )}
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ResetPassword;
