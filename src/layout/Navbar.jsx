import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import respond from "../styles/abstracts/mediaqueries";
import vivaIcon from "../images/icons/viva-icon.svg";

import useSiteMetadata from "../hooks/use-site-metadata";
import { Link } from "gatsby";

const Wrapper = styled.nav`
  background-color: var(--color-primary);
  color: var(--white);
  padding: 1.5rem 0;
  font-size: 1.6rem;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${respond(
      "phone-port",
      css`
        justify-content: center;
      `
    )}
  }

  .ul {
    display: flex;
    list-style: none;
    gap: 3rem;
    text-transform: capitalize;
  }

  .link {
    color: var(--white);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${darken(0.1, "#fff")};
    }
  }

  .link {
    position: relative;
    display: block;
    width: 11rem;
    height: max-content;

    img {
      width: 100%;
      height: auto;
      position: relative;
      top: 0.3rem;
      left: 0;
    }
  }
`;

const Navbar = () => {
  const { navbarLinks } = useSiteMetadata();
  return (
    <Wrapper>
      <div className="container">
        <div className="icon-container">
          <Link to="/" className="link">
            <img src={vivaIcon} className="logo" alt="Viva Concepts Logo" />
          </Link>
        </div>
        <ul className="ul">
          {navbarLinks.map(({ name, url }, i) => {
            return (
              <li key={i} className="li">
                <a href={`${url}`} className="link">
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;
