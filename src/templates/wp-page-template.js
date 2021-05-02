import React from "react"
import { graphql } from "gatsby"

//Pages
import Dev from "../components/PageComponents/DevPage/dev"
import Home from "../components/PageComponents/HomePage/home-page"
import Photography from "../components/PageComponents/PhotographyPage/photography"
import PortraitGallery from "../components/PageComponents/Galleries/portrait-gallery"
import StreetGallery from "../components/PageComponents/Galleries/street-gallery"
import About from "../components/PageComponents/AboutPage/about"
import Contact from "../components/PageComponents/ContactPage/contact"

const WpPageTemplate = ({ data }) => {
  const page = data?.allWpPage?.edges[0]?.node || {}
  if (page.slug === "/") {
    return <Home />
  } else if (page.slug === "dev") {
    return <Dev />
  } else if (page.slug === "photography") {
    return <Photography />
  } else if (page.slug === "portrait-gallery") {
    return <PortraitGallery />
  } else if (page.slug === "street-gallery") {
    return <StreetGallery />
  } else if (page.slug === "about") {
    return <About />
  } else if (page.slug === "contact") {
    return <Contact />
  }

  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  )
}

export const data = graphql`
  query WpPageQuery($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          content
          slug
        }
      }
    }
  }
`

export default WpPageTemplate
