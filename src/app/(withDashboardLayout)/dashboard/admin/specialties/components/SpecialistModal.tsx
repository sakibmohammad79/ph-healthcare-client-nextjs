import PHFile from "@/components/Forms/PHFile";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

export type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialityModal = ({ open, setOpen }: TModalProps) => {
  const handleCreateSpeciality = (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
    } catch (error: any) {
      console.log(error.message);
    }
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

export default SpecialityModal;
