import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { media } from "../mq"

import MobileNav from "./mobile-nav"
import Nav from "./nav"

const SideNavContainer = styled.div`
  display: none;
  ${media.medium`height: 100%; background: #ffffff; display: flex; justify-content: start; flex-direction: column; flex: 1 1 25%; max-height: auto; animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); transition: 1.3s;`}
  .brand-wrapper {
    margin: 70px 0 2rem 2rem;
    width: 100%;
    display: flex;
    a {
      width: 100%;
      color: black;
      transition: color 0.75s ease;
      display: block;
      text-decoration: none;
      h3 {
        font-size: 24;
        position: relative;
        top: 0;
        left: 0;
      }
    }
  }
`

const SideNav = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      wpMenu(name: { eq: "Main Menu" }) {
        menuItems {
          nodes {
            url
            path
            label
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const menu = data?.wpMenu?.menuItems?.nodes

  return (
    <>
      <MobileNav menu={menu} />
      <SideNavContainer>
        <div className="brand-wrapper">
          <Link to="/">
            <h3>{data.site.siteMetadata.title}</h3>
          </Link>
        </div>
        <Nav menu={menu} />
      </SideNavContainer>
    </>
  )
}

export default SideNav
