import React from 'react';
import { Link } from 'react-router-dom';

import sContainer from './nissanHome.module.css';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { PNissanHome } from '../../utils/components/P';
import { H1, H3 } from '../../utils/components/Titles';
import full from '../../assets/img/full.jpg'
import movil from '../../assets/img/movil.jpg'
import tablet from '../../assets/img/tablet.jpg'

export default function NissanHome(){

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