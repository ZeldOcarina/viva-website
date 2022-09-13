import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeTeam = styled.section`
  font-size: 1.6rem;
  font-family: "Nunito", sans-serif;

  ${respond(
    "phone-port",
    css`
      margin-bottom: 4rem;
      padding-top: 0;
    `
  )}

  .title {
    margin-bottom: 4rem;
    text-align: center;
  }

  .team-container {
    width: 70%;
    margin: 0 auto;

    ${respond(
      "tab-land",
      css`
        width: 100%;
      `
    )}

    .figure {
      margin-right: 3rem;

      ${respond(
        "tab-land",
        css`
          margin-right: 0;
        `
      )}
    }
    .figure--alt {
      margin-left: 3rem;

      ${respond(
        "tab-land",
        css`
          margin-left: 0;
          grid-column: 2 / 3;
        `
      )}
      ${respond(
        "small-phone-land",
        css`
          grid-column: 1 / 3;
        `
      )}
    }
  }

  .team-member {
    display: flex;

    ${respond(
      "tab-land",
      css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        justify-items: center;
      `
    )}
    ${respond(
      "small-phone-land",
      css`
        grid-template-columns: 1fr;
      `
    )}

    &--alt {
      flex-direction: row-reverse;

      ${respond(
        "small-phone-land",
        css`
          grid-template-columns: 1fr;
          flex-direction: column;
          display: grid;
        `
      )}

      .text {
        ${respond(
          "tab-land",
          css`
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          `
        )}
        ${respond(
          "small-phone-land",
          css`
            grid-column: 1 / 3;
            grid-row: 2 / 3;
          `
        )}
      }
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

    ${respond(
      "phone-port",
      css`
        width: 95%;
        margin: 0 auto;
      `
    )}
  }

  .image {
    width: 35rem;
    border-radius: 10px;

    ${respond(
      "small-phone-land",
      css`
        width: 30rem;
      `
    )}
  }
`;

const HomeTeam = () => {

const {
   teamSection: {teamSection: {title}},
   teamMembers: {teamMembers}
} = useStaticQuery(query)

const sortedMembers = teamMembers.sort((a, b) => a.data.itemId - b.data.itemId)

  return (
    <StyledHomeTeam className="container">
      <h2 className="title">{title}</h2>
      <div className="team-container">
        {sortedMembers.map(
          (member, i) => {
            return (
              <article key={member.data.itemId} className={i % 2 === 0 ? "team-member" : "team-member team-member--alt"}>
                <figure className={i % 2 === 0 ? "figure" : "figure--alt"}>
                  <GatsbyImage image={getImage(member.data.images.localFiles[0])} alt={member.data.alternativeText} className="image" quality={100} />
                  <figcaption className="bold name">
                    <p>{member.data.title}</p> <p className="position">{member.data.subtitle}</p>
                  </figcaption>
                </figure>

                <p className="text">{member.data.copy}</p>
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
   teamSection: airtable(table: {eq: "Home"}, data: {blockType: {eq: "TeamSection"}}) {
      teamSection: data {
      title
    }
  }
  teamMembers: allAirtable(filter: {table: {eq: "Home"}, data: {blockType: {eq: "TeamMember"}}}) {
   teamMembers: nodes {
      data {
        itemId
        title
        subtitle
        copy
        alternativeText
        images {
          localFiles {
            childImageSharp{
               gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
  }
`;

export default HomeTeam;
