import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHForm from "@/components/Forms/PHForm";
import PHTimePicker from "@/components/Forms/PHTimePicker";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
type TScheduleModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ScheduleModal = ({ open, setOpen }: TScheduleModalProps) => {
  const handleCreateSchedule = (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);
    console.log(values);
  };
  return (
    <PHModal open={open} setOpen={setOpen} title="Create schedule">
      <PHForm onSubmit={handleCreateSchedule}>
        <Grid container spacing={2} width="400px">
          <Grid item md={12}>
            <PHDatePicker name="startDate" label="Start Date"></PHDatePicker>
          </Grid>
          <Grid item md={12}>
            <PHDatePicker name="endDate" label="End Date"></PHDatePicker>
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="startTime" label="Start Time"></PHTimePicker>
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="endTime" label="End Time"></PHTimePicker>
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
