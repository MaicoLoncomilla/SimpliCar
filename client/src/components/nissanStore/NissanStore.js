import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import api from '../../redux/action-creator';
import { Parrafo } from '../../utils/components/P';

import { H1, H4 } from '../../utils/components/Titles';
import Card from './cards/Card';
import sContainer from '../../styles/container.module.css';
import Loading from '../loading/Loading';


export default function Store(){

  const cars = useSelector(state => state.cars)
  const alert = useAlert()
  const { GETCARS } = api;
  const dispatch = useDispatch()

  const OrdenBy = (type) => {
    switch (type) {
      case "masBajo":
        return dispatch({
          type: GETCARS,
          payload: Object.values(cars.sort((a, b) => a.amount - b.amount))
        })
      case "masAlto":
        return dispatch({
          type: GETCARS,
          payload: Object.values(cars.sort((a, b) => b.amount - a.amount))
        })
      default:
        return
    }
  }

  const selectFilter = (el, index) => {
    return (
      <select className={sContainer.filters} key={index}>
        {el.map((el, index) => <option key={index}>{el.title}</option>)}
      </select>
    )
  }

  const filterOrdenBy = () => {
    return (
      <select onChange={(e) => OrdenBy(e.target.value)}>
        {arrayOrdenBy.map((el, index) => <option value={el.value} key={index}>{el.title}</option>)}
      </select>
    )
  }
  useEffect(() => {
    if(!cars.length){
      dispatch(api.getCars(alert))
    }
  }, [dispatch, cars, GETCARS])

  return (
    <div className={sContainer.containerNissanStore}>
      <div className={sContainer.containerProximoNissan}>
        <H1 title={"¿CUÁL VA A SER TU PRÓXIMO NISSAN?"}/>
      </div>
      <H4 title={`${cars?.length} VEHÍCULOS`} s={"countCars"}/>
      <div className={sContainer.containerFilterAndCars}>
        <div className={sContainer.containerFilters}>
          <div>
            { array.map((el, index) => selectFilter(el, index))}
          </div>
          <div>
            Ordenar por
            {filterOrdenBy()}
          </div>
        </div>
        {cars.length === 0 ? <Loading /> :
          <div className={sContainer.containerMainCars}>
            {cars.map((el, index) => <Card el={el} key={el.id} index={index} />)}
          </div>
        }
      </div>
      <Parrafo parrafo={"*Los precios expuestos en este catalogo son expresados en dólares americanos. Los mismos incluyen IVA y podrán variar en función al modelo y/o versión elegida. El precio por unidad reflejado en este catálogo refiere a la unidad de versión más económica por cada modelo. RALITOR SA se reserva al derecho de modificar y actualizar los mismos en cualquier momento. Es responsabilidad del cliente confirmar al momento de su compra, el precio final que aparece en el catálogo. No se incluyen Gastos de empadronamiento ni cualquier tipo de costo municipal, así como tampoco gastos de traslados, fletes o seguro del vehículo. No incluye costos de instalación de accesorios."} s={'parrafoStore'}/>
    </div>
  )
}


const array = [
  [{ title: "CARROCERIA" }],
  [{ title: "MODELO" }],
  [{ title: "PRECIO" }]
]

const arrayOrdenBy = [
  {
    title: "Precio mas Bajo",
    value: "masBajo"
  },{
    title: "Precio mas Alto",
    value: "masAlto"
  }
]