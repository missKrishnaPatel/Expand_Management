import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
import expenseData from "../data/expenseData.json";
import { useNavigate } from "react-router-dom";

 import { addExpense } from "../Data"; 

const ExpenseForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    category: "",
    subCategory: "",
    amount: "",
    bill: null,
  });



//   useEffect(()=>{
//     // localStorage.clear();
//     console.log('expense');
//   },[]);


  const handleChange = (field, value) => {
    let updatedForm = { ...form, [field]: value };

 
    if (field === "subCategory" && form.category) {
      updatedForm.amount = expenseData[form.category][value] || "";
    }


    if (field === "category") {
      updatedForm.subCategory = "";
      updatedForm.amount = "";
    }

    setForm(updatedForm);
  };





const handleSubmit = (e) => {
  e.preventDefault();

  if (form.category && form.subCategory && form.amount && form.bill) {
    const newExpense = {
      type: form.category,
      subType: form.subCategory,
      amount: form.amount,
      billUrl: URL.createObjectURL(form.bill),
      status: "pending",
    };

    addExpense(newExpense); 
    navigate("/");         
  }
};


  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper elevation={4} sx={{ p: 4, width: "100%", maxWidth: 700 }}>
        <Typography variant="h5" gutterBottom>
          Submit Expense
        </Typography>




        <form onSubmit={handleSubmit}>
         



          <Typography variant="subtitle2" mt={2}>
            Select Category
          </Typography>
          <FormControl fullWidth margin="dense" >
            {/* <InputLabel>Category</InputLabel> */}
            
            <Select
              value={form.category}
              onChange={(e) => handleChange("category", e.target.value)}
             
              required
            >
              {Object.keys(expenseData).map((key) => (
                <MenuItem key={key} value={key} >
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>







         
          <Typography variant="subtitle2" mt={2}>
            Select Sub-category
          </Typography>
          <FormControl fullWidth margin="dense" disabled={!form.category}>
         
            <Select
              value={form.subCategory}
              onChange={(e) => handleChange("subCategory", e.target.value)}
              required
            >
              {form.category &&
                Object.keys(expenseData[form.category]).map((key) => (
                  <MenuItem key={key} value={key}>
                    {key}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          



          <Typography variant="subtitle2" mt={2}>
            Amount
          </Typography>
          <TextField
            type="text"
            // label="Amount"
            placeholder="Amount"
            fullWidth
            margin="dense"
            value={form.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
            // onClick={handleChange}
            // InputProps={{ readOnly: true }}
          />

        



          <Typography variant="subtitle2" mt={2}>
            Upload Bill
          </Typography>
          <Button variant="outlined" component="label" fullWidth sx={{ my: 1 }}>
            Upload File
            <input
              type="file"
              hidden
              
              onChange={(e) =>
                handleChange("bill", e.target.files ? e.target.files[0] : null)
              }
            />
          </Button>

          




          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
           
            // disabled={
            //   !form.category || !form.subCategory || !form.amount || !form.bill
            // }
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ExpenseForm;
