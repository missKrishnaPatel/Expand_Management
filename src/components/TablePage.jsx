import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import ExpenseHeader from "./ExpenseHeader";
import ExpenseTable from "./Table/ExpenseTable";
import { getExpenses,addExpense } from "./Data";

const TablePage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setData(getExpenses());
  }, [location]);

  useEffect(()=>{
    console.log("expense");
  },[])

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9f9f9",
        padding: 2,
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <ExpenseHeader title="Expense Management"/>
      </Box>

      <Box sx={{ flexGrow: 1, minHeight: 0 }}>
        <ExpenseTable data={data} />
      </Box>
    </Box>
  );
};

export default TablePage;
