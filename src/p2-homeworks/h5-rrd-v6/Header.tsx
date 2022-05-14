import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            <NavLink style={{margin: "5px"}} to={'/pre-junior'}>pre-junior</NavLink>
            <NavLink style={{margin: "5px"}} to={'/junior'}>junior</NavLink>
            <NavLink style={{margin: "5px"}} to={'/junior+'}>junior+</NavLink>
        </div>
    )
}

export default Header
