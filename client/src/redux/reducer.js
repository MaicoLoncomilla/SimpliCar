import actionCreator from './action-creator';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'
// import { createLogger } from 'redux-logger';
// import storage from 'redux-persist/es/storage'

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
// export default () => {
//   const persistConfig = {
//     key: 'root',
//     storage,
//   }
//   const persistedReducer = persistReducer(persistConfig, reducer)

//   const store = createStore(
//     persistedReducer,
//     applyMiddleware(thunk, createLogger())
//   );
//   const persistor = persistStore(store)
//   return { store, persistor }
// }