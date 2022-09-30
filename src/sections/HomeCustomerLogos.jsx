import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeCustomerLogos = styled.section`
  padding-top: 0;

  ${respond(
   "phone-port",
   css`
      margin-top: 2.5rem;
    `
)}

  h2 {
    text-align: center;
    font-weight: 600;
    margin-bottom: 3rem;

    ${respond(
   "phone-port",
   css`
        margin-bottom: 1.5rem;
      `
)}
  }

  .logos {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .logo-container {
    display: flex;
    align-items: center;
    width: 16rem;

    ${respond(
   "small-phone-land",
   css`
        width: 12rem;
      `
)}
    ${respond(
   "phone-port",
   css`
        width: 10rem;
      `
)}
  }

  .logo {
    width: 100%;
    height: auto;
  }
`;

const HomeCustomerLogos = () => {
   
   const { customerLogos: { customerLogos: { title, images } },
   } = useStaticQuery(query)

   return (
      <StyledHomeCustomerLogos className="container">
         <h2>{title}</h2>
         <div className="logos">
            {images.localFiles.map((logo) => {
               return (
                  <div className="logo-container" key={logo.id}>
                     <img className="logo" src={logo.publicURL} alt="Company logo" />
                  </div>
               );
            }
            )}
         </div>
      </StyledHomeCustomerLogos>
   );
};


const query = graphql`
   query HomeCustomersLogos {
      customerLogos: airtable(table: {eq: "Home"}, data: {blockType: {eq: "CustomerLogos"}}) {
      customerLogos: data {
      title
      images {
        localFiles {
          publicURL
          id
        }
      }
    }
  }
   }
`

export default HomeCustomerLogos;
