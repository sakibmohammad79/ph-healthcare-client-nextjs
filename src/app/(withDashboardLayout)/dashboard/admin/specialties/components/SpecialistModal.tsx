import PHFile from "@/components/Forms/PHFile";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

export type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TModalProps) => {
  const handleCreateSpeciality = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <PHModal open={open} setOpen={setOpen} title="Create A New Speciality">
      <PHForm onSubmit={handleCreateSpeciality}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="title" label="Title"></PHInput>
          </Grid>
          <Grid item md={6}>
            <PHFile name="file" label="Upload File"></PHFile>
          </Grid>
        </Grid>
        <Button sx={{ mt: 2 }} type="submit">
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistModal;
