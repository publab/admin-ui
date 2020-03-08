import Vue from 'vue'
import Storage from 'vue-ls';
import config from '@/config/defaultSettings'

Vue.use(Storage,config.storageOptions)
