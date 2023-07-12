import React from "react";
import styled from "styled-components";
import banner from "../assets/banner.jpg";
import dot from "../assets/dots-3.png";

export default function Hero() {
  return (
    <>
      <Section id="hero">
        <div className="background">
          <img src={banner} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h1>LET'S BEGIN</h1>
            <img src={dot} alt="" />
            <p>We assist you to choose the best.</p>
          </div>
          <div className="search">
            <div className="container">
              <label htmlFor="">Where you want to go?</label>
              <input type="text" placeholder="Search your location" />
            </div>
            <div className="container">
              <label htmlFor="">Check in</label>
              <input type="date" />
            </div>
            <div className="container">
              <label htmlFor="">Check out</label>
              <input type="date" placeholder="Search your location" />
            </div>
            <button>Explore Now</button>
          </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 2.5rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
      img {
        position: relative;
        margin-top: 0.3rem;
      }
    }
    
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #303030;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: #303030;
          &[type="date"] {
            padding-left: 1.5rem;
          }
          &::placeholder {
            color: #303030;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.4rem;
        border: none;
        color: white;
        background-color: #73a073;
        font-size: 0.95rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #426e42;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 950px) {
    height: 25rem;
    .background {
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
          button {
            padding: 1rem;
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
