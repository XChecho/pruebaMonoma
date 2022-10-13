import React from 'react'
import { useNavigate } from 'react-router-dom'

//Assets
import grocasa from '../assets/images/Grocasa.png'
import bannerImage from '../assets/images/Rectangle -1@2x.png'
import gpsImage from '../assets/images/Screenshot 2020-07-06 at 11.53.49@2x.png'

import iconArrow from '../assets/icons/ICON_ARROW-05.svg'
import areaIcon from '../assets/icons/WEB_MATERIAL-11.svg'
import bedIcon from '../assets/icons/WEB_MATERIAL-10.svg'
import bathIcon from '../assets/icons/WEB_MATERIAL-09.svg'
import heartIcon from '../assets/icons/WEB_MATERIAL-08.svg'

//Components
import RecomendedElement from '../components/RecomendedElement'

//Styles
import '../styles/Detail.scss'

const Detail = () => {

  const navigate = useNavigate()

  return (
    <div className="container">
        <div className="headerContain">
            <img src={iconArrow} alt="" onClick={()=>navigate('/')}/>
            <img src={grocasa} alt=""/>
        </div>
        <div className="banner">
            <ul>
                <il><img src={bannerImage} alt=""/></il>
                {/* <il><img src={bannerImage} alt=""/></il> */}
            </ul>
        </div>
        <div className="objectsContain">
            <div className="textContain">
                <h2>Ático Dúplex de Obra Nueva</h2>
                <p className="descriptionShort">Marianao Sant Boi de Llobregat</p>
                <div className="descriptionLarge">
                    <p>Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una plata con entrada al sálon y final en terraza. El salón da entrada a la cocina y al pasillo que desitribuye una de las habitaciones dobles y uno de los cuartos de baño de tres piezas.<br/>Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una plata con entrada al sálon y final en terraza. El salón da entrada a la cocina y al pasillo que desitribuye una de las habitaciones dobles y uno de los cuartos de baño de tres piezas.<br/>Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una plata con entrada al sálon y final en terraza. El salón da entrada a la cocina y al pasillo que desitribuye una de las habitaciones dobles y uno de los cuartos de baño de tres piezas.</p>             
                </div>
            </div>
            <div className="infoContainer">
                <ul className="iconsContainer">
                    <div className="iconsDetail">
                        <img src={areaIcon} alt="" className="logoCard"/>
                        <p>102 m^</p>
                    </div >
                    <div className="iconsDetail">
                        <img src={bedIcon} alt="" className="logoCard"/>
                        <p>3</p>
                    </div>
                    <div className="iconsDetail"> 
                        <img src={bathIcon} alt="" className="logoCard"/>
                        <p>2</p>
                    </div>
                </ul>
                <div className="priceContain">
                    <p>330.000$</p>
                    <button>
                        <img src={heartIcon} alt=""/>
                    </button>
                </div>
            </div>
            <div className="infoAditionalContain">
                <div>
                    <h3>Características</h3>
                    <p>Ático 102 m2 (construidos)<br/>3 habitaciones<br/>Segunda mano100m2 (útiles)<br/>Reformado<br/>2 Baños</p>
                </div>
                <div>
                    <h3>Extras</h3>
                    <p>Terrazaz<br/>Balcón<br/>Ascensor<br/>Calefacción<br/>Aire acondicionado</p>
                </div>
            </div>
            <div className="mapsImage">
                <img src={gpsImage} alt=""/>
            </div>
            <div className="contact">
                <p>Avisame si baja</p>
                <label>
                    <input type="checkbox"/>
                    <div className="slide round"></div>
                </label>
                <button>Contactar</button>
            </div>
        </div>
        <div className="recomended">
            <h2>También pueden interesarte</h2>
            <div className="recomendedCardContain">
                <RecomendedElement/>
                <RecomendedElement/>
            </div>
        </div>
    </div>
  )
}

export default Detail