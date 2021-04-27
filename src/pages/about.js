import React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { media } from "../components/mq"

//COmponents
import Layout from "../components/Layout"

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
        p {
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
    query SelfPortrait {
      SelfPortrait: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }
  `)
  return (
    <Layout>
      <AboutContainer>
        <div>
          <div className="content-container">
            <div>
              <div class="portrait-wrapper">
                <GatsbyImage
                  className="about-portrait"
                  image={getImage(data.SelfPortrait)}
                />
              </div>
              <div class="portrait-description">
                <h6>Self-Portrait, 2019</h6>
              </div>
            </div>
            <br />
            <div className="about-description-wrapper">
              <p>
                Nate Cohen (b.1994) is a San Francisco born and based
                photographer and self-taught full-stack web developer. He works
                with Gatsby and Shopify to create unique web experiences for
                clients.
              </p>
              <p>
                Nate is also passionate about documenting life on film. He tells
                the story of a hometown in never-ending flux through street
                photography and portraiture. His style is largely influenced by
                current events and the ever-changing people and neighborhoods of
                San Francisco. He develops and scans his own negatives in his
                home darkroom.
              </p>
            </div>
          </div>
        </div>
      </AboutContainer>
    </Layout>
  )
}

export default About
