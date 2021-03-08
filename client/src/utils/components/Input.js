import React from 'react';

import sInput from '../../styles/input.module.css';

export function Input({placeholder, s, style, type, onChangeText, name, value }){
  return (
    <input 
      placeholder={placeholder}
      onChange={(e) => onChangeText(name, e.target.value)}
      className={sInput[s]}
      style={style}
      type={type}
      value={value}
    />
  )
}