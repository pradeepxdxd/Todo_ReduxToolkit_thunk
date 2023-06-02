import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { deleteTodo } from '../store/thunk/deleteTodo';
import { useDispatch } from 'react-redux'

export default function DeleteTodo({todo}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo));
    }
    
    return (
        <>
            <AiOutlineDelete onClick={handleDelete} style={{cursor : 'pointer'}}/>
        </>
    )
}
