"use client";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteDoctorScheduleMutation,
  useGetSingleDoctorSchedulesQuery,
} from "@/redux/api/doctorScheduleApi";
import { TSchdule } from "@/types/schedule";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DoctorSchedules = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  query["page"] = page;
  query["limit"] = limit;
  const [allDoctorSchedule, setAllDoctorSchedule] = useState<any>([]);
  const { data, isLoading } = useGetSingleDoctorSchedulesQuery({ ...query });

  const meta = data?.doctorSchedules?.meta;

  const [deleteDoctorSchedule] = useDeleteDoctorScheduleMutation();

  const doctorSchedules = data?.doctorSchedules?.data;
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

  const handleDoctorScheduleDelete = async (id: string) => {
    try {
      const res = await deleteDoctorSchedule(id).unwrap();
      console.log(res);
      if (res?.doctorId) {
        toast.success("Doctor schedule deleted successfully!");
        router.refresh();
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
              onClick={() => handleDoctorScheduleDelete(row?.id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  let pageCount: number;

  if (meta) {
    pageCount = Math.ceil(meta.total / limit);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
              hideFooterPagination
              slots={{
                footer: () => {
                  return (
                    <Box
                      mb={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handleChange}
                      />
                    </Box>
                  );
                },
              }}
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
