import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 90 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/flight/list',
      name: 'list',
      components: { default: () => import('./pages/flight/list.vue'), header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' },
      }
    },
    {
      path: '/flight/booking',
      name: 'booking',
      components: { default: () => import('./pages/flight/Booking.vue'), header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' },
      }
    },
    {
      path: '/terms',
      name: 'terms',
      components: { default: () => import('./pages/Terms.vue'), header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' },
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy_policy',
      components: { default: () => import('./pages/PrivacyPolicy.vue'), header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' },
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 90 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 90 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
