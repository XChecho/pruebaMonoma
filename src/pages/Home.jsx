import React from 'react'
import '../styles/Home.scss'

//Assets
import grocasa from '../assets/images/Grocasa.png'

//Components
import HomeElements from '../components/HomeElements'

const Home = () => {
  return (
    <div className="container"> 
        <div className="title">
            <img src={grocasa} alt="" className="logo"/>
        </div>
        <div className="elementsContainer">
          <HomeElements />
          <HomeElements />
          <HomeElements />
          <HomeElements />            
        </div>
    </div>
  )
}

export default Home