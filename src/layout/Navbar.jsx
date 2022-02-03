import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import respond from "../styles/abstracts/mediaqueries";
import vivaIcon from "../images/icons/viva-icon.svg";

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
        justify-content: center;
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

    li {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }

  .link {
    color: var(--white);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${darken(0.1, "#fff")};
    }

    &--ahp {
      color: var(--white);
      display: block;
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
`;

const Navbar = () => {
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

  return (
    <Wrapper ref={navbarRef} height={height} isHovered={isHovered}>
      <div className="container">
        <div className="icon-container">
          <Link to="/" className="link">
            <img src={vivaIcon} className="logo" alt="Viva Concepts Logo" />
          </Link>
        </div>
        <ul className="ul">
          {navbarLinks.map(({ name, url }, i) => {
            const isAhp = name === "AHP";
            return (
              <li
                key={i}
                className="li"
                onMouseEnter={isAhp ? handleMouseEnter : null}
                onMouseLeave={isAhp ? handleMouseLeave : null}
              >
                <a href={`${url}`} className={isAhp ? "link--ahp" : "link"}>
                  {name}
                </a>
                {isAhp && (
                  <div
                    className={isHovered ? "square square-shown" : "square"}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul>
                      <li>
                        <a href="https://www.ddsturningpoint.com/orientation">ORIENTATION</a>
                      </li>
                      <li>
                        <a href="https://www.ddsturningpoint.com/stepone">STEP 1</a>
                      </li>
                      <li>
                        <a href="https://www.ddsturningpoint.com/step-2">STEP 2</a>
                      </li>
                      <li>
                        <a href="https://www.ddsturningpoint.com/step-three">STEP 3</a>
                      </li>
                      <li>
                        <a href="https://www.ddsturningpoint.com/step-four">STEP 4</a>
                      </li>
                      <li>
                        <a href="https://www.ddsturningpoint.com/admin-forms">ADMIN FORMS</a>
                      </li>
                      <li>
                        <a href="https://www.ddsturningpoint.com/hat-write-ups">HAT WRITE-UPS</a>
                      </li>
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
