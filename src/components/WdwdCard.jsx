import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled, { css } from 'styled-components'
import respond from '../styles/abstracts/mediaqueries'

const StyledCard = styled.article`
  padding: 2%;
  position: relative;

  .image-box{
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.33) 35.94%, rgba(0, 0, 0, 0.71) 100%);
  }

   .image{
      width: 100%;
      height: 100%;
      z-index: -1;
   }

   .text-box{
    padding: 8%;
    position: absolute;
    height: 100%;
    top: 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
   }
   .title{
    font-size: 2rem;
    color: #fff;
    &_last{
      margin-top: 3rem;
      font-size: 3.1rem;
      color: #fff;
      ${respond(
        "ipad-pro-11-land",
        css`
          margin-bottom: 0;
          margin-top: 2rem;
          font-size: 2.6rem;
        `
      )}
      ${respond(
        "phone-land",
        css`
          margin-top: 1.6rem;
          font-size: 2.2rem;
        `
      )}
      ${respond(
        "small-phone-land",
        css`
          margin: 0;
        `
      )}
      ${respond(
        "ipad-port",
        css`
          padding-top: 1.6rem;
          font-size: 3.2rem;
        `
      )}
      ${respond(
        "nexus-7",
        css`
          font-size: 3rem;
        `
      )}
      ${respond(
        "phone-port",
        css`
          font-size: 2.6rem;
        `
      )}
    }
   }
   .copy{
    font-size: 1.6rem;
    color: #fff;
    &_last{
      margin-top: 3rem;
      font-size: 2.3rem;
      color: #fff;
      ${respond(
        "ipad-pro-11-land",
        css`
          margin-top: 2rem;
          font-size: 2rem;
        `
      )}
      ${respond(
        "phone-land",
        css`
          margin-top: 1.6rem;
          font-size: 1.6rem;
        `
      )}
      ${respond(
        "ipad-port",
        css`
          font-size: 2.4rem;
        `
      )}
      ${respond(
        "nexus-7",
        css`
          font-size: 1.8rem;
        `
      )}
      ${respond(
        "phone-port",
        css`
          font-size: 1.6rem;
        `
      )}
    }
   }

   .logo{
    ${respond(
        "phone-port",
        css`
          width: 8rem;
        `
      )}
   }
`

const WdwdCard = ({ cardData }) => {
  const {
    itemId,
    title,
    copy,
    icon,
    image,
    isLastCard
  } = cardData
  return (
    <StyledCard>
      <div className="image-box">
        <GatsbyImage class='image' image={getImage(image.localFiles[0])} alt='Card image' />
      </div>
      {!isLastCard 
        ? <div className="text-box">
            <h1 className='title'>{title}</h1>
            <p className="copy">{copy}</p>
          </div>
        : <div className="text-box text-box_last">
            <img className='logo' src={icon.localFiles[0].publicURL} alt="Viva logo" />
            <h1 className='title_last'>{title}</h1>
            <p className="copy_last">{copy}</p>
          </div>
      }
    </StyledCard>
  )
}

export default WdwdCard