import React from 'react';
import sButton from '../../styles/button.module.css';

export default function ButtonSubmit({ s, style, title }) {
  return (
    <button
      className={sButton[s]}
      style={style}
      type={"submit"}>
      {title}
    </button>
  )
}