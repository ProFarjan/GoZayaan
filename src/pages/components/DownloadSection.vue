<template>
  <div
    class="section section-download"
    id="footer"
    style="background-color: #1c3c6b !important;color: white !important;"
  >
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-4">
          <h6>Discover</h6>
          <ul class="footer-links">
            <li class="footer-link">
              <router-link class="active-exact" to="/">Home</router-link>
            </li>
            <li class="footer-link">
              <router-link to="/terms">Terms & Conditions</router-link>
            </li>
            <li class="footer-link">
              <router-link to="/privacy-policy">Privacy policy </router-link>
            </li>
          </ul>
          <ul class="footer-links">
            <li class="footer-link">
              <router-link to="/refund-policy">About Us</router-link>
            </li>
            <li class="footer-link">
              <router-link to="/emi-policy">Contact Us</router-link>
            </li>
            <li class="footer-link">
              <router-link to="/privacy-policy">Company Details</router-link>
            </li>
          </ul>
        </div>
        <div class="mb-2 col-md-4">
          <h6>Need Help ?</h6>
          <p class="text-small-regular">
            We are Always here for you! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM).
          </p>
        </div>
        <div class="col-md-4">
          <h6>Contact</h6>
          <ul class="footer-contact">
            <li class="footer-link"><a :href="'mailto:'+$root.$data.app_mail">{{ $root.$data.app_mail }}</a></li>
            <li class="footer-link">
              <a :href="'tel:'+$root.$data.call_now">
                {{ $root.$data.call_now }}
              </a>
            </li>
          </ul>

          <ul class="social-icons">
            <li class="social-icon">
              <a :href="$root.$data.fb_link" target="_blank">
                <b-icon class="icon" icon="facebook"></b-icon>
              </a>
            </li>
            <li class="social-icon">
              <a :href="$root.$data.youtube_link" target="_blank">
                <b-icon class="icon" icon="youtube"></b-icon>
              </a>
            </li>
            <li class="social-icon">
              <a :href="$root.$data.instagram_link" target="_blank">
                <b-icon class="icon" icon="instagram"></b-icon>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'download-section'
  };
</script>

<style scoped>
  .section-download {
    padding-top: 3.5rem !important;
  }

  .section-download h6 {
    font-size: 0.9rem;
    line-height: 26px;
    font-weight: 600;
    color: #fff;
  }
  .section-download .footer-contact, .section-download .footer-links {
    list-style: none;
    padding-left: 0;
    display: inline-block;
    vertical-align: top;
    width: 50%;
  }
  .section-download .footer-contact .footer-link a, .section-download .footer-links .footer-link a {
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    text-decoration: none;
    font-weight: 400;
  }
  .section-download .footer-contact {
    width: 100%;
  }
  .section-download .footer-contact .footer-link, .section-download .footer-links .footer-link {
    display: block;
    margin-bottom: 6px;
  }
  .text-small-regular {
    font-weight: 300;
    font-size: 14px;
  }
  .section-download .social-icons {
    padding-left: 0;
  }
  .section-download .social-icons .social-icon {
    display: inline-block;
    text-align: center;
  }
  .section-download .social-icons .social-icon a {
    color: #fff;
    font-size: 16px;
    font-size: 1.1428571429rem;
    line-height: 40px;
    font-weight: 400;
  }
  .section-download .social-icons .social-icon a .icon {
    background: hsla(0,0%,100%,.2);
    margin-right: 8px;
    border-radius: 33px;
    width: 40px;
    line-height: 40px;
    min-height: 38px;
    padding: 11px;
  }
</style>
