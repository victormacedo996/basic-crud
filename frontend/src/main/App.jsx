import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Nav from '../components/templates/Nav'
import Logo from '../components/templates/Logo'
// import Home from '../components/home/Home' // o Header está dentro da Main, por isso não importa o Header
import Footer from '../components/templates/Footer'

const App = props => {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>

    )
}

export default App