import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Components
import Layout from "../../layout"
import SEO from "../../seo"
import Selector from "../../Selector/selector"
import RightPane from "../../Selector/right-pane"
import LeftPane from "../../Selector/left-pane"

const Home = data => {
  const homeACF = data?.data?.wpPage?.HomeACF
  return (
    <Layout>
      <SEO title="Home" />
      <Selector>
        <LeftPane
          data={data}
          name={homeACF.photographyLabel}
          image={homeACF.photographyCover.localFile}
          link="/photography/"
        />
        <RightPane
          data={data}
          name={homeACF.webDevelopmentLabel}
          image={homeACF.webDevelopmentCover.localFile}
          link="/dev/"
        />
      </Selector>
    </Layout>
  )
}

export default Home
