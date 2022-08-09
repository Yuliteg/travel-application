import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

export default function Scrolling() {
  const [scrollState, setScrollState] = useState(false);

  const toTop = () => {
    window.scrollTo({top: 0})
  } 

  window.addEventListener('scroll', () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  })

  return (
     <Top scrollState={scrollState} onClick={toTop}>
      <img src={logo} alt="" />
     </Top>
  )
}

const Top = styled.div`
 display: ${({scrollState}) => (scrollState ? 'block' : 'none')};
 position: fixed;
 bottom: 1rem;
 right: 2rem;
 z-index: 10;
 cursor: pointer;
   img {
   height: 1.5rem;
 }
 border-radius: 2rem;
 background-color: #b1aeae;
 padding: 1rem;
`