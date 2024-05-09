"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialityModal from "./components/SpecialistModal";
import { useGetAllSpecialiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const columns: GridColDef[] = [
  { field: "title", headerName: "Title", width: 200 },
  {
    field: "icon",
    headerName: "icon",
    width: 200,
    renderCell: ({ row }) => {
      return (
        <Box>
          <Image src={row?.icon} alt="specialityImage" width={30} height={30} />
        </Box>
      );
    },
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
        <Box my={2} justifyContent="center" alignItems="center">
          <DataGrid rows={data} columns={columns} hideFooter />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default SpecialityPage;
