import axios from "axios";
import {getItem} from './webStorage'
import store from  '../store/store'
import ActionCreator from  '../store/actionCreator'
axios.interceptors.request.use(function (config) {
  // console.log(config)
  config.data.token=getItem('token')||''
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  let list=[-996,-997,-998,-999]
  if(list.indexOf(response.data.err)!==-1){
    // token 出问题了
    console.log('token 出问题了')
    store.dispatch(ActionCreator.setTokenModal(true))

    return Promise.reject(response);
  }
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
export default axios