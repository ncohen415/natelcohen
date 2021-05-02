import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//Components
import Nav from "./nav"
import { media } from "../mq"

const OverlayInput = styled.input`
  display: none;

  input[type="checkbox"]:checked ~ #overlay {
    visibility: visible;
  }

  input[type="checkbox"]:checked ~ #overlay-button {
    &:hover span,
    span {
      background: transparent;
    }
    span {
      &:before {
        transform: rotate(45deg) translate(7px, 7px);
        opacity: 1;
      }
      &:after {
        transform: rotate(-45deg) translate(7px, -7px);
      }
    }
  }
`

const OverlayButton = styled.label`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  padding: 26px 33px;
  z-index: 21;
  cursor: pointer;
  user-select: none;
  ${media.medium`display:none;`}
  #one {
    top: 1rem;
    left: 1rem;
    position: absolute;
    height: 2px;
    width: 30px;
    border-radius: 2px;
    background-color: black;
    display: block;
    transition: all 0.2s ease-in-out;
    &.close {
      opacity: 1;
      transform: rotate(45deg) translate(6px, 6px);
      ${media.xsmall`transform: rotate(45deg) translate(6px, 6px);`}
      ${media.small`transform: rotate(45deg) translate(6.5px, 6.5px);`}
    }
  }
  #two {
    top: 1.5rem;
    left: 1rem;
    position: absolute;
    height: 2px;
    width: 30px;
    border-radius: 2px;
    background-color: black;
    transition: all 0.2s ease-in-out;
    &.close {
      background-color: transparent;
    }
  }
  #three {
    top: 2rem;
    left: 1rem;
    position: absolute;
    height: 2px;
    width: 30px;
    border-radius: 2px;
    background-color: black;
    transition: all 0.2s ease-in-out;
    &.close {
      transform: rotate(-45deg) translate(5.5px, -5.5px);
      ${media.xsmall`  transform: rotate(-45deg) translate(6px, -6px);`}
      ${media.small`  transform: rotate(-45deg) translate(6.5px, -6.5px);`}
    }
  }
`

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
  z-index: -1;
  display: none;
  position: fixed;
  transition: all 0.2s ease;
  ${media.medium`display: none;`}
  &.active {
    display: block;
    z-index: 20;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    padding-left: 0;
    list-style-type: none;
    li {
      padding: 0 0 2% 0;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 30px;
      a {
        color: black;
        transition: color 0.4s ease;
        display: block;
        text-decoration: none;
      }
    }
    .socials {
      display: flex;
      a {
        padding: 0 10px 0 10px;
        img {
          margin: 0;
          width: 35px;
          height: 35px;
          transition: opacity 0.2s ease;
        }
      }
    }
  }
`

const MobileNav = ({ menu }) => {
  const [isChecked, setIschecked] = useState(false)

  const toggleMenu = () => setIschecked(!isChecked)
  return (
    <>
      <OverlayInput type="checkbox" id="overlay-input" />
      <OverlayButton
        onClick={toggleMenu}
        htmlFor="overlay-input"
        id="overlay-button"
      >
        <span id="one" className={isChecked === true ? "close" : ""}></span>
        <span id="two" className={isChecked === true ? "close" : ""}></span>
        <span id="three" className={isChecked === true ? "close" : ""}></span>
      </OverlayButton>
      <Overlay className={isChecked === true ? "active" : ""}>
        <Nav menu={menu} />
      </Overlay>
    </>
  )
}

export default MobileNav
