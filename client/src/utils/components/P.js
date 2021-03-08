import React from 'react';

import sP from '../../styles/p.module.css';

export function PNissanHome({ parrafo, s }){
  return (
    <p className={sP[s]}>{parrafo}</p>
  )
}

export function Parrafo({ parrafo, s, style }){
  return (
    <p style={style} className={sP[s]}>{parrafo}</p>
  )
}