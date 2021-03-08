import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

import ButtonSubmit from '../../utils/components/Button';
import { Input } from '../../utils/components/Input';
import { Parrafo } from '../../utils/components/P';
import { H2 } from '../../utils/components/Titles';
import sForm from '../../styles/form.module.css';
import api from '../../redux/action-creator';

export default function FormEmail({ id }) {
  const dispatch = useDispatch()
  const alert = useAlert();
  const [ state, setState ] = useState({
    fullname: "",
    email: "",
    phone: ""
  })

  const onChangeText = (name, value) => {
    setState({...state, [name]: value })
  }
  const onSendEmail = (e) => {
    e.preventDefault()
    if (!state.email || !state.fullname || !state.phone) return alert.show("llene los campos")
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email)) return alert.show('No tiene un formato email')

    let data = {
      fullname: state.fullname,
      email: state.email,
      phone: state.phone,
      product: id
    }
    dispatch(api.sendEmail(data, alert))
    setState({
      fullname: "",
      email: "",
      phone: ""
    })
  }

  return (
    <form className={sForm.containerForm} onSubmit={(e) => onSendEmail(e)}>
      <H2 title={"INGRESÁ TUS DATOS"} />
      <Parrafo parrafo={"Por favor completá el siguiente formulario para que uno de nuestros asesores se pueda contactar contigo."} s={'parrafo'} style={{margin: '10px 0px'}}/>
      <Input
        placeholder={"NOMBRE Y APELLIDO"}
        s={"inputForm"}
        onChangeText={onChangeText}
        type={"text"}
        value={state.fullname}
        name={"fullname"} />
      <Input
        placeholder={"CORREO ELECTRÓNICO"}
        s={"inputForm"}
        onChangeText={onChangeText}
        type={"email"}
        value={state.email}
        name={"email"} />
      <Input
        placeholder={"TELÉFONO"}
        s={"inputForm"}
        onChangeText={onChangeText}
        type={"text"}
        value={state.phone}
        name={"phone"} />
      <ButtonSubmit
        title={"ENVIARME LA COTIZACIÓN POR MAIL"}
        s={"buttonSend"} />
    </form>
  )
}