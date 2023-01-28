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

  .multiselect{
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 8px 12px rgba(51,65,80,.06),0 14px 44px rgba(51,65,80,.11);
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    z-index: 10;
    overflow-y: auto;
    width: 150%;
  }
  .multiselect ul{
    padding: 0;
    width: 100%;
  }
  .multiselect ul li{
    padding: 6px 10px;
  }
  .multiselect ul li:hover{
    background-color: rgba(188,201,220,.4);
  }
  .multiselect__tags{
    padding: 10px 15px !important;
  }
  .multiselect__input{
    display: block;
    appearance: none;
    padding-left: 20px;
    width: 100%;
    border: 0;
    outline: 0;
    background-image: url(https://gozayaan.farjan.dev/img/icon-search.svg);
    background-repeat: no-repeat;
    background-size: 14px;
    background-position: 0;
  }
  .multiselect__content-wrapper{
    overflow-y: auto;
    border-top: 1px solid #dbdde0;
  }

  .multiselect__content{
    list-style-type: none;
  }
  .mx-datepicker {
    width: 100% !important;
    display: grid !important;
    position: absolute;
    bottom: -10px;
    left: 7.6vw;
  }
  .mx-datepicker-range {
    left: 24.5vw !important;
  }
  .mx-datepicker .mx-input-wrapper {
    position: absolute;
  }
  .mx-datepicker input {
    padding: 0;
    margin: 0;
    height: 0;
    border: 0;
  }
  .mx-input-wrapper i {
    font-size: 0px;
  }
</style>
