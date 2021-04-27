import { Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RightPane = data => {
  return (
    <Link to={data.link}>
      <GatsbyImage image={getImage(data.image)} alt="hi" />
      <div className="paneOverlay">
        <div>
          <div>
            <h2>{data.name}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RightPane
