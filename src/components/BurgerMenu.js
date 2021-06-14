import React, { useState } from "react"
import mq from "../utils/mediaQuery"
import styled from "styled-components"
import RightNavbar from "./RightNavbar"

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  ${mq.m} {
    display: flex;
    justify-content: space-around;
    flex-flow: column wrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${props => (props.open ? "#000" : "#000")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${props => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${props =>
        props.open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${props => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${props => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <StyledBurger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavbar isopen={isOpen} />
    </>
  )
}
