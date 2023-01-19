import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav_bar'>
            To Do App
            <div className="menu_items">
                <Link to='/'>Home</Link>
                <Link to='/add'>Add to do</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Navbar