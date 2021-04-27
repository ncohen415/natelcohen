import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Selector from "../components/Selector/selector"
import RightPane from "../components/Selector/right-pane"
import LeftPane from "../components/Selector/left-pane"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePaneCovers {
      WorkStation: file(relativePath: { eq: "workstation2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 500
          )
        }
      }
      CityScape: file(relativePath: { eq: "cityscape.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 500
          )
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Selector>
        <LeftPane
          data={data}
          name="Photography"
          image={data.CityScape}
          link="/photography/"
        />
        <RightPane
          data={data}
          name="Web Development"
          image={data.WorkStation}
          link="/dev/"
        />
      </Selector>
    </Layout>
  )
}

export default IndexPage
