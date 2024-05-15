import PHModal from "@/components/Shared/PHModal/PHModal";

import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import MultipleSelectFieldChip from "./MultipleSelectFieldChip";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCreateDoctorSchedulesMutation } from "@/redux/api/doctorScheduleApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DoctorScheduleModal = ({ open, setOpen }: TModalProps) => {
  const [selectedDate, setSelectedDate] = React.useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedSchedulesIds, setSelectedSchedulesIds] = useState<string[]>(
    []
  );
  console.log(selectedSchedulesIds);

  const query: Record<string, any> = {};
  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules?.data;

  const [createDoctorSchedules, { isLoading }] =
    useCreateDoctorSchedulesMutation();

  const handleCreateDoctorSchedules = async () => {
    try {
      const res = await createDoctorSchedules({
        scheduleIds: selectedSchedulesIds,
      }).unwrap();
      if (res?.count > 0) {
        toast.success("Doctor schedules created success!");
        setOpen(false);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <Stack direction="column" gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={dayjs(selectedDate)}
            onChange={(newValue) =>
              setSelectedDate(dayjs(newValue).toISOString())
            }
            sx={{ width: "100%" }}
          />
        </LocalizationProvider>
        <MultipleSelectFieldChip
          schedules={schedules}
          selectedScheduleIds={selectedSchedulesIds}
          setSelectedSchedulesIds={setSelectedSchedulesIds}
        />
        <LoadingButton
          size="small"
          onClick={handleCreateDoctorSchedules}
          loading={isLoading}
          loadingIndicator="Loading…"
          variant="contained"
        >
          <span>Submit</span>
        </LoadingButton>
      </Stack>
    </PHModal>
  );
};

export default DoctorScheduleModal;
