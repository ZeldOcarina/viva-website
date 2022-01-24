import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHomeCustomerLogos = styled.section`
  padding-top: 0;

  h2 {
    text-align: center;
    font-weight: 600;
    margin-bottom: 3rem;
  }

  .logos {
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
  }

  .logo-container {
    display: flex;
    align-items: center;
    width: 16rem;
  }

  .logo {
    width: 100%;
    height: max-content;
  }
`;

const HomeCustomerLogos = () => {
  const {
    homeCustomerLogos: {
      data: {
        attributes: { title, customerLogo },
      },
    },
  } = useStaticQuery(query);
  return (
    <StyledHomeCustomerLogos className="container">
      <h2>{title}</h2>
      <div className="logos">
        {customerLogo.map(
          ({
            logo: {
              data: {
                attributes: {
                  alternativeText,
                  localFile: { publicURL },
                },
              },
            },
            id,
          }) => {
            return (
              <div className="logo-container" key={id}>
                <img className="logo" src={publicURL} alt={alternativeText} />
              </div>
            );
          }
        )}
      </div>
    </StyledHomeCustomerLogos>
  );
};

const query = graphql`
  query HomeCustomerLogos {
    homeCustomerLogos: strapiApiHomeCustomerLogosPopulate0CustomerlogoPopulate1CustomerlogoLogo {
      data {
        attributes {
          customerLogo {
            id
            logo {
              data {
                attributes {
                  alternativeText
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
          title
        }
      }
    }
  }
`;
export default HomeCustomerLogos;
