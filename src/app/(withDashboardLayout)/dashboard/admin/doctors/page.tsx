"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorsModal from "./components/doctorsModal";

const DoctorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Doctors</Button>
        <DoctorsModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
        ></DoctorsModal>
        <TextField size="small" placeholder="Search Doctors"></TextField>
      </Stack>
    </Box>
  );
};

export default DoctorPage;
