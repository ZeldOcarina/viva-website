import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.article`
  padding: 2%;

  .image-box{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.33) 35.94%, rgba(0, 0, 0, 0.71) 100%);
  }

   .image{
      width: 100%;
      height: 100%;
      z-index: -1; // finished here (need to make all cards the same size and responsive)
   }
`

const WdwdCard = ({ cardData }) => {
  const {
    itemId,
    title,
    copy,
    image
  } = cardData
  return (
    <StyledCard>
      <div className="image-box">
        <GatsbyImage class='image' image={getImage(image.localFiles[0])} alt='Card image' />
      </div>
    </StyledCard>
  )
}

export default WdwdCard