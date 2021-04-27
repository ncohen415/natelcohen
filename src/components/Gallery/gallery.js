import React from "react"
import styled from "styled-components"
import { media } from "../mq"

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  align-items: center;
  position: relative;
  height: 80%;
  width: 100%;
  animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  transition: 1s;
  overflow-x: hidden;
  overflow-y: scroll;
  ${media.small`  align-items: baseline; overflow-x: scroll; overflow-y: hidden; flex-direction: row;`}
  &::-webkit-scrollbar {
    display: none;
  }
`

const Gallery = ({ children }) => {
  return <GalleryWrapper>{children}</GalleryWrapper>
}

export default Gallery
