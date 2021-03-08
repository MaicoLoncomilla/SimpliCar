import axios from 'axios';

const header = {
  headers: { 
    "Access-Control-Allow-Origin": "*",
    'Authorization': 'Bearer qwertyuiopasdfghjklzxcvbnm123456',
  }
}

const actionCreator = {

  GETCARS: 'GETCARS',
  getCars: function (alert) {
    return dispatch => {
      const promise = axios.get(`/product/`, header)
      this._dispatchPromise(promise, this.GETCARS, dispatch, 'cars', alert)
    }
  },

  GETDETAILS: "GETDETAILS",
  getDetails: function(id){
    return dispatch => {
      const promise = axios.get(`/product/${id}`, header)
      this._dispatchPromise(promise, this.GETDETAILS, dispatch)
    }
  },

  SENDEMAIL: 'SENDEMAIL',
  sendEmail: function(data, alert) {
    return dispatch => {
      const promise = axios.post(`/lead/${data.product}`, data, header)
      this._dispatchPromise(promise, this.SENDEMAIL, dispatch, "email", alert)
    }
  },

  _dispatchPromise: function (promise, type, dispatch, text, alert) {
    return promise
      .then(({ data }) => {
        if(text === "cars"){
          return dispatch({ type: type, payload: data.results })
        }
        if(text === "email"){
          return alert.show(data.msg, { type: "success", timeout: 5000 })
        }
        dispatch({ type: type, payload: data })
      })
      .catch(err => {
        if (err.response) {
          alert.show(`Error! \n Status: ${err.response.status} \n ${err.response.data}`, { type: "error", timeout: 2500 });
        } else {
          alert.show(`Error! ${err}`, { type: "error", timeout: 2500 });
        }
      })
  }
}
export default actionCreator