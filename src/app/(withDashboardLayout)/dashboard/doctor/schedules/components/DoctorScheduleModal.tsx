import PHModal from "@/components/Shared/PHModal/PHModal";
import { TextField } from "@mui/material";
import React from "react";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DoctorScheduleModal = ({ open, setOpen }: TModalProps) => {
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <TextField></TextField>
    </PHModal>
  );
};

export default DoctorScheduleModal;
