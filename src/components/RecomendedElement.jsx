import React from 'react'

//Assets
import bannerImage from '../assets/images/Rectangle -1@2x.png'
import areaIcon from '../assets/icons/WEB_MATERIAL-11.svg'
import bedIcon from '../assets/icons/WEB_MATERIAL-10.svg'
import bathIcon from '../assets/icons/WEB_MATERIAL-09.svg'

//Styles
import '../styles/RecomendedElement.scss'

const RecomendedElement = () => {
  return (
    <div className="cardRecomended">
        <img src={bannerImage} alt="" className="bannerCardRecomended"/>
        <h2 className="titleCardRecomended">Ático Dúplex de Obra Nueva</h2>
        <p className="descriptionRecomended">Marianao, Sant Boi de Llobregat</p>
        <div className="infoContainerRecomended">
            <ul className="iconsContainerRecomended">
                <div>
                    <img src={areaIcon} alt="" className="logoCardRecomended"/>
                    <p>102 m^</p>
                </div >
                <div>
                    <img src={bedIcon} alt="" className="logoCardRecomended"/>
                    <p>3</p>
                </div>
                <div> 
                    <img src={bathIcon} alt="" className="logoCardRecomended"/>
                    <p>2</p>
                </div>
            </ul>
            <p className="price">$ 330.000</p>
            <div className="containButton">
                <button className="infoButton">Más Info</button>
            </div>
        </div>
    </div>
  )
}

export default RecomendedElement