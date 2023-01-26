<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    style="background-color: #1c3c6b !important;color: white !important;"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <b-img :src="$root.$data.app_logo_white" rounded :alt="$root.$data.app_name"></b-img>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; Copyright GoZayaan Ltd.
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
<style></style>
