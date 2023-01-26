<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
export default {};
</script>

<style>
  .custom-control-input:checked ~ .custom-control-label::before {
    color: #fff !important;
    border-color: #1c3c6b !important;
    background-color: #1c3c6b !important;
  }
  a:hover, a:focus {
    text-decoration: none;
  }
</style>
