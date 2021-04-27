import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Layout from "../components/layout"
import Selector from "../components/Selector/selector"
import LeftPane from "../components/Selector/left-pane"
import RightPane from "../components/Selector/right-pane"

const Photography = () => {
  const data = useStaticQuery(graphql`
    query PhotographyCovers {
      JennaAndRuben: file(relativePath: { eq: "jenna-ruben.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 750
          )
        }
      }
      Floyd: file(relativePath: { eq: "floyd.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 750
          )
        }
      }
    }
  `)

  return (
    <Layout>
      <Selector>
        <LeftPane
          data={data}
          name="Portraits"
          image={data.JennaAndRuben}
          link="/portrait-gallery"
        />
        <RightPane
          data={data}
          name="Street Photography"
          image={data.Floyd}
          link="/street-gallery"
        />
      </Selector>
    </Layout>
  )
}

export default Photography
