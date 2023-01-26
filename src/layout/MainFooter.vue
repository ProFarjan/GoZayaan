<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    style="background-color: #1c3c6b !important;color: white !important;"
  >
    <div class="container">
      <hr class="separator" />
      <div class="row footer-copyright align-items-center">
        <div class="col-md-6">
          <b-img :src="$root.$data.app_logo_white" rounded :alt="$root.$data.app_name"></b-img>
        </div>
        <div class="col-md-6"><p class="text-small-regular text-right">© Copyright GoZayaan Ltd.</p></div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
hr {
  border-top: 1px solid rgb(255 255 255) !important;
}
</style>
