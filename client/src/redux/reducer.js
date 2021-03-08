import actionCreator from './action-creator';

const { GETCARS, GETDETAILS, SENDEMAIL } = actionCreator

const initialState = {
  cars: [],
  details: false,
  sendEmail: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETCARS:
      return {
        ...state,
        cars: action.payload
      }
    case GETDETAILS:
      return {
        ...state,
        details: action.payload
      }
    case SENDEMAIL:
      return {
        ...state,
        sendEmail: action.payload
      }
    default:
      return {...state}
  }
}
export default reducer