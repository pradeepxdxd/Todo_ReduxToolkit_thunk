import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Todos from "./Todos";
import {useDispatch} from 'react-redux'
import {addTodo} from '../store/thunk/addTodo'

export default function Todo() {
    const [name, setName] = useState('');
    const [todo, setTodo] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addTodo({name, msg : todo}));
    }

    return (
        <>
            <div
                style={{
                    width: "300px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "120px",
                }}
            >
                <h2 style={{ color: "lightgray", fontFamily:'cursive' }}>Create your todo!</h2>
                <input
                    style={{
                        width: "350px",
                        margin: "5px 0",
                        fontSize: "1.5rem",
                        fontFamily: "cursive",
                    }}
                    type="text"
                    placeholder="Enter Name"
                    onChange={e => setName(e.target.value)}
                    required={true}
                />
                <br />
                <input
                    style={{
                        width: "350px",
                        margin: "5px 0",
                        fontSize: "1.5rem",
                        fontFamily: "cursive",
                    }}
                    type="text"
                    placeholder="Enter Todo"
                    onChange={e => setTodo(e.target.value)}
                    required={true}
                />
                <Button variant="outline-success" style={{ marginTop: '13px', marginLeft: '140px', fontFamily:'cursive' }} onClick={handleSubmit}>submit</Button>
            </div>

            <div style={{
                width: "300px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px",
            }}>
                <Todos />
            </div>
        </>
    );
}
