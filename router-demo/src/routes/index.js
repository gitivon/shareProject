import Vue from 'vue';
import Router from 'vue-router';
import Page1 from '../components/Page1';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Page1,
  }
];

export default new Router({
  routes
})
