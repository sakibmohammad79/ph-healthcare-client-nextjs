"use client";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const DoctorSchedules = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedules</Button>
      <DoctorScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
      ></DoctorScheduleModal>

      <h2>Display Schedule Data</h2>
    </Box>
  );
};

export default DoctorSchedules;
