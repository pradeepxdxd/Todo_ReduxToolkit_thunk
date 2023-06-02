import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from "../store/thunk/fetchTodo";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

export default function Todos() {
    const { data, isLoading, isError } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodoList());
    }, [dispatch]);

    let content;
    if (isLoading) {
        content = <div>Loading...</div>
    }
    else if (isError) {
        content = <div>Something went wrong on fetching data</div>
    }

    return (
        <>
            {content}
            {data?.map(todo =>
                <>
                    <section class="bg-light">
                        <figure class="note note-secondary p-4">
                            <blockquote class="blockquote" key={todo.id}>
                                <p class="pb-2">{todo.msg}</p>
                            </blockquote>
                            <figcaption class="blockquote-footer mb-0">{todo.name}</figcaption>
                                <div>
                                    <DeleteTodo todo={todo}/> <EditTodo todo={todo} />
                                </div>
                            <br />
                        </figure>
                    </section>
                </>
            )}
        </>
    )
}
