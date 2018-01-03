import Vue from 'vue';
// vue 构建webapp
import App from './App.vue';
// 将App挂载mount到页面root上（挂载点）

new Vue({
    el: '#root',
    template: '<App />',
    components: {
        App
    }
})