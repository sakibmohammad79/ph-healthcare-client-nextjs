"use client";
import { Box, Button, CircularProgress, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import ScheduleModal from "./components/scheduleModal";
import {
  useDeleteScheduleMutation,
  useGetAllSchedulesQuery,
} from "@/redux/api/scheduleApi";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { TSchdule } from "@/types/schedule";
import { toast } from "sonner";

const SchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllSchedulesQuery({});
  const [deleteSchedule] = useDeleteScheduleMutation();
  const schedules = data?.schedules?.data;
  const meta = data?.meta;

  useEffect(() => {
    const updateDate = schedules?.map((schedule: TSchdule) => {
      return {
        id: schedule?.id,
        startDate: dateFormatter(schedule?.startDateTime),
        endDate: dateFormatter(schedule?.endDateTime),
        startTime: dayjs(schedule?.startDateTime).format("hh:mm a"),
        endTime: dayjs(schedule?.endDateTime).format("hh:mm a"),
      };
    });
    setAllSchedule(updateDate);
  }, [schedules]);

  const handleScheduleDelete = async (id: string) => {
    try {
      const res = await deleteSchedule(id).unwrap();

      if (res?.id) {
        toast.success("Schedule deleted successfully!");
      }
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
            <IconButton
              // onClick={() => handleSpecialityDelete(row?.id)}
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
      ></ScheduleModal>
      <Box>
        {!isLoading ? (
          <Box my={2} justifyContent="center" alignItems="center">
            <DataGrid rows={allSchedule ?? []} columns={columns} hideFooter />
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

export default SchedulePage;
