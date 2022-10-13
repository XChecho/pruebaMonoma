import React from 'react'
import { useNavigate } from 'react-router-dom'

//Assets
import bannerImage from '../assets/images/Rectangle -1@2x.png'
import areaIcon from '../assets/icons/WEB_MATERIAL-11.svg'
import bedIcon from '../assets/icons/WEB_MATERIAL-10.svg'
import bathIcon from '../assets/icons/WEB_MATERIAL-09.svg'

//Styles
import '../styles/HomeElements.scss'

const HomeElements = () => {
  
  const navigate = useNavigate();

  return (
    <div className="card">
        <img src={bannerImage} alt="" className="bannerCard"/>
        <h2 className="titleCard">Ático Dúplex de Obra Nueva</h2>
        <p className="description">Marianao, Sant Boi de Llobregat</p>
        <div className="infoContainerHome">
            <ul className="iconsContainer">
                <div>
                    <img src={areaIcon} alt=""/>
                    <p>102 m^</p>
                </div >
                <div>
                    <img src={bedIcon} alt=""/>
                    <p>3</p>
                </div>
                <div> 
                    <img src={bathIcon} alt=""/>
                    <p>2</p>
                </div>
            </ul>
            <p className="price">$ 330.000</p>
            <div className="containButton">
                <button className="infoButton" onClick={()=>navigate('/Detail')}>Más Info</button>
            </div>
        </div>
    </div>
  )
}

export default HomeElements