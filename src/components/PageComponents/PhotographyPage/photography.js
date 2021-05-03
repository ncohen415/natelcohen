import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Layout from "../../layout"
import Selector from "../../Selector/selector"
import LeftPane from "../../Selector/left-pane"
import RightPane from "../../Selector/right-pane"

const Photography = () => {
  const data = useStaticQuery(graphql`
    query PhotographyPageQuery {
      wpPage(title: { eq: "Photography" }) {
        PhotographyACF {
          portraitsLabel
          portraitsCover {
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
          streetPhotographyLabel
          streetPhotographyCover {
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

  const photoACF = data?.wpPage?.PhotographyACF
  return (
    <Layout>
      <Selector title1="Portraits" title2="Street Photography">
        <LeftPane
          data={data}
          name={photoACF.portraitsLabel}
          image={photoACF.portraitsCover.localFile}
          link="/portrait-gallery"
        />

        <RightPane
          data={data}
          name={photoACF.streetPhotographyLabel}
          image={photoACF.streetPhotographyCover.localFile}
          link="/street-gallery"
        />
      </Selector>
    </Layout>
  )
}

export default Photography
