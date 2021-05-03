import React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { media } from "../../mq"
import SEO from "../../seo"

//Components
import Layout from "../../layout"

const AboutContainer = styled.div`
  display: flex;
  flex: 1 1 75%;
  overflow-x: hidden;
  max-width: 100%;
  max-height: 100%;
  div {
    display: flex;
    flex-direction: column;
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transition: 1s;
    margin-top: 70px;
    .content-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 1.5rem 0 1.5rem;
      ${media.medium`margin: 0;`}
      div {
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        margin: 0;
        ${media.medium`flex-direction: row;`}
        .portrait-wrapper {
          display: flex;
          max-width: 75%;
          flex: 1 50%;
          ${media.medium`max-width: 100%;`}
          .about-portrait {
            width: 100%;
          }
        }
        .portrait-description {
          display: flex;
          flex: 1 50%;
          ${media.medium`padding-left: 3rem;`}
          h6 {
            opacity: 0.6;
            margin: 0;
            padding: 0;
          }
        }
      }
      .about-description-wrapper {
        display: flex;
        flex-direction: column;
        .about-page-content {
          display: block;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          line-height: 1.5;
          line-height: 20px;
          font-weight: 300;
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      wpPage(title: { eq: "About" }) {
        AboutACF {
          aboutPageLabel
          aboutPageContent
          aboutPageImage {
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
  `)
  const aboutACF = data?.wpPage?.AboutACF
  return (
    <Layout>
      <SEO title="About" />
      <AboutContainer>
        <div>
          <div className="content-container">
            <div>
              <div class="portrait-wrapper">
                <GatsbyImage
                  className="about-portrait"
                  image={getImage(aboutACF.aboutPageImage.localFile)}
                />
              </div>
              <div class="portrait-description">
                <h6>Self-Portrait, 2019</h6>
              </div>
            </div>
            <br />
            <div className="about-description-wrapper">
              <div
                dangerouslySetInnerHTML={{ __html: aboutACF.aboutPageContent }}
                className="about-page-content"
              />
            </div>
          </div>
        </div>
      </AboutContainer>
    </Layout>
  )
}

export default About
