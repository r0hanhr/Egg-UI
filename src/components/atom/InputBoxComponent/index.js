import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { SearchOutlined } from "@mui/icons-material";

const InputBoxComponent = ({
  value = "",
  label = "",
  placeholder = "",
  onChange = () => {},
  disabled = false,
  size = "small",
  onIconClick = () => {},
  iconName = "",
  InputProps = {},
}) => {
  const getIcons = () => {
    if (iconName === "search") {
      return <SearchOutlined />;
    }

    return null;
  };

  return (
    <TextField
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      fullWidth
      size={size}
      InputProps={{
        startAdornment: iconName !== "" && (
          <InputAdornment position="start">{getIcons()}</InputAdornment>
        ),
        ...InputProps,
      }}
    />
  );
};

export default InputBoxComponent;
