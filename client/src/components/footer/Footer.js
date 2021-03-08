import React from 'react';

import { H3, H4 } from '../../utils/components/Titles';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import sFooter from './footer.module.css';

const arrayFooter = [
  {
    title: "COTIZACIÓN DE VEHÍCULOS",
    children: [{
      title: "información Legal",
      icon: [<ErrorOutlineOutlinedIcon className={sFooter.icons} />,]
    }],
  }, {
    title: "RALITOR S.A",
    children: [{
      title: "nissan.com.uy",
      icon: [],
    }, {
      title: "Políticas de Cookies",
      icon: [],
    }]
  }, {
    title: "AYUDA AL CLIENTE",
    children: [{
      title: "Politicas de Privacidad",
      icon: []
    }]
  }, {
    title: "NISSAN SOCIAL",
    children: [{
      title: "",
      icon: [
        <FacebookIcon className={sFooter.icons} />,
        <InstagramIcon className={sFooter.icons} />,
        <TwitterIcon className={sFooter.icons} />,
        <YouTubeIcon className={sFooter.icons} />
      ]
    }]
  }
]
export default function Footer() {

  const PrintArray = (el) => {
    return (
      <div className={sFooter.containerTitles} key={el.title}>
        <H4 title={el.title} s={"titleFooter"} />
          {el.children?.map((children, index) => 
            children.icon.length ? 
            <div style={{display: "flex"}} key={`${children.title} ${index}`}>
              {children.icon.map((icons, index) => 
                <div className={sFooter.containerIconsTitle} key={`${children.title} ${index}`}>
                  {icons}
                  {children.title && 
                  <H4 title={children.title} s={"subTitleFooter"}
                  />}
                </div>
              )}
            </div> : 
            <H4 
              key={`${children.title} ${index}`}
              title={children.title}
              s={"subTitleFooter"}
            />
          )}        
      </div>
    )
  }

  return (
    <div className={sFooter.container}>
      <div className={sFooter.containerFlex}>
        <H3 title={"Nissan."} style={{ color: '#fff', marginRight: 5 }} s={"titleNissan"} />
        <H3 title={"Innovation that excites."} s={"titleH3"} />
      </div>
      <div className={sFooter.containerArray}>
        <div className={sFooter.containerListArray}>
          {arrayFooter?.map(el => 
            PrintArray(el))}
        </div>
      </div>
      <hr style={{borderColor: "#141414"}}/>
      <H4 title={"© 2020 SIMPLICAR. Todos los derechos reservados."} s={"H4copyRight"}/>
    </div>
  )
}