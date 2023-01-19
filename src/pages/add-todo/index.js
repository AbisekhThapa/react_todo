import React from 'react'
import Navbar from '../Navbar';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Authcheck from '../../middleware/Authcheck';

const AddTodo = () => {

    Authcheck();

    const todoText = useRef();
    const history = useHistory();

    const toDoAdd = (e) => {
        e.preventDefault();
        const text = todoText.current.value;
        const initialTodo = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
        initialTodo.push(text);
        localStorage.setItem("todo",
            JSON.stringify(initialTodo));
        history.push("/");
    }

    return (<>
        <Navbar />
        <div className="todo_container">
            <h1>Add To Do:</h1>

            <form onSubmit={toDoAdd}>
                <input type="text" ref={todoText}></input>
                <button>Add</button>
            </form>
        </div>
    </>
    )
}

export default AddTodo;