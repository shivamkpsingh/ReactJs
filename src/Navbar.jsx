import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar=()=>{
    return(
        <>
        <div className="Nav_style">
        <NavLink exact activeClassName="active_class" to='/'>About</NavLink>
        <NavLink exact activeClassName="active_class" to='/contact'>Contact</NavLink>
        <NavLink exact activeClassName="active_class" to='/search'>Search</NavLink>
        </div>
        <br/>
       {/* <a href="/">About</a>
       <a href="/contact">Contact</a> */}
        </>
    )
}

export default Navbar;