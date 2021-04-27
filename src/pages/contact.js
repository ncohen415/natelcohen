import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 10px 0 10px;
  margin: 70px 0 0 0;
  height: 100vh;
  width: 100%;
  overflow-x: scroll;
  .contact-page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    .contact-image-wrapper {
      width: 100%;
      height: 70%;
      .contact-photo {
        height: 100%;
      }
    }
    .email-wrapper {
      display: flex;
      flex-direction: column;
      p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        margin-top: 10px;
      }
    }
  }
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactImage {
      Coffee: file(relativePath: { eq: "coffee.jpeg" }) {
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
      <ContactPageContainer>
        <div className="contact-page-wrapper">
          <div className="contact-image-wrapper">
            <GatsbyImage
              className="contact-photo"
              image={getImage(data.Coffee)}
            />
          </div>
          <div className="email-wrapper">
            <p>
              <strong>All inquiries: </strong> nate.cohen415(at)gmail.com
            </p>
          </div>
        </div>
      </ContactPageContainer>
    </Layout>
  )
}

export default Contact
