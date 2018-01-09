import Vue from 'vue';
// 使用vue 构建webapp
import App from './App.vue';
// 将App挂载mount到页面root（挂载点）上

new Vue({
  el: '#root',
  template: '<App />',
  components: {
    App
  }
})