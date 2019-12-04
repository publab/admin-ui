import Vue from 'vue'
import router from '../router'

let Helper = {};
Helper.install = function (Vue, options) {
    Vue.prototype.jump = function (path){
        return path && this.$route.path != path ? router.push(path):null;
    };
};

Vue.use(Helper)
