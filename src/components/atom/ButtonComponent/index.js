import { Button } from "@mui/material";
import React from "react";

const ButtonComponent = ({
  label = "",
  variant = "contained",
  onClick = () => {},
  className = "",
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      fullWidth
      className={`${
        variant === "contained" ? "contained-button" : "outlined-button"
      } ${className}`}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
