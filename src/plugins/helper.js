import Vue from 'vue'
import router from '../router'

let Helper = {};
Helper.install = function (Vue, options) {
    Vue.prototype.jump = function (path){
        return path && this.$route.path != path ? router.push(path):null;
    };

    Vue.prototype.hasErrors = function (fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    // Vue.prototype.handleReset = function (clearFilters = null) {
    //     clearFilters ? clearFilters() && (this.searchText = ''): (this.form.resetFields());
    // }
};

Vue.use(Helper)
