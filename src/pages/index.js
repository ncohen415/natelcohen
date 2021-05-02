import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Home from "../components/PageComponents/HomePage/home-page"

const IndexPage = ({ data }) => {
  return <Home data={data} />
}

export const data = graphql`
  query HomePageQuery {
    wpPage(title: { eq: "Home Page" }) {
      HomeACF {
        photographyLabel
        photographyCover {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                formats: WEBP
                placeholder: BLURRED
                width: 750
                quality: 100
              )
            }
          }
        }
        webDevelopmentLabel
        webDevelopmentCover {
          localFile {
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 750
                quality: 100
              )
            }
          }
        }
      }
    }
  }
`

export default IndexPage
