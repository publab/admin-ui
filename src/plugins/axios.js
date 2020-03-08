"use strict";

import Vue from 'vue';
import axios from "axios";
import router from '../router'
import store from '../store'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        let token = sessionStorage.getItem('access_token');
        store.commit('loading/increment');
        config.headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
        }

        return config;
    },
    function(error) {
        // Do something with request error
        store.commit('loading/decrement');
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        store.commit('loading/decrement');
        return response.data;
    },
    function(error) {
        // Do something with response error
        store.commit('loading/decrement');
        if(error.response){
            if(error.response.status == 401){
                if(sessionStorage.getItem('access_token')){
                    //个人理解重新返回一个 Promise 替代原有的 再次发送请求后调用 当前的 resolve
                    return new Promise(resolve => {
                        // 等待refresh_token
                        _axios.post('refresh').then((response) => {
                            if(response.status && response.data.token){
                                //写入新的token重新发送请求
                                sessionStorage.setItem('access_token',response.data.token)
                                _axios(error.config).then((response) => {
                                    resolve(response);
                                });
                            }else{
                                _login();
                            }
                        }).catch((error) => {
                            _login();
                        });
                    });
                }else{
                    return _login();
                }
            }
        }

        return Promise.reject(error);
        // return new Promise(resolve => {
        //     resolve('test');
        // });

    }
);

let _login = function () {
    sessionStorage.clear();
    router.push('/user/login');
};

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
