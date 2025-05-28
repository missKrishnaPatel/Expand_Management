import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ActionButton = ({
  label = "Add",
  to = "/",
  color = "primary",
  align = "flex-end",
  icon = "➕"
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", justifyContent: align, mb: 2 }}>
      <Button variant="contained" color={color} onClick={() => navigate(to)}>
        {icon} {label}
      </Button>
    </Box>
  );
};

export default ActionButton;
