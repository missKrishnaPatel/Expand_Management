
import './App.css';

// import FormPage from './components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TablePage from './components/TablePage';
import ExpenseForm from './components/Form/ExpenseForm';
import SubmissionTable from './components/Admin-Setup/RoleTable';
import UserForm from './components/Admin-Setup/Role-management-Form';
import { useEffect } from 'react';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/form1" element={<ExpenseForm />} />
        <Route path="/form2"element={<UserForm/>} />
        <Route path="/table" element={<SubmissionTable/>} />

      </Routes>
    </Router>
  );
}

export default App;
