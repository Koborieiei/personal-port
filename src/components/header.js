import * as React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const NavBar = styled.nav`
  padding: var(--padding_size);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
`

const NavItemContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: center;
`

const NavItem = styled.div`
  color: rgba(70, 70, 70);
  flex-basis: 100px;
  margin: 10px;
  font-size: 15px;
`
const Header = ({ siteTitle }) => (
  <header>
    <NavBar>
      <NavItemContainer>
        <NavItem>mawin.boonwi@gmail.com</NavItem>
      </NavItemContainer>
      <NavItemContainer>
        <a href="#project">
          <NavItem>Works</NavItem>
        </a>

        <a href="#resume">
          <NavItem>Resume</NavItem>
        </a>
        <NavItem>Contact</NavItem>
      </NavItemContainer>
    </NavBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
