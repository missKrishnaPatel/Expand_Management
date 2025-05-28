import { Box, Button, TableRow, TableCell } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReusableTable from "../TableStructure";
import StatusBadge from "./StatusBadge";
import ActionButton from "../ActionButton";

const ExpenseTable = ({ data }) => {
  const navigate = useNavigate();

  const handleStatusChange = (index, newStatus) => {
    const updatedData = [...data];
    updatedData[index].status = newStatus;
    localStorage.setItem("expenses", JSON.stringify(updatedData));
    window.location.reload(); 
  };

  const columns = ["Type of Expense", "Sub-Type", "Amount", "Bill", "Status"];

  const renderRow = (row, idx) => (
    <TableRow key={idx}>
      <TableCell>{row.type}</TableCell>
      <TableCell>{row.subType}</TableCell>
      <TableCell>{row.amount}</TableCell>
      <TableCell>
        <a href={row.billUrl} target="_blank" rel="noreferrer">
          View
        </a>
      </TableCell>
      <TableCell>
        <StatusBadge
          status={row.status}
          onChange={(newStatus) => handleStatusChange(idx, newStatus)}
        />
      </TableCell>
    </TableRow>
  );

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        
        <ActionButton to="/form1"/>
      </Box>

      <ReusableTable columns={columns} data={data} renderRow={renderRow} />
    </Box>
  );
};

export default ExpenseTable;
