import React from 'react';
import { Link } from 'react-router-dom';
import { H1, H4 } from '../../../utils/components/Titles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import sCard from './card.module.css';
import { Parrafo } from '../../../utils/components/P';

export default function Card({ el, index }) {
  let urlImage = "https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com"

  return (
    <div className={sCard.containerCards} key={el.id}>
      <img src={`${urlImage}/${el.gallery[0].medium}`} alt={el.model}/>
      <div className={sCard.containerDescription}>
        <H1 title={el.model} style={{textAlign: 'center', marginBottom: 20}} s={"titleH1"}/>
        <hr style={{color: "#edecec"}}/>
        <div className={sCard.containerPrice}>
          <H4 title={"PRECIO DESDE"} style={{color: "#d0cace"}}/>
          <H4 title={`US$ ${el.amount}`} />
        </div>
        <hr style={{color: "#edecec"}}/>
        <Link to={`/SimpliCar/detail/${index}`} className={sCard.Links}>
          <div className={sCard.containerVerDetalle}>
            <H4 title={"VER DETALLES DE MODELO"}/>
            <ArrowForwardIcon/>
          </div>
        </Link>
        <Parrafo parrafo={"Imágenes meramente ilustrativas no reportando la realidad exacta, pudiendo existir variaciones en la percepción."} s={'parrafo'}/>
      </div>
    </div>
  )
}