import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const DropDownComponent = ({
  value = null,
  list = [],
  placeholder = "",
  size = "small",
  disabled = false,
  onChange = () => {},
}) => {
  return (
    <Autocomplete
      value={value}
      options={list}
      size={size}
      fullWidth
      disabled={disabled}
      onChange={(_event, newValue) => {
        onChange(newValue);
      }}
      renderInput={params => (
        <TextField {...params} fullWidth placeholder={placeholder} />
      )}
    />
  );
};

export default DropDownComponent;
