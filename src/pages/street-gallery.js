import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { media } from "../components/mq"

//Components
import Layout from "../components/Layout"

//Slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 0 10px;
  margin: 70px 0 0 0;
  height: 100vh;
  width: 100%;
  overflow-x: scroll;
  .slick-slider {
    width: 100%;
    .slick-prev {
      margin-left: 3rem;
      background-color: red;
      z-index: 3;
    }
    .slick-next {
      margin-right: 3rem;
      background-color: red;
      z-index: 3;
    }
    .slick-list {
      height: 70vh;
      .slick-track {
        display: flex !important;
        align-items: center;
        .slick-slide {
          height: 100% !important;
          .gatsby-image-wrapper {
            img {
              object-fit: contain !important;
              height: 100%;
              padding: 1rem;
              margin: 0;
            }
          }
        }
      }
    }
  }
  .gallery-text {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    height: auto !important;
    ${media.medium`justify-content: center;`}
    h1 {
      font-size: 1em;
      margin: 0.75rem 0.75rem 0.75rem 0;
      ${media.medium`font-size: 2em;`}
    }
    p {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
  }
`

const PortraitGallery = () => {
  const data = useStaticQuery(graphql`
    query StreetGallery {
      SelfPortrait: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            placeholder: BLURRED
            height: 500
          )
        }
      }
      JennaAndRuben: file(relativePath: { eq: "jenna-ruben.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            placeholder: BLURRED
            height: 500
          )
        }
      }
      Coffee: file(relativePath: { eq: "coffee.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            placeholder: BLURRED
            height: 500
          )
        }
      }
    }
  `)
  return (
    <Layout>
      <GridContainer>
        <Slider
          dots={false}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          speed={2000}
          autoplaySpeed={1500}
          pauseOnHover={true}
        >
          <GatsbyImage image={getImage(data.SelfPortrait)} alt="hi" />
          <GatsbyImage image={getImage(data.JennaAndRuben)} alt="hi" />
          <GatsbyImage image={getImage(data.Coffee)} alt="hi" />
          <GatsbyImage image={getImage(data.SelfPortrait)} alt="hi" />
        </Slider>
        <div className="gallery-text">
          <h1>Street Photography:</h1>
          <p>Photos taken perusing the city.</p>
        </div>
      </GridContainer>
    </Layout>
  )
}

export default PortraitGallery
