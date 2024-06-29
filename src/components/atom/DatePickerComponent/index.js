import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickerComponent = ({
  value = null,
  label = "",
  size = "small",
  onChange = () => {},
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        label={label}
        onChange={newData => {
          onChange(new Date(newData));
        }}
        sx={{
          "& .MuiInputBase-inputAdornedEnd": {
            py: 1,
          },
        }}
        renderInput={params => (
          <TextField
            {...params}
            fullWidth
            size={size}
            inputProps={{
              ...params.inputProps,
              readOnly: true,
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
