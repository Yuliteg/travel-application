import React from 'react'
import styled from 'styled-components'
import avatar from '../assets/avatar.jpg'

export default function Test() {
  return (
     <Section id="test">
      <div className='title'>
      <h2>Happy Travelers</h2>
      </div>
      <div className="customers">
          <div className="customer">
             <p>
             The holiday of a life time - our gulet adventure in the Dodecanese Greek Islands was without a doubt our favourite family trip.
             </p>
              <div className="info">
                <img src={avatar} alt="" />
                 <div className="details">
                   <h4>Suzy Lautze</h4>
                   <span>Oregon, USA</span>
                 </div>
              </div>
          </div>

          <div className="customer">
             <p>
             The holiday of a life time - our gulet adventure in the Dodecanese Greek Islands was without a doubt our favourite family trip.
             </p>
              <div className="info">
                <img src={avatar} alt="" />
                 <div className="details">
                   <h4>Suzy Lautze</h4>
                   <span>Oregon, USA</span>
                 </div>
              </div>
          </div>

          <div className="customer">
             <p>
             The holiday of a life time - our gulet adventure in the Dodecanese Greek Islands was without a doubt our favourite family trip.
             </p>
              <div className="info">
                <img src={avatar} alt="" />
                 <div className="details">
                   <h4>Suzy Lautze</h4>
                   <span>Oregon, USA</span>
                 </div>
              </div>
          </div>
      </div>
     </Section>
  )
}


const Section = styled.section`
margin: 5rem 0;
.title {
  text-align: center;
  margin-bottom: 2rem;
}
 .customers {
  display: flex;
  justify-content: center;
  margin: 0 2rem;
  gap: 2rem;
   .customer {
    background-color: aliceblue;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
            transform: translateX(0.4rem) translateY(-0.4rem);
            box-shadow: rgba(0, 0, 0, 0.20) 0px 0px 15px;
          }
     .info {
      display: flex;
      justify-content: center;
      gap: 1rem;
      align-items: center;
      margin-top: 1rem;
      img {
        height: 3rem;
        border-radius: 3rem;
      }
      .details {
         span {
          font-size: 0.9rem;
         }
      }
     }
   }
 }

 @media screen and (min-width: 280px) and (max-width: 768px) {
    .customers {
      flex-direction: column;
      margin: 0;
      .customer {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`