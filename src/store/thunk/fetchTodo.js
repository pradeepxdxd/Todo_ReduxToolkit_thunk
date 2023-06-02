import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodoList = createAsyncThunk('todo/fetch', async () => {
    const response = await axios.get('http://localhost:3000/user');
    return response.data;
})