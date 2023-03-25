import api from "./apiConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await api.post("/api/accounts/login/", credentials);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    alert("Invalid Username or password");
    throw error;
  }
});

