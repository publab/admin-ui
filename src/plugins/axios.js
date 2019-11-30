"use strict";

import Vue from 'vue';
import axios from "axios";
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
import router from '../router'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "http://admin.2l2.cn",
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

const _layer = layer(Vue);
let _index = 0;

_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        _index++ || _layer.loading();

        let token = sessionStorage.getItem('access_token');
        config.headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
        }

        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        --_index || _layer.closeAll();
        return response;
    },
    function(error) {
        // Do something with response error
        --_index || _layer.closeAll();

        if(error.response){
            if(error.response.status == 401){
                if(sessionStorage.getItem('access_token')){
                    return new Promise(resolve => {
                        // 等待refresh_token
                        _axios.post('refresh').then((response) => {
                            if(response.data.status && response.data.data.token){
                                //写入新的token重新发送请求
                                sessionStorage.setItem('access_token',response.data.data.token)

                                error.config.headers['Authorization'] = 'Bearer ' + response.data.data.token;
                                axios(error.config).then((response) => {
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
    router.push({
        name: 'login'
    });
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
