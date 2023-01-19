import React from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const MainPage = () => {

    const datas = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];

    return (
        <>
            <Navbar />
            {datas && datas.length > 0 ?
                <>
                    <div className="todo_container">
                        <h1>To do tasks:</h1>
                        {datas.map((data, index) => (
                            <div key={index} className="single_todo">
                                <h2>{data}</h2>
                                <Link to={`/view/${index}`}><AiOutlineEye size={"30px"} /></Link>
                            </div>
                        ))}
                    </div>
                </>
                :
                <>
                    <center> Nothing to show <Link to="/add">Add something</Link></center>
                </>
            }


        </>
    )
}

export default MainPage