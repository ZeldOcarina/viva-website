import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled, { css } from 'styled-components'
import WdwdCard from '../../components/WdwdCard'
import respond from '../../styles/abstracts/mediaqueries'


const StyledCards = styled.section`
    h1{
        text-align: center;
        font-size: 3.6rem;
        ${respond(
        "ipad-port",
        css`
          font-size: 3rem;
        `
      )}
      ${respond(
        "nexus-7",
        css`
          font-size: 2.6rem;
        `
      )}
    }

    h2{
        text-align: center;
        font-size: 2rem;
        ${respond(
        "ipad-port",
        css`
          font-size: 1.8rem;
        `
      )}
      ${respond(
        "nexus-7",
        css`
          font-size: 1.6rem;
        `
      )}
    }

    h1, h2{
      padding: 0 3%;
    }

    .cards-container{
        padding: 0 6%;
        margin-top: 8rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
        ${respond(
        "ipad-port",
        css`
          margin-top: 4rem;
          grid-template-columns: 1fr;
        `
      )}
    }
`

const WdwdCards = () => {
    const {
        wdwdCardsSection: {wdwdCardsSection: {title, subtitle}},
        wdwdCards: {wdwdCards}
    } = useStaticQuery(query)

    const sortedCards = wdwdCards.sort((a, b) => a.data.itemId - b.data.itemId)
    
  return (
    <StyledCards>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="cards-container">
        {sortedCards.map((e) => {
            return <WdwdCard key={e.data.itemId} cardData={e.data}/>
        })}
        </div>
    </StyledCards>
  )
}


const query = graphql`
   query WdwdCards {
      wdwdCardsSection: airtable(table: {eq: "WhatDoWeDo"}, data: {blockType: {eq: "CardsSection"}}) {
        wdwdCardsSection: data {
            title
            subtitle
         }
      }
      wdwdCards: allAirtable(
         filter: {data: {blockType: {eq: "Card"}}, table: {eq: "WhatDoWeDo"}}
      ) {
        wdwdCards: nodes {
            data {
            itemId
            title
            copy
            isLastCard
            image {
               localFiles {
                  childImageSharp{
                    gatsbyImageData
                  }
               }
            }
            icon {
               localFiles {
                  publicURL
               }
            }
            }
         }
      }
   }
`

export default WdwdCards