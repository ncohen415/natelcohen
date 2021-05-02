import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { media } from "../../mq"

//Components
import Layout from "../../layout"
import Site from "./site"

const DevPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 75%;
  overflow-x: hidden;
  max-width: 100%;
  max-height: 100%;
  .portfolio-container {
    display: flex;
    flex-direction: row;
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transition: 1s;
    margin: 70px 0 0 0;
    .portfolio-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin: 0.5rem;
      ${media.medium`justify-content: flex-start;`}
      .portfolio-slide {
        display: grid;
        align-items: center;
        position: relative;
        width: 300px;
        height: 300px;
        overflow: hidden;
        margin: 0.5rem;
        .portfolio-site {
          object-fit: cover;
          width: 300px;
          height: 300px;
          display: block;
        }
        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          color: white;
          transition: 0.25s;
          &:hover {
            opacity: 1;
            background-color: rgba(0, 0, 0, 0.5);
          }
          .site-title-a {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            height: 100%;
          }
          .site-title-b {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 40px;
            margin-right: 40px;
            h2 {
              text-align: center;
            }
          }
        }
      }
    }
  }
`

const Dev = () => {
  const data = useStaticQuery(graphql`
    query DevPageQuery {
      wpPage(title: { eq: "Dev" }) {
        DevACF {
          portfolioSites {
            siteTitle
            siteCoverImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    formats: WEBP
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 300
                  )
                }
              }
            }
            siteUrlPlain
            siteUrlActive {
              url
            }
          }
        }
      }
    }
  `)
  const devACF = data?.wpPage?.DevACF
  console.log(devACF)

  return (
    <Layout>
      <DevPageContainer>
        <div className="portfolio-container">
          <div className="portfolio-wrapper">
            {devACF.portfolioSites.map(site => {
              return <Site site={site} />
            })}
          </div>
        </div>
      </DevPageContainer>
    </Layout>
  )
}

export default Dev
