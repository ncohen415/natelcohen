import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../../components/mq"

//images
import Email from "../../images/social/mail.svg"
import Instagram from "../../images/social/ig.svg"

//Components
import NavItem from "./nav-item"

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: #ffffff;
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    list-style: none;
    margin: 0;
    padding: 0;
    ${media.medium`padding: 0; margin: 2rem 0 0 2rem; list-style-type: none; height: 100%;`}
    .socials {
      display: flex;
      justify-content: center;
      margin: 0.5rem 0 0.5rem 0;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 15px;
      width: 100%;
      ${media.medium`justify-content: flex-start`}
      a {
        img {
          max-width: 30px;
          max-height: 30px;
          transition: opacity 0.2s ease;
          opacity: 0.6;
          ${media.medium`max-height: 17px; max-width: 17px; margin-right: .75rem;`}
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
`

const Nav = ({ menu }) => {
  return (
    <NavContainer>
      <ul className="nav">
        {menu.map(menuItem => {
          return <NavItem menuItem={menuItem} />
        })}
        <li className="socials">
          <a href="mailto:nate.cohen415@gmail.com">
            <img src={Email} alt="hi" />
          </a>
          <a
            href="https://www.instagram.com/natelcohen"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="hey" />
          </a>
        </li>
      </ul>
    </NavContainer>
  )
}

export default Nav
