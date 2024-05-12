import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import { SxProps } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";

interface ITimePicker {
  name: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  required?: boolean;
  label?: string;
  sx?: SxProps;
}
const PHTimePicker = ({
  name,
  type,
  label,
  size = "small",
  sx,
  fullWidth = true,
  required,
}: ITimePicker) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            timezone="system"
            disablePast
            {...field}
            onChange={(time) => onChange(time)}
            value={value || Date.now()}
            slotProps={{
              textField: {
                required: required,
                fullWidth: fullWidth,
                size: size,
                sx: { ...sx },
                variant: "outlined",
                label: label,
                error: isError,
                helperText: isError
                  ? (formState.errors[name]?.message as string)
                  : "",
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default PHTimePicker;
