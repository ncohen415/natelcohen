import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SiteWrapper = styled.div`
  display: grid;
  align-items: center;
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  padding: 0.5rem;
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
`

const Site = ({ site }) => {
  console.log(site)
  return (
    <>
      <a
        href={site.siteUrlActive.url}
        target={site.siteUrlActive.url === "/" ? "" : "_blank"}
      >
        <SiteWrapper>
          <div className="portfolio-slide">
            <GatsbyImage
              className="portfolio-site"
              image={getImage(site.siteCoverImage.localFile)}
              alt="hi"
            />
            <div className="portfolio-overlay">
              <div className="site-title-a">
                <div className="site-title-b">
                  <h2>{site.siteTitle}</h2>
                  <p>{site.siteUrlPlain}</p>
                </div>
              </div>
            </div>
          </div>
        </SiteWrapper>
      </a>
    </>
  )
}

export default Site
