"use client";
import { Box, Button, CircularProgress, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetSingleDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { TSchdule } from "@/types/schedule";

const DoctorSchedules = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [allDoctorSchedule, setAllDoctorSchedule] = useState<any>([]);
  const { data, isLoading } = useGetSingleDoctorSchedulesQuery({});

  const doctorSchedules = data?.doctorSchedules?.data;
  console.log(doctorSchedules);

  useEffect(() => {
    const updateDate = doctorSchedules?.map((schedule: TSchdule) => {
      return {
        id: schedule?.id,
        startDate: dateFormatter(schedule?.startDateTime),
        endDate: dateFormatter(schedule?.endDateTime),
        startTime: dayjs(schedule?.startDateTime).format("hh:mm a"),
        endTime: dayjs(schedule?.endDateTime).format("hh:mm a"),
      };
    });
    setAllDoctorSchedule(updateDate);
  }, [doctorSchedules]);

  const handleScheduleDelete = async (id: string) => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              sx={{ color: "red" }}
              onClick={() => handleScheduleDelete(row?.id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedules</Button>
      <DoctorScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
      ></DoctorScheduleModal>

      <Box>
        {!isLoading ? (
          <Box my={2} justifyContent="center" alignItems="center">
            <DataGrid
              rows={allDoctorSchedule ?? []}
              columns={columns}
              hideFooter
            />
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
    </Box>
  );
};

export default DoctorSchedules;
