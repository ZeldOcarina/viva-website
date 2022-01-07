import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";
import { useMediaQuery } from "react-responsive";

import { Link, useStaticQuery, graphql } from "gatsby";
import { darken } from "polished";

import facebookIcon from "../images/icons/fb.svg";
import instagramIcon from "../images/icons/ig.svg";
import twitterIcon from "../images/icons/twitter.svg";

const Wrapper = styled.footer`
  background-color: var(--color-primary);
  color: var(--white);
  padding: 5rem 0;
  font-size: 1.8rem;

  .top-container {
    display: flex;
    justify-content: center;
    gap: 2rem;

    ${respond(
      "phone-port",
      css`
        flex-direction: column;
        gap: 2rem;
        text-align: center;
        justify-content: space-between;
      `
    )}
  }

  a {
    color: var(--white);

    :hover {
      color: ${darken(0.1, "#fff")};
    }
  }

  .icons-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;

    img {
      height: 2.5rem;
    }
  }
`;

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        socialLinks: { facebook, instagram, twitter },
      },
    },
  } = useStaticQuery(query);

  const isMobile = useMediaQuery({ query: "(max-width: 28.125em)" });
  return (
    <Wrapper>
      <div className="container top-container">
        <div>
          &copy; {new Date().getFullYear()} Viva Concepts.{isMobile && <br />} All Rights Reserved.
        </div>
        <div>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
      <div className="container icons-container">
        <a href={facebook}>
          <img src={facebookIcon} alt="facebook" />
        </a>
        <a href={instagram}>
          <img src={instagramIcon} alt="instagram" />
        </a>
        <a href={twitter}>
          <img src={twitterIcon} alt="twitter" />
        </a>
      </div>
    </Wrapper>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        socialLinks {
          facebook
          instagram
          twitter
        }
      }
    }
  }
`;

export default Footer;
