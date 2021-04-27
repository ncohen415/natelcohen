import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../mq"
import MenuItem from "../../../../pocket-pictures/src/components/Header/menu-item"

const NavItemWrapper = styled.li`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0 0.5rem 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 15px;
  width: 100%;
  ${media.medium`justify-content: flex-start;`}
  a {
    color: black;
    transition: color 0.4s ease;
    display: block;
    text-decoration: none;
    font-size: 25px;
    ${media.medium`color: #c0c0c0; font-size: 15px; transition: color 0.4s ease; display: block; text-decoration: none;`}
    &:hover {
      color: black;
      text-decoration: none;
    }
  }
`

const NavItem = ({ menuItem }) => {
  return (
    <NavItemWrapper>
      <Link to={menuItem.url}>{menuItem.label}</Link>
    </NavItemWrapper>
  )
}

export default NavItem
