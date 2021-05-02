import React, { useState } from "react"
import styled from "styled-components"
import { media } from "../mq"

const GridContainer = styled.main`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  transition: 1s;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation: landscape) {
    flex-direction: row;
  }
  ${media.small`width: 100%;`}
  ${media.medium`display: flex; flex-direction: row; overflow: hidden; padding: 0;`}
  .paneContainer {
    width: 100%;
    height: 100%;
    max-height: 275px;
    max-width: 275px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transition: 1s;
    ${media.small`max-width: 300px; max-height: 300px; overflow: visible;`}
    ${media.smallMedium`max-width: 300px; max-height: 300px; overflow: visible;`}
    ${media.medium`max-width: 100%; max-height: 100%; overflow: visible;`}
    .title-wrapper {
      display: flex;
      justify-content: center;
      h3 {
        padding: 0;
        margin: 0;
      }
    }
  }
`

const LeftPaneWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  transform: scale(1);
  transition: 1s;
  transform-origin: top;
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  z-index: 1;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  ${media.medium`max-width: 95%; transform-origin: left;`}
  &:hover {
    transform: scale(1.15);
    z-index: 1;
    ${media.medium`transform: scale(1);`}
  }
  &.shrink {
    transform: scale(0.9);
    opacity: 0.8;
    ${media.medium`transform: scale(1);`}
  }
  a {
    width: inherit;
    .gatsby-image-wrapper {
      width: inherit;
    }
    .paneOverlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 98%;
      opacity: 0;
      color: white;
      transition: 1s;
      &:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.3);
      }
      div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          h2 {
            display: flex;
            justify-content: center;
            color: white;
          }
        }
      }
    }
  }
`
const RightPaneWrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: auto;
  transform: scale(1);
  transition: 1s;
  transform-origin: bottom;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  overflow: hidden;
  z-index: 1;
  ${media.medium`max-width: 95%; transform-origin: right;`}
  &:hover {
    transform: scale(1.15);
    z-index: 1;
    ${media.medium`transform: scale(1);`}
  }
  &.shrink {
    transform: scale(0.9);
    opacity: 0.8;
    ${media.medium`transform: scale(1);`}
  }
  a {
    width: inherit;
    .gatsby-image-wrapper {
      width: inherit;
    }
    .paneOverlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 98%;
      opacity: 0;
      color: white;
      transition: 1s;
      &:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.3);
      }
      div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          h2 {
            display: flex;
            justify-content: center;
            color: white;
          }
        }
      }
    }
  }
`

const Selector = ({ children }, props) => {
  const [activePane, setActivePane] = useState(-1)
  return (
    <GridContainer>
      <div className="paneContainer">
        <LeftPaneWrapper
          onMouseOver={() => setActivePane(0)}
          className={activePane === 1 ? "shrink" : ""}
          onMouseLeave={() => setActivePane(-1)}
        >
          {children[0]}
        </LeftPaneWrapper>
      </div>
      <div className="paneContainer">
        <RightPaneWrapper
          onMouseOver={() => setActivePane(1)}
          className={activePane === 0 ? "shrink" : ""}
          onMouseLeave={() => setActivePane(-1)}
        >
          {children[1]}
        </RightPaneWrapper>
      </div>
    </GridContainer>
  )
}

export default Selector
