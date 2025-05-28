import React from "react";
import { Grid, Typography } from "@mui/material";
// import AddCircleOutlineIcon from "@mi/icons-material/AddCircleOutline";
// import { useNavigate } from "react-router-dom";

const ExpenseHeader = ({title}) => {
  // const navigate = useNavigate();

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginBottom: 2 }}
    >
      <Typography variant="h4" fontWeight={600} color="primary">
        {title}
      </Typography>
      
    </Grid>
  );
};

export default ExpenseHeader;
