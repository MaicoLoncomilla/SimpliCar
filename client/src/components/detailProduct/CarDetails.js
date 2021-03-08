import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { H4 } from '../../utils/components/Titles';
import api from '../../redux/action-creator';
import Loading from '../loading/Loading';
import FormEmail from './FormEmail';
import Carousel from './Carousel';

import sContainer from '../../styles/container.module.css';

export default function CarDetails(){
  
  let { id } = useParams()
  const { GETDETAILS } = api;
  const dispatch = useDispatch()
  const details = useSelector(state => state.details)

  // Este Codigo comentado de abajo, metera en el store, los datos del auto cuando hagamos click en ver mas detalles. 

  // const cars = useSelector(state => state.cars)
  // const details = cars[id]

  // useEffect(() => {
  //   dispatch({ type: GETDETAILS, payload: cars[parseInt(id)]})
  // }, [id])

  // Este useEffect siempre traera los mismos datos del auto aunque cambie el id. 
  useEffect(() => {
    dispatch(api.getDetails(id))
  }, [dispatch, id])

  return (
    <>
      {!details ? <Loading /> :
        <div>
          <div className={sContainer.containerLinkVolver}>
            <Link to="/SimpliCar/store" className={sContainer.Links}>
              <div className={sContainer.containerVolver}>
                <ArrowBackIcon />
                <H4 title={"VOLVER A LA TIENDA"} style={{ marginRight: 5 }} s={"h4CarDetail"} />
              </div>
            </Link>
            <div className={sContainer.containerNameAndSendEmail}>
              <span>/</span>
              <H4 title={details.model} style={{ marginRight: 5, marginLeft: 5 }} s={"h4CarDetail"} />
              <span>/</span>
              <H4 title={"ENVIAR COTIZACIÓN POR MAIL"} style={{ marginLeft: 5 }} />
            </div>
          </div>
          <div className={sContainer.containerCarouselFormEmail}>
            <div>
              <div className={sContainer.containerDetailModel}>
                <H4 title={`${details.model} ${details.sku}`} />
                <H4 title={`USD$ ${details.amount}`} />
              </div>
              <Carousel galery={details.gallery}/>
              <hr style={{ color: "#edecec" }} />
              <div className={sContainer.containerCharacteristics}>
                <div className={sContainer.contanerEngineWarranty}>
                  <H4 title={details.detail.characteristics.engine} />
                  <H4 title={details.detail.characteristics.gas_type} />
                </div>
                <div className={sContainer.contanerEngineWarranty}>
                  <H4 title={details.detail.characteristics.warranty} />
                  <H4 title={details.detail.characteristics.body} />
                </div>
              </div>
              <hr style={{ color: "#edecec" }} />
              <H4 title={"VER TODAS LAS CARACTERRÍSTICAS | VER GALERÍA DE IMÁGENES"} s={'titleRed'} />
            </div>
            <FormEmail id={id} />
          </div>
        </div>
      } 
    </>
  )
}