import PHModal from "@/components/Shared/PHModal/PHModal";

import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DoctorScheduleModal = ({ open, setOpen }: TModalProps) => {
  const [selecteValue, setSelectedValue] = React.useState(
    dayjs(new Date()).toISOString()
  );
  console.log(selecteValue);

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={dayjs(selecteValue)}
          onChange={(newValue) =>
            setSelectedValue(dayjs(newValue).toISOString())
          }
        />
      </LocalizationProvider>
    </PHModal>
  );
};

export default DoctorScheduleModal;
