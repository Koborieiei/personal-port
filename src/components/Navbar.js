import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import BurgerMenu from "./BurgerMenu"

const NavBar = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: --var(padding_size);
  @media (max-width: 678px) {
    width: 100vw;
  }

  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }
`

export const Logo = styled.h5`
  z-index: 30;
  margin: 20px 50px 20px 7%;
  font-size: 20px;
  font-weight: normal;
  /* color: black; */
  /* width: 160px; */
  /* height: 70px; */
  object-fit: contain;

  @media (max-width: 1250px) {
    margin: 20px 50px 20px 5%;
  }
`

const Navbar = () => {

  return (
    <header>
      <NavBar>
        <Logo>mawin.boonwi@gmail.com</Logo>
        <BurgerMenu />
      </NavBar>
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
