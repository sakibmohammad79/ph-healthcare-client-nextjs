"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialityModal from "./components/SpecialistModal";

const SpecialityPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Speciality</Button>
        <SpecialityModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
        ></SpecialityModal>
        <TextField size="small" placeholder="Search Specialist"></TextField>
      </Stack>
    </Box>
  );
};

export default SpecialityPage;
