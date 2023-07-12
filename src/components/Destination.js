import styled from "styled-components";
import iconAirplane from "../assets/info1.png";
import iconMap from "../assets/info2.png";
import iconFood from "../assets/info3.png";

const Destination = ({ tour }) => {
  const { image, title, subTitle, cost, duration } = tour;
  return (
    <Article className="destination">
      <img src={image} alt="destination" />
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <div className="info">
        <div className="services">
          <img src={iconAirplane} alt="iconAirplane" />
          <img src={iconMap} alt="iconMap" />
          <img src={iconFood} alt="iconFood" />
        </div>
        <h4>{cost}$</h4>
      </div>
      <div className="distance">
        <span>1000 Kms</span>
        <span>{duration}</span>
      </div>
      <button>Book</button>
    </Article>
  );
};

export default Destination;

const Article = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #ececf1;
  border-radius: 0.8rem;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateX(0.4rem) translateY(-0.6rem);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 15px;
  }

  img {
    width: 100%;
    border-radius: 0.6rem;
  }

  .info {
    display: flex;
    align-items: center;

    .services {
      display: flex;
      gap: 0.3rem;

      img {
        width: 2rem;
        border-radius: 1rem;
        background-color: #93c47d;
        padding: 0.2rem 0.4rem;
      }
    }

    display: flex;
    justify-content: space-between;
  }

  .distance {
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 0.5rem 1rem;
    margin-top: 5%;
    margin-left: 1%;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #73a073;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: plum;
    }
  }
`;
