"use client";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import ScheduleModal from "./components/scheduleModal";

const SchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
      ></ScheduleModal>
      <Box>
        <h2>display schedule data</h2>
      </Box>
    </Box>
  );
};

export default SchedulePage;
