import PHModal from "@/components/Shared/PHModal/PHModal";
import React from "react";

export type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TModalProps) => {
  return <PHModal></PHModal>;
};

export default SpecialistModal;
