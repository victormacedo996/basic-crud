import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = props => {
    return (
        <Link to={props.link}>
                <i className={`fa fa-${props.icon}`}></i> {props.label}
        </Link>
    )
}

export default NavItem