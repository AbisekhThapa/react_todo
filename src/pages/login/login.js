import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('logedIn')
        history.push("/")
    }

    return (<>
        <Navbar />
        <div className='todo_container'>
            {localStorage.getItem("logedIn") ?
                <>
                    <div>
                        You are Logged in.
                        <b onClick={logout} style={{ color: 'red', cursor: 'pointer' }}>Logout</b>
                    </div>
                </>
                :
                <>
                    <button onClick={() => {
                        localStorage.setItem("logedIn", true);
                        alert("You are sucessfully logged in");
                        history.replace("/add");
                    }}>Login</button>
                </>
            }
            <br />
            <br />
            <Link to='/login/nested'>Click here</Link>
            <br />
            <br />
            <Route path='/login/nested'>
                <div>This is Nested route</div>
            </Route>

        </div>
    </>
    )
}

export default Login