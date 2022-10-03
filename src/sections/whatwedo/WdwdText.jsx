import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled, { css } from 'styled-components'
import respond from '../../styles/abstracts/mediaqueries'

const StyledWdwdText = styled.section`
background: #1E1E1E;
padding: 10% 5%;
  h1{
    text-align: center;
    font-size: 2rem;
    color: #fff;
    ${respond(
        "ipad-port",
        css`
          font-size: 1.8rem;
        `
      )}
  }
`

const WdwdText = () => {
  const {
    wdwdText: {wdwdText: {title}}
  } = useStaticQuery(query)
  return (
    <StyledWdwdText>
      <h1>{title}</h1>
    </StyledWdwdText>
  )
}


const query = graphql`
   query WdwdText {
      wdwdText: airtable(table: {eq: "WhatDoWeDo"}, data: {blockType: {eq: "TextBlock"}}) {
        wdwdText: data {
            title
         }
      }
   }
`

export default WdwdText