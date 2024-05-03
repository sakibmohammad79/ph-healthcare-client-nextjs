import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
type TPhInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
};
const PHInput = ({
  name,
  label,
  size = "small",
  type = "text",
  fullWidth,
}: TPhInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          size={size}
          type={type}
          fullWidth={fullWidth}
        >
          {" "}
        </TextField>
      )}
    />
  );
};

export default PHInput;
