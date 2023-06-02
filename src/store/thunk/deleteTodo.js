import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const deleteTodo = createAsyncThunk('todo/delete', async (todo) => {
    await axios.delete(`http://localhost:3000/user/${todo.id}`);
    return todo;
});
