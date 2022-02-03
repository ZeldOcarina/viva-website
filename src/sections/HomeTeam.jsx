import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyledHomeTeam = styled.section`
  font-size: 1.6rem;
  font-family: "Nunito", sans-serif;

  .title {
    margin-bottom: 4rem;
    text-align: center;
  }

  .team-container {
    width: 70%;
    margin: 0 auto;

    .figure {
      margin-right: 3rem;
    }
    .figure--alt {
      margin-left: 3rem;
    }
  }

  .team-member {
    display: flex;

    &--alt {
      flex-direction: row-reverse;
    }

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  .position {
    text-transform: uppercase;
    margin-top: 1rem;
  }

  .name {
    margin-top: 1.5rem;
  }
  .text {
    margin-top: 1.6rem;
    font-style: italic;
    font-size: 1.6rem;
  }

  .image {
    width: 35rem;
    border-radius: 10px;
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
          (
            {
              id,
              name,
              position,
              text,
              avatar: {
                data: {
                  attributes: { localFile, alternativeText },
                },
              },
            },
            i
          ) => {
            return (
              <article key={id} className={i % 2 === 0 ? "team-member" : "team-member team-member--alt"}>
                <figure className={i % 2 === 0 ? "figure" : "figure--alt"}>
                  <GatsbyImage image={getImage(localFile)} alt={alternativeText} className="image" quality={100} />
                  <figcaption className="bold name">
                    <p>{name}</p> <p className="position">{position}</p>
                  </figcaption>
                </figure>

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
