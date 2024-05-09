"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialityModal from "./components/SpecialistModal";
import { useGetAllSpecialiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

const columns: GridColDef[] = [
  { field: "title", headerName: "Title", width: 150 },
  {
    field: "icon",
    headerName: "icon",
    width: 150,
    // renderCell: ({ row }) => {
    //   <Image src={row?.icon} alt="specialityImage" />;
    // },
  },
];

const SpecialityPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialiesQuery({});
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
      {!isLoading ? (
        <Box>
          <DataGrid rows={data} columns={columns} hideFooter />
        </Box>
      ) : (
        <h2>isLoading....</h2>
      )}
    </Box>
  );
};

export default SpecialityPage;
