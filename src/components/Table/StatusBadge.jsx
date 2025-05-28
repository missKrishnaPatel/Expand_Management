import React from "react";
import { Box, Select, MenuItem } from "@mui/material";

const StatusBadge = ({ status, onChange }) => {
  const getColor = (status) => {
    switch (status.toLowerCase()) {
      case "done":
        return { bg: "#c8e6c9", color: "#black" }; 
      case "pending":
        return { bg: "#fff9c4", color: "black" }; 
      case "not seen":
      default:
        return { bg: "#ffcdd2", color: "black" }; 
    }
  };

  const { bg, color } = getColor(status);

  const renderBadge = (statusValue) => {
    const { bg, color } = getColor(statusValue);
    return (
      <Box
        sx={{
          display: "inline-block",
          px: 2,
          py: 0.5,
          borderRadius: "20px",
          backgroundColor: bg,
          color,
          fontWeight: 500,
          fontSize: "0.85rem",
          textTransform: "capitalize",
        }}
      >
        {statusValue}
      </Box>
    );
  };

  return (
    <Select
      value={status}
      onChange={(e) => onChange(e.target.value)}
      size="small"
      renderValue={(selected) => renderBadge(selected)}
    >
       <MenuItem value="not seen">{renderBadge("not seen")}</MenuItem>
      <MenuItem value="done">{renderBadge("done")}</MenuItem>
      <MenuItem value="pending">{renderBadge("pending")}</MenuItem>
     
    </Select>
  );
};

export default StatusBadge;
