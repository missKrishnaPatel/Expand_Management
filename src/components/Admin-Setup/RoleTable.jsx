import React from "react";
import { Typography, Box, TableRow, TableCell, Button, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ReusableTable from "../TableStructure";
import ExpenseHeader from "../ExpenseHeader";
import ActionButton from "../ActionButton";

const SubmissionTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const records = JSON.parse(localStorage.getItem("records")) || [];


  if (records.length === 0) {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>No data submitted.</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/form2")}>
        Go Back to Form
      </Button>
    </Box>
  );
}


  const columns = ["Role", "Level", "Where", "Department", "Employee"];
  const data = records;

  const renderRow = (row, idx) => (
    <TableRow key={idx} hover>
      <TableCell>{row.role}</TableCell>
      <TableCell>{row.level || "-"}</TableCell>
      <TableCell>{row.where}</TableCell>
      <TableCell>{row.department || "-"}</TableCell>
      <TableCell>{row.employee}</TableCell>
    </TableRow>
  );

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <ExpenseHeader title="Submitted Record" />
{/*         
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
            sx={{ borderRadius: 2, px: 3, py: 1 }}
          >
            ➕ Add New
          </Button>
        </Box> */}
        <ActionButton to="/form2" />
        <ReusableTable columns={columns} data={data} renderRow={renderRow} />
      </Paper>
    </Box>
  );
};

export default SubmissionTable;
