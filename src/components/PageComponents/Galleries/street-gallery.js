import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { media } from "../../mq"
import SEO from "../../seo"

//Components
import Layout from "../../layout"

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
    display: flex;
    align-items: center;
    height: 65vh;
    width: 100%;
    .slick-prev {
      margin-left: 3rem;
      z-index: 3;
      &.slick-prev::before {
        color: #708090;
        min-width: 100px;
      }
    }
    .slick-next {
      margin-right: 3rem;
      z-index: 3;
      &.slick-next::before {
        color: #708090;
        min-width: 100px;
      }
    }
    .slick-list {
      height: 70vh;
      .slick-track {
        display: flex !important;
        align-items: center;
        .slick-slide {
          height: 100% !important;
          div {
            height: 70vh;
            .gatsby-image-wrapper {
              height: inherit;
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
    query StreetGalleryQuery {
      wpPage(title: { eq: "Street Gallery" }) {
        StreetGalleryACF {
          streetLabel
          streetDescription
          streetGalleryImages {
            streetGalleryImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    formats: WEBP
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    quality: 100
                    width: 750
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
  const streetGalleryACF = data?.wpPage?.StreetGalleryACF
  let streetSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <Layout>
      <SEO title="Street Gallery" />
      <GridContainer>
        <Slider {...streetSettings}>
          {streetGalleryACF.streetGalleryImages.map(streetGalleryImage => {
            const image = streetGalleryImage?.streetGalleryImage.localFile
            return <GatsbyImage image={getImage(image)} alt="Gallery Image" />
          })}
        </Slider>
        <div className="gallery-text">
          <h1>{streetGalleryACF.streetLabel}</h1>
          <p>{streetGalleryACF.streetDescription}</p>
        </div>
      </GridContainer>
    </Layout>
  )
}

export default PortraitGallery
