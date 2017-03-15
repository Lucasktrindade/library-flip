import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const address = './';
const http = Vue.http;
http.options.root = address;

export default http;
