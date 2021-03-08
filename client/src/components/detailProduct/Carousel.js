import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselGalley({ galery}) {

  let urlImage = "https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com"
  return (

    <Carousel autoPlay showStatus={false} renderIndicator={false} infiniteLoop={true}>
      {galery?.map(el => 
        <div key={el.large}>
          <img alt="" src={`${urlImage}/${el.medium}`}/>
        </div>)}
    </Carousel>

  )
}