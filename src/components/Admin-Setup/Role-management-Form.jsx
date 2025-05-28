import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import formData from "../data/RoleFormData.json";

const UserForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    role: "",
    level: "",
    where: "",
    department: "",
    employee: ""
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "role" && value !== "Approver" ? { level: "" } : {}),
      ...(field === "where" && value !== "Department" ? { department: "", employee: "" } : {}),
      ...(field === "department" ? { employee: "" } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("records")) || [];
    const updatedData = [...existingData, form];
    localStorage.setItem("records", JSON.stringify(updatedData));
    navigate("/table");
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 6, px: 2 ,background:"f0f0f0" }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight={600} color="primary" gutterBottom>
          User Role Assignment
        </Typography>

        <FormControl fullWidth margin="normal">
          
          <InputLabel>Role</InputLabel>
          <Select value={form.role} onChange={(e) => handleChange("role", e.target.value)} label="Role">
            <MenuItem value="Approver">Approver</MenuItem>
            <MenuItem value="Submitter">Submitter</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>

        {form.role === "Approver" && (
          <FormControl fullWidth margin="normal">
            <InputLabel>Level</InputLabel>
            <Select value={form.level} onChange={(e) => handleChange("level", e.target.value)} label="Level">
              {formData.levels.map((lvl) => (
                <MenuItem key={lvl} value={lvl}>{lvl}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        <FormControl fullWidth margin="normal">
          <InputLabel>Where</InputLabel>
          <Select value={form.where} onChange={(e) => handleChange("where", e.target.value)} label="Where">
            <MenuItem value="Department">Department</MenuItem>
            <MenuItem value="Non-Department">Non-Department</MenuItem>
          </Select>
        </FormControl>

        {form.where === "Department" && (
          <FormControl fullWidth margin="normal">
            <InputLabel>Department</InputLabel>
            <Select value={form.department} onChange={(e) => handleChange("department", e.target.value)} label="Department">
              {Object.keys(formData.departments).map((dept) => (
                <MenuItem key={dept} value={dept}>{dept}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {(form.where === "Department" && form.department) || form.where === "Non-Department" ? (
          <FormControl fullWidth margin="normal">
            <InputLabel>Employee</InputLabel>
            <Select value={form.employee} onChange={(e) => handleChange("employee", e.target.value)} label="Employee">
              {(form.where === "Department"
                ? formData.departments[form.department] || []
                : formData.nonDepartmentEmployees
              ).map((emp) => (
                <MenuItem key={emp} value={emp}>{emp}</MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : null}

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          sx={{ mt: 3, py: 1.2, borderRadius: 2 }}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
};

export default UserForm;
