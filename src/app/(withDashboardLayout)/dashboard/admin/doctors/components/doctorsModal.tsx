import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { PHSelect } from "@/components/Forms/PHSelect";
import PHFullScreenModal from "@/components/Shared/PHFullScreenModal/PHFullScreenModal";
import { genderItem } from "@/types";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValues = {
  password: "",
  doctor: {
    name: "",
    email: "",
    contactNumber: "",
    registrationNumber: "",
    address: "",
    experience: 0,
    designation: "",
    appointmentFee: 0,
    gender: "",
    qualification: "",
    currentWorkingPlace: "",
  },
};

const DoctorsModal = ({ open, setOpen }: TModalProps) => {
  const handleCreateDoctors = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Create a doctor">
      <PHForm onSubmit={handleCreateDoctors} defaultValues={defaultValues}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          my={5}
        >
          <Grid item xs={12} sm={12} md={4}>
            <PHInput name="doctor.name" label="Name" fullWidth={true}></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.email"
              label="Email"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="password"
              label="Password"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name=" doctor.contactNumber"
              label="Contact Number"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.experience"
              label="Experience"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHSelect
              name="doctor.gender"
              label="Gender"
              fullWidth={true}
              item={genderItem}
            ></PHSelect>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.appointmentFee"
              label="Appointment Fee"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
            ></PHInput>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
            ></PHInput>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="end">
          <Button type="submit">Create</Button>
        </Box>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default DoctorsModal;
