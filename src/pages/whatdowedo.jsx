import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
import Layout from '../layout/Layout'
import InternalPageHero from '../sections/case-studies/InternalPageHero'
import WdwdCards from '../sections/whatwedo/WdwdCards'
import WdwdCosts from '../sections/whatwedo/WdwdCosts'
import WdwdText from '../sections/whatwedo/WdwdText'

const StyledWhatDoWeDo = styled.main`
    .main-video{
        padding: 6rem 0;
        width: 80%;
        margin: 0 auto;
        video{
            object-fit: cover;
            width: 100%;
        }
    }
`

const WhatDoWeDo = ({ location }) => {
    const {
        wdwdHero: { wdwdHero }
    } = useStaticQuery(query)
    return (
        <StyledWhatDoWeDo>
            <Seo location={location} />
            <Layout>
                <InternalPageHero
                    image={getImage(wdwdHero.image.localFiles[0])}
                    imageAlt="Doctors are talking"
                    title={wdwdHero.title}
                    subtitle={wdwdHero.subtitle}
                />
                <div className="main-video">
                    <video src={wdwdHero.video.localFiles[0].publicURL} poster={wdwdHero.videoThumb.localFiles[0].publicURL} controls></video>
                </div>
                <WdwdCards />
                <WdwdCosts />
                <WdwdText />
            </Layout>
        </StyledWhatDoWeDo>
    )
}

const query = graphql`
   query WdwdHero {
      wdwdHero: airtable(table: {eq: "WhatDoWeDo"}, data: {blockType: {eq: "Hero"}}){
        wdwdHero: data {
            title
            subtitle
            video{
               localFiles{
                  publicURL
               }
            }
            videoThumb{
               localFiles{
                  publicURL
               }
            }
            image{
               localFiles{
                  childImageSharp{
                     gatsbyImageData
                  }
               }
            }
         }
      }
   }
`

export default WhatDoWeDo