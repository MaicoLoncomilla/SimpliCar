import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import sHeader from '../../styles/header.module.css';

export default function Header(){
  
  let { pathname } = window.location
  return (
    <div className={sHeader.containerHeader}>
      <div className={sHeader.containerLinks}>
        <Link to="/" className={sHeader.Links}>
          <div className={sHeader.containerSvg}>
            <img src="https://libs.nissan-cdn.net/etc/designs/nissan_next_v3/21.02.2.NISSAN-13/common-assets/img/svg/nissan-next-logo.svg" alt={"logoNissan"}/>
          </div>
        </Link>
        <Link to="/store" className={pathname === "/" ? sHeader.LinksHeader : sHeader.Links}>VEHÍCULOS</Link>
        <Link to="/" className={pathname === "/" ? sHeader.LinksHeader : sHeader.Links}>DESCRUBRÍ NISSAN</Link>
      </div>
      <div className={sHeader.containerSearch}>
        <SearchIcon/>
        <input placeholder={"BUSCAR POR MODELO O VEHÍCULO.."}/>
      </div>
    </div>
  )
}