import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addTodo = createAsyncThunk('todo/add', async (data) => {
    const response = await axios.post('http://localhost:3000/user', data);
    return response.data;
});
