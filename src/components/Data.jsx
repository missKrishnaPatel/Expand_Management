// src/Data.js

const STORAGE_KEY = "expenses";

export const getExpenses = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addExpense = (expense) => {
  const current = getExpenses();
  const updated = [...current, expense];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
