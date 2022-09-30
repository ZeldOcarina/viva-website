import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import WdwdCard from '../../components/WdwdCard'


const StyledCards = styled.section`
    h1{
        text-align: center;
        font-size: 3.6rem;
    }

    h2{
        text-align: center;
        font-size: 2rem;
    }

    .cards-container{
        padding: 0 6%;
        margin-top: 8rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
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
            image {
               localFiles {
                  childImageSharp{
                    gatsbyImageData
                  }
               }
            }
            }
         }
      }
   }
`

export default WdwdCards