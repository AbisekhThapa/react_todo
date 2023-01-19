import React from 'react'
import Navbar from '../Navbar';
import { Link, useHistory, useParams } from 'react-router-dom';
import AuthcheckBoolean from '../../middleware/AuthcheckBoolean'

const ViewPages = () => {
    const history = useHistory();
    const getId = useParams();
    const getData = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
    const item = getData[getId.id];

    const deleteTodo = () => {
        history.replace('/');
        getData.splice(getId.id, 1);
        localStorage.setItem("todo", JSON.stringify(getData));
    }

    return (<>
        <Navbar />

        <div className="todo_container">
            <button onClick={() => {
                history.push('/');
            }}>Go to Home</button>
        </div>
        <div className="single_todo" style={{ margin: '40px' }}>
            <h1>{item}</h1>
        </div>
        {AuthcheckBoolean() ?
            <>
                <button style={{ background: 'red' }} onClick={deleteTodo}>Delete</button>
            </>
            :
            <>
                <p>For more option <Link to='/login'>Login here</Link></p>
            </>}
    </>
    )
}

export default ViewPages;