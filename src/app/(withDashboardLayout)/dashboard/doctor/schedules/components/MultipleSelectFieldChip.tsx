import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

// type TDoctorScheduleProps = {
//   id: string;
//   startDateTime: string;
//   endDateTime: string;
//   createdAt?: string;
//   updatedAt?: string;
// };

export const timeFormatter = (value: string) => {
  const date = new Date(value);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours < 12 ? "AM" : "PM";
  const formattedHours = hours % 12 || 12; // Handle 0 as 12
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
  return formattedTime;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectFieldChip({
  schedules,
  selectedScheduleIds,
  setSelectedSchedulesIds,
}: any) {
  const theme = useTheme();
  // const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (
    event: SelectChangeEvent<typeof selectedScheduleIds>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedSchedulesIds(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedScheduleIds}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value: any) => {
                const selectedScheduleFieldIds = schedules.find(
                  (schedule: any) => schedule.id === value
                );
                if (!selectedScheduleFieldIds) return null;
                const formattedTimeSlot = `${timeFormatter(
                  selectedScheduleFieldIds.startDateTime
                )} - ${timeFormatter(selectedScheduleFieldIds.endDateTime)}`;
                return <Chip key={value} label={formattedTimeSlot} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {schedules.map((schedule: any) => (
            <MenuItem
              key={schedule.id}
              value={schedule.id}
              style={getStyles(schedule.id, selectedScheduleIds, theme)}
            >
              {`${timeFormatter(schedule.startDateTime)} - ${timeFormatter(
                schedule.endDateTime
              )}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
