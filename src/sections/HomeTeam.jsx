import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyledHomeTeam = styled.section`
  text-align: center;
  font-size: 1.6rem;
  font-family: "Nunito", sans-serif;

  .title {
    margin-bottom: 4rem;
  }

  .team-container {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
  }

  .team-member {
    width: 30rem;
  }

  .position {
    text-transform: uppercase;
    margin-top: 1rem;
  }

  .name {
    margin-top: 1.5rem;
  }
  .text {
    margin-top: 1.3rem;
    font-style: italic;
    font-size: 1.4rem;
  }

  .image {
    width: 13rem;
  }
`;

const HomeTeam = () => {
  const {
    homeTeam: {
      data: {
        attributes: { title, teamMember },
      },
    },
  } = useStaticQuery(query);
  return (
    <StyledHomeTeam className="container">
      <h2 className="title">{title}</h2>
      <div className="team-container">
        {teamMember.map(
          ({
            id,
            name,
            position,
            text,
            avatar: {
              data: {
                attributes: { localFile, alternativeText },
              },
            },
          }) => {
            return (
              <article key={id} className="team-member">
                <GatsbyImage image={getImage(localFile)} alt={alternativeText} className="image" />
                <p className="bold name">{name}</p>
                <p className="position">{position}</p>
                <p className="text">{text}</p>
              </article>
            );
          }
        )}
      </div>
    </StyledHomeTeam>
  );
};

const query = graphql`
  query HomeTeam {
    homeTeam: strapiApiHomeTeamSectionPopulateTeammemberPopulate {
      data {
        attributes {
          title
          teamMember {
            id
            name
            position
            text
            avatar {
              data {
                attributes {
                  alternativeText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: TRACED_SVG)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default HomeTeam;
