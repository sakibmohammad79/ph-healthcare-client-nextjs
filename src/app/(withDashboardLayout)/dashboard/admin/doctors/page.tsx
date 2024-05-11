"use client";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import DoctorsModal from "./components/doctorsModal";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorsApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const DoctorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllDoctorsQuery({});
  const doctors = data?.doctors;
  const meta = data?.meta;

  const handleSpecialityDelete = async (id: string) => {
    try {
      // const res = await deleteSpeciality(id).unwrap();
      // if (res?.id) {
      //   toast.success("Speciality delete successfully!");
      // }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "currentWorkingPlace", headerName: "Working place", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton
            onClick={() => handleSpecialityDelete(row?.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];
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
      {!isLoading ? (
        <Box my={2} justifyContent="center" alignItems="center">
          <DataGrid rows={doctors} columns={columns} hideFooter={true} />
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

export default DoctorPage;
