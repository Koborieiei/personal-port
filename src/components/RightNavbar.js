import React from "react"
import styled from "styled-components"

const StyledUl = styled.ul`
  background-color: white;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
  font-size: 18px;
  height: 100%;
  margin-left: 20px;

  a {
    text-decoration: none;
    text-transform: none;
    color: #000;
    cursor: pointer;

    &:hover {
      color: var(--text-secondary);
    }
  }

  li {
    padding: 10px 10px;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    /* background-color: #fdfdfdfa; */
    position: fixed;
    transform: ${props => (props.open ? "translateX(0)" : "translateX(100%)")};
    top: -16px;
    right: 0;
    height: 100%;
    width: 180px;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;

    li {
      color: #000;
      margin-right: 34px;

      &:hover {
        color: #0dadea;
      }
    }
  }
`
export const LogoUl = styled.h2`
  margin: 20px 50px 20px 5%;
  display: none;
  color: black;
  @media (max-width: 768px) {
    display: flex;
    width: 160px;
    height: 70px;
    object-fit: contain;
  }
`

export default function RightNavbar({ isopen }) {
  console.log(isopen)
  return (
    <StyledUl open={isopen}>
      <li>
        <a href="#intro">Myself</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a href="#project">Project</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </StyledUl>
  )
}
