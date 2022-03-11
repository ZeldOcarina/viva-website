import React from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";
import closeIcon from "../images/icons/close.svg";
import useSiteMetadata from "../hooks/use-site-metadata";

const StyledMobileNavbar = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary);
  z-index: 500;
  color: var(--white);
  font-size: 2rem;
  transition: all 0.3s ease-in-out;

  ${respond(
    "phone-port",
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `
  )}

  .close-icon {
    position: absolute;
    top: 4rem;
    right: 4rem;
    width: 4rem;
    height: 4rem;
  }

  .link {
    color: var(--white);
  }

  .mobile-items {
    ul {
      list-style: none;
    }

    li {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }

    .subitems {
      margin: 1rem 0 0 1.5rem;
      list-style: none;
      li {
        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      }
      a {
        color: var(--white);
        font-size: 1.6rem;
      }
    }
  }

  ${({ isNavbarOpen }) => {
    return isNavbarOpen
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(100vw);
        `;
  }}
`;

const MobileNavbar = ({ isNavbarOpen, setIsNavbarOpen }) => {
  const { navbarLinks } = useSiteMetadata();
  const subitemsMarkup = ({ name, url, type }) => {
    return (
      <li key={uuidv4()}>
        <a href={url}>{name}</a>
      </li>
    );
  };

  function closeNavbar() {
    setIsNavbarOpen(false);
  }

  return (
    <StyledMobileNavbar isNavbarOpen={isNavbarOpen}>
      <img src={closeIcon} alt="Close Icon" className="close-icon" onClick={closeNavbar} />
      <div className="mobile-items">
        <ul>
          {navbarLinks.map(({ name, url, type, subitems }) => {
            return (
              <li key={uuidv4()}>
                {type === "external" ? (
                  <>
                    <a className="link" href={url}>
                      {name}
                    </a>
                    {subitems && <ul className="subitems">{subitems.map((subitem) => subitemsMarkup(subitem))}</ul>}
                  </>
                ) : (
                  <>
                    <Link className="link" to={url}>
                      {name}
                    </Link>
                    {subitems && <ul>{subitems.map((subitem) => subitemsMarkup(subitem))}</ul>}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </StyledMobileNavbar>
  );
};

export default MobileNavbar;
