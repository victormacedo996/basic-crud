import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

const Nav = props => {
    return (
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" link="/" label="Início" />
            <NavItem icon="users" link="/users" label="Usuários"/>
        </nav>
        
    </aside>
    )
}



export default Nav