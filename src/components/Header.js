import React, { Component } from 'react'

// Styles
import '../css/header.css'

// Components
import Logo from './Logo'
import LinkPerfil from './LinkPerfil'

class Header extends Component {
    render () {
        return (
            <header>
                <div className="container">
                    <Logo></Logo>
                    <LinkPerfil></LinkPerfil>
                </div>
            </header>
        )
    }
}

export default Header