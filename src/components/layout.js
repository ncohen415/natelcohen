/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { media } from "./mq"
import SEO from "./seo"

import SideNav from "./Navigation/side-nav"
import "./layout.css"

const BodyLayout = styled.div`
  display: flex;
  flex-direction: column;
  ${media.medium`margin: 0; display: flex; flex-direction: row; height: 100vh; width: 100vw;`};
  .grid {
    display: flex;
    flex-direction: row;
    height: 100vh;
    justify-content: center;
    overflow-y: hidden;
    ${media.medium` display: flex; flex-direction: column; flex: 1 1 75%;`};
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)

  return (
    <>
      <SEO title={data.site.siteMetadata.title} />
      <BodyLayout>
        <SideNav siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="grid">{children}</div>
      </BodyLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
