import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled, { css } from "styled-components";
import { darken } from "polished";
import respond from "../styles/abstracts/mediaqueries";

import vivaIcon from "../images/icons/viva-icon.svg";
import hamburgerIcon from "../images/icons/hamburger.svg";

import useSiteMetadata from "../hooks/use-site-metadata";
import { Link } from "gatsby";

const Wrapper = styled.nav`
  background-color: var(--color-primary);
  color: var(--white);
  height: 7rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    ${respond(
      "phone-port",
      css`
        justify-content: space-between;
        padding: 0 3rem !important;
      `
    )}
  }

  .ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 3rem;
    text-transform: capitalize;
    height: 100%;

    ${respond(
      "phone-port",
      css`
        display: none;
      `
    )}

    li {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }

  .link {
    color: #c3c3c3;
    transition: color 0.2s ease-in-out;
    position: relative;
    display: block;
    min-width: max-content;
    height: 100%;
    display: flex;
    align-items: center;

    &--active {
      --border-thickness: 5px;
      border-top: var(--border-thickness) solid var(--navbar-active-color);
      color: var(--white);

      .link__content {
        transform: translateY(calc(-3px));
      }
    }

    &:hover {
      color: ${darken(0.1, "#fff")};
    }

    &--ahp {
      color: #c3c3c3;

      display: block;
    }

    img {
      width: 100%;
      height: auto;
      position: relative;
      top: 0.3rem;
      left: 0;
    }
  }

  .square {
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    position: absolute;
    width: 20rem;
    top: ${(props) => {
      return props.height;
    }};
    transform: translateX(-70%);
    z-index: 100;
    background-color: var(--color-primary);

    ul {
      list-style: none;

      li {
        padding: 1rem 1.5rem;
        text-align: right;
        height: 100%;

        &:hover {
          background-color: #9d9d9d;
          cursor: pointer;
        }

        &:not(:last-child) {
          border-bottom: 1px solid #9d9d9d;
        }

        a {
          color: white;
          display: block;
          width: 100%;
          text-align: right;
          white-space: nowrap;
          height: 100%;
        }
      }
    }
  }

  .square-shown {
    visibility: visible;
  }

  .hamburger {
    display: none;
    width: 3rem;

    ${respond(
      "phone-port",
      css`
        display: block;
      `
    )}
  }
`;

const Navbar = ({ setIsNavbarOpen }) => {
  const [height, setHeight] = useState("73px");
  const [isHovered, setIsHovered] = useState(false);
  const { navbarLinks } = useSiteMetadata();
  const navbarRef = React.useRef(null);

  useEffect(() => {
    const height = getComputedStyle(navbarRef.current).getPropertyValue("height");
    setHeight(height);
  }, []);

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }
  function handleHamburgerClick() {
    setIsNavbarOpen(true);
  }

  return (
    <Wrapper ref={navbarRef} height={height} isHovered={isHovered}>
      <div className="container">
        <div className="icon-container">
          <Link to="/" className="link">
            <img src={vivaIcon} className="logo" alt="Viva Concepts Logo" />
          </Link>
        </div>
        <img src={hamburgerIcon} alt="Open menu" className="hamburger" onClick={handleHamburgerClick} />
        <ul className="ul">
          {navbarLinks.map(({ name, url, type, subitems }, i) => {
            return (
              /* eslint-disable */
              <li
                key={i}
                className="li"
                onMouseEnter={subitems ? handleMouseEnter : null}
                onMouseLeave={subitems ? handleMouseLeave : null}
              >
                {/* eslint-enable */}
                {type === "external" ? (
                  <a href={`${url}`} className={subitems ? "link--ahp" : "link"}>
                    {name}
                  </a>
                ) : (
                  <Link to={url} className="link" activeClassName="link--active" partiallyActive={true}>
                    <span className="link__content">{name}</span>
                  </Link>
                )}

                {subitems && (
                  /* eslint-disable */
                  <div
                    className={isHovered ? "square square-shown" : "square"}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    role="dialog"
                  >
                    {/* eslint-enable */}
                    <ul>
                      {subitems.map(({ name, url, type }) => {
                        return (
                          <li key={uuidv4()}>
                            {type === "external" ? <a href={url}>{name}</a> : <Link to={url}>{name}</Link>}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;
