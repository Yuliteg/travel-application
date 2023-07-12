import React from "react";
import styled from "styled-components";
import { dataService } from "../lib/const";

export default function Servis() {
  return (
    <Section id="servis">
      {dataService.map((service) => {
        return (
          <div className="service" key={service.id}>
            <div className="icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: translateX(0.4rem) translateY(-0.6rem);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
