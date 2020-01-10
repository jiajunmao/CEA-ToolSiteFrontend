import React, { Component } from 'react'
import { Nav, NavItem, Navbar, } from 'react-bootstrap'
import logo from '../logo.png'
import './Header.css'

class Header extends Component {
    
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className="header" href="#home" >
                <img
                    alt=""
                    src={logo}
                    width="40"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                CEA Cloud
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header;