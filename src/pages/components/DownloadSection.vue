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
            <li class="footer-link"><a href="/" aria-current="page" class="active-exact active">Home</a></li>
            <li class="footer-link"><a href="/terms" class="">Terms</a></li>
            <li class="footer-link"><a href="/talent" class="">Talent &amp; Culture</a></li>
          </ul>
          <ul class="footer-links">
            <li class="footer-link"><a href="/refund-policy" class="">Refund Policy</a></li>
            <li class="footer-link"><a href="/emi-policy" class="">EMI Policy</a></li>
            <li class="footer-link"><a href="/privacy-policy" class="">Privacy Policy</a></li>
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
            <li class="footer-link"><a href="mailto:info@gozayaan.com">info@gozayaan.com</a></li>
            <li class="footer-link">
              <a href="tel:+447475842121">
                +44 7475842121
              </a>
            </li>
          </ul>

          <ul class="social-icons">
            <li class="social-icon">
              <a href="" target="_blank">
                <b-icon icon="facebook"></b-icon>
              </a>
            </li>
            <li class="social-icon">
              <a href="" target="_blank">
                <b-icon icon="youtube"></b-icon>
              </a>
            </li>
            <li class="social-icon">
              <a href="" target="_blank">
                <b-icon icon="instagram"></b-icon>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
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
</style>
