import React, { useState } from 'react'
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import Destination1 from "../assets/Destination1.jpg";
import Destination2 from "../assets/Destination2.jpg";
import Destination3 from "../assets/Destination3.jpg";
import Destination4 from "../assets/Destination4.jpg";
import Destination5 from "../assets/Destination5.jpg";
import Destination6 from "../assets/Destination6.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";


export default function Recommend() {
  const data = [
    {
      id: 1,
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "1100",
      duration: "Approx 2 night trip",
      category: "The Package Holiday"
    },
    {
      id: 2,
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "850",
      duration: "Approx 2 night trip",
      category: "The Package Holiday"
    },
    {
      id: 3,
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "600",
      duration: "Approx 2 night trip",
      category: "The Group Tour"
    },
    {
      id: 4,
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "750",
      duration: "Approx 1 night trip",
      category: "Long Term Slow Travel"
    },
    {
      id: 5,
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "1300",
      duration: "Approx 2 night 2 day trip",
      category: "The Group Tour"
    },
    {
      id: 6,
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "800",
      duration: "Approx 3 night 2 day trip",
      category: "Long Term Slow Travel"
    },
  ];

  const packages = [
    "All Tour",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const allCategories = ['all', ...new Set(data.map((tour) => tour.category))]

  const [tourItems, setTourItems] = useState(data)
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState(allCategories)


  const filter = (category) => {
    if(category === 'all') {
      setTourItems(data)
      return
    }
   const newItems = data.filter((item) => item.category === category)
   setTourItems(newItems)
  }

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommend Destinations</h2>
      </div>
      <div className="packages">

       {category.map((tour, index) => {
         return <button
          type="button"
          key={index}
          onClick={() => filter(tour)}
          >{tour}</button>
       })}
          
      </div>
      <div className="destinations">
        {tourItems.map((tour) => {
          const {id, image, title, subTitle, cost, duration} = tour;
          return (
            <article className="destination" key={id}>
              <img src={image} alt="Image" />
              <h3>{title}</h3>
              <p>{subTitle}</p>
              <div className="info">
                <div className="servises">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{cost}$</h4>
              </div>
              <div className="distance">
              <span>1000 Kms</span>
              <span>{duration}</span>
              </div>
              <button>Book</button>
            </article>         
          )
        })}
      </div>
    </Section>
  )
}

const Section = styled.section`
padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor: pointer;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
        padding: 0 3rem;
        .destination {
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
            .servises {
              display: flex;
              gap: 0.3rem;
                img {
                 width: 2rem;
                 border-radius: 1rem;
                 background-color: #93c47d;;
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
        }
      }
      button {
    padding: 0.5rem 1rem;
    margin-top: 6%;
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
       background-color: #0a2f51;
     }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`