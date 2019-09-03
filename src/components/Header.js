import React, { Component } from 'react'

// Styles
import '../css/header.css'

// Images
import logo from '../images/logo.png'

class Header extends Component {
    render () {
        return (
            <header>
                <div className="container">
                    <img src={logo} alt="Logo" className="logo"/>
                    <span className="link-perfil">Meu perfil</span>
                </div>
            </header>
        )
    }
}

export default Header