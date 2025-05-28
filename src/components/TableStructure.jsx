import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ReusableTable = ({ columns, data, renderRow }) => {
  return (
    <TableContainer component={Paper} sx={{ height: "100%", overflow: "auto" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "lightblue"}}>
            {columns.map((col, idx) => (
              <TableCell key={idx}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => renderRow(row, idx))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
