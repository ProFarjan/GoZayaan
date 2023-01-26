<template>
  <navbar
    position="fixed"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link class="navbar-brand" to="/">
        <b-img :src="$root.$data.app_logo" rounded :alt="$root.$data.app_name"></b-img>
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item d-inline-block text-center brand-nav" style="margin-right: 30vw;">
        <a href="#?search=flight" class="nav-link active my_nav_a" target="_self" aria-current="page">
          <img src="/img/icon-Flight.svg" width="30" height="20" class="" />
          <span class="d-block my_nav_span">Flight</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link btn btn-primary" :href="'tel:'+$root.$data.call_now" style="font-weight: 600;padding: 8px 20px;">
          <p>Call Now</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>
.my_nav_span {
  font-weight: 600;
  color: #1c3c6b;
  font-size: 0.75rem;
  line-height: 12px;
}
.my_nav_a {
  padding: 0;
  display: none;
}
.my_nav_a:hover{
  background-color: transparent !important;
  border-radius: 0 !important;
}
</style>
