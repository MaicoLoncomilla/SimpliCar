import React from 'react';

import sTitle from '../../styles/titles.module.css'

export function H1({ title, style, s}){
  return (
    <h1 style={style} className={sTitle[s]}>{title}</h1>
  )
}

export function H2({ title, style, s}) {
  return (
    <h2 style={style} className={sTitle[s]}>{title}</h2>
  )
}

export function H3({title, style, s }){
  return (
    <h3 style={style} className={sTitle[s]}>{title}</h3>
  )
}

export function H4({ title, style, s }){
  return (
    <h4 style={style} className={sTitle[s]}>{title}</h4>
  )
}