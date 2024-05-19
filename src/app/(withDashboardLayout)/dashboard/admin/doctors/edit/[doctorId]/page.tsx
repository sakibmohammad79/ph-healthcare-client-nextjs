"use client";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { PHSelect } from "@/components/Forms/PHSelect";
import {
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorsApi";
import { genderItem } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctorId: string;
  };
};
const UpdateDoctorPage = ({ params }: TParams) => {
  const id = params?.doctorId;

  const { data, isLoading } = useGetSingleDoctorQuery(id);

  const [updateDoctor] = useUpdateDoctorMutation();
  const router = useRouter();

  const defaultValues = {
    name: data?.name || "",
    email: data?.email || "",
    contactNumber: data?.contactNumber || "",
    registrationNumber: data?.registrationNumber || "",
    address: data?.address || "",
    experience: data?.experience || 0,
    designation: data?.designation || "",
    appointmentFee: data?.appointmentFee || 0,
    gender: data?.gender || "",
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
  };

  const handleUpdateDoctors = async (values: FieldValues) => {
    values.appointmentFee = Number(values.appointmentFee);
    values.experience = Number(values.experience);
    values.id = id;

    try {
      const res = await updateDoctor({ id: values.id, body: values }).unwrap();
      if (res?.id) {
        toast.success("Doctor update successfully!");
        router.push("/dashboard/admin/doctors");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Box>
      <Typography component="h5" variant="h5">
        Update Doctor Info
      </Typography>
      {!isLoading ? (
        <PHForm
          onSubmit={handleUpdateDoctors}
          defaultValues={data && defaultValues}
        >
          <Grid
            container
            spacing={4}
            justifyContent="start"
            alignItems="center"
            my={5}
          >
            <Grid item xs={12} sm={12} md={4}>
              <PHInput name="name" label="Name" fullWidth={true}></PHInput>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput name="email" label="Email" fullWidth={true}></PHInput>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="contactNumber"
                label="Contact Number"
                fullWidth={true}
              ></PHInput>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="address"
                label="Address"
                fullWidth={true}
              ></PHInput>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="registrationNumber"
                label="Registration Number"
                fullWidth={true}
              ></PHInput>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="experience"
                label="Experience"
                fullWidth={true}
                type="number"
              ></PHInput>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHSelect
                name="gender"
                label="Gender"
                fullWidth={true}
                item={genderItem}
              ></PHSelect>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="appointmentFee"
                label="Appointment Fee"
                fullWidth={true}
                type="number"
              ></PHInput>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="qualification"
                label="Qualification"
                fullWidth={true}
              ></PHInput>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="currentWorkingPlace"
                label="Current Working Place"
                fullWidth={true}
              ></PHInput>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <PHInput
                name="designation"
                label="Designation"
                fullWidth={true}
              ></PHInput>
            </Grid>
          </Grid>
          <Box mt={4} textAlign="end">
            <Button type="submit">Update</Button>
          </Box>
        </PHForm>
      ) : (
        "isLoading..."
      )}
    </Box>
  );
};

export default UpdateDoctorPage;
