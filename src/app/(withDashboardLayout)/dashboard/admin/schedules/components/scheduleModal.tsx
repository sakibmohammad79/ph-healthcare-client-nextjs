import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHForm from "@/components/Forms/PHForm";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
type TScheduleModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ScheduleModal = ({ open, setOpen }: TScheduleModalProps) => {
  const handleCreateSchedule = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <PHModal open={open} setOpen={setOpen} title="Create schedule">
      <PHForm onSubmit={handleCreateSchedule}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <PHDatePicker></PHDatePicker>
          </Grid>
        </Grid>
        <Button sx={{ mt: 2 }} type="submit">
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModal;
