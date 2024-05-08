import PHModal from "@/components/Shared/PHModal/PHModal";
import { TextField } from "@mui/material";
import React from "react";

export type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TModalProps) => {
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Speciality">
      <TextField>Form Data</TextField>
    </PHModal>
  );
};

export default SpecialistModal;
