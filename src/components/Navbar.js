import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import * as Pages from './Pages'

class Navbar extends Component {
    render() {
        return  <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/"><img src={Pages.logo} className="navbar-brand" /></Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5"><Link to="/" className="nav-link">products</Link></li>
            </ul>
            <Link to="/cart" className="ml-auto"><Pages.Button><span className="mr-2"><i className="fas fa-cart-plus" /></span> my cart</Pages.Button></Link>
        </NavWrapper>
    }
}

const NavWrapper = styled.nav`
    background-color: var(--mainBlue);

    .nav-link{
        color: var(--white)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`

export default Navbar

