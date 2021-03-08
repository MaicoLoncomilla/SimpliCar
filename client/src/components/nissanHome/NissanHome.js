import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import sContainer from './nissanHome.module.css';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { PNissanHome } from '../../utils/components/P';
import { H1, H3 } from '../../utils/components/Titles';
import full from '../../assets/img/full.jpg'
import movil from '../../assets/img/movil.jpg'
import tablet from '../../assets/img/tablet.jpg'

export default function NissanHome(){
  const [cities, setCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=londres&appid=${apiKey}`)
    .then(({data}) => setCities(data))
  }, [apiKey])

  return (
    <div className={sContainer.containerNissanHome}>
      
      <picture>
        <source srcSet={movil} media="(max-width: 400px)"/>
        <source srcSet={tablet} media="(max-width: 1200px)"/>
        <source srcSet={full} media="(max-width: 1200px)"/>
        <img src={full} className={sContainer.full} alt={"autoSentra"}/>
        <img src={movil} className={sContainer.movil} alt={"autoSentra"}/>
        <img src={tablet} className={sContainer.tablet} alt={"autoSentra"}/>
      </picture>
      <div className={sContainer.containerAbsolute}>
      <h1>{cities.name}</h1>
        <H1 title={"AHORA ES ONLINE"} s={'titleHomeH1'}/>
        <PNissanHome s={"parrafoHome"} parrafo={"Con Nissan Store, podés acceder a tu nuevo 0km con todos los servicios asociados desde la comodidad de tu sofá. Probanos!"}/>
        <Link to="/SimpliCar/store" className={sContainer.Links}>
          <div className={sContainer.containerIngresar}>
            <H3 title={"INGRESAR A NISSAN STORE"}/>
            <ArrowForwardIcon/>
          </div>
        </Link>
      </div>
    </div>
  )
}