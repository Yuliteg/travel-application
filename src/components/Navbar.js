import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);

  const toggleNavbar = () => {
    setNavbarState(!navbarState);
  };

  const closeNavbar = () => {
    setNavbarState(false);
  };

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container" onClick={closeNavbar}>
            <img src={logo} alt="" />
            Travelo
          </div>
          <div className="toggle" onClick={toggleNavbar}>
            {navbarState ? (
              <VscChromeClose />
            ) : (
              <GiHamburgerMenu />
            )}
          </div>
        </div>

        <ul className={navbarState ? "visible" : ""}>
          <li>
            <a href="#hero" onClick={closeNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="#servis" onClick={closeNavbar}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={closeNavbar}>
              Places
            </a>
          </li>
          <li>
            <a href="#test" onClick={closeNavbar}>
              Customers
            </a>
          </li>
        </ul>
        <button>Connect</button>
      </Nav>

      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#hero" onClick={closeNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="#servis" onClick={closeNavbar}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={closeNavbar}>
              Places
            </a>
          </li>
          <li>
            <a href="#test" onClick={closeNavbar}>
              Customers
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;

        &:hover {
          cursor: pointer;
        }
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 95%;
  align-items: center;
  transition: 0.3s ease-in-out;

  ul {
    list-style-type: none;

    li {
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }

      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;

export default Navbar;