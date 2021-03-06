import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../../seo"

//Components
import Layout from "../../layout"

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
      flex-direction: row;
      align-items: baseline;
      strong {
        font-size: 12px;
      }
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
    query ContactPageQuery {
      wpPage(title: { eq: "Contact" }) {
        ContactACF {
          contactInfo
          contactImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 2000
                  quality: 100
                )
              }
            }
          }
        }
      }
    }
  `)
  const contactACF = data?.wpPage?.ContactACF
  console.log(contactACF)
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactPageContainer>
        <div className="contact-page-wrapper">
          <div className="contact-image-wrapper">
            <GatsbyImage
              className="contact-photo"
              image={getImage(contactACF.contactImage.localFile)}
            />
          </div>
          <div className="email-wrapper">
            <p>{contactACF.contactInfo}</p>
          </div>
        </div>
      </ContactPageContainer>
    </Layout>
  )
}

export default Contact
