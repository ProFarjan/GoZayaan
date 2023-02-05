<template>
  <div class="section section-basic" style="margin: 3rem 0;">
    <div class="container" id="hot_deal_slide">

      <div class="promotion-navbar row">
        <h4 class="col-md-6">Hot Deals</h4>
        <div class="promotion-tab col-md-6">
          <ul>
            <li class="active">
              All
            </li>
            <li class="">
              Hotel
            </li>
            <li class="">
              Flight
            </li>
            <li class="">
              Others
            </li>
            <li class="">
              Tour
            </li>
          </ul>
        </div>
      </div>

      <carousel
          :mouse-drag="false"
          :navigationEnabled="true"
          :paginationEnabled="false"
          :perPageCustom="[[320, 1],[1199, 2]]">
        <slide v-for="n in 8" :key="n">
          <div class="promotion-content">
            <div class="img-placeholder">
              <img src="https://gozayaan.sgp1.digitaloceanspaces.com/media/discount_images/campaign_BTOUR07_deal.jpg" />
            </div>
            <div class="text-wrapper">
              <p class="promotion-title">
                On St. Martin Cruises for bKash payment. {{n}}
              </p>
              <p class="promotion-subtext">
                On published rate, for bKash payment. Till 31 Mar '23.
              </p>
            </div>
            <div class="promo-code">
              <div class="code-wrapper">
                <img src="/img/promo-deal.svg" width="20" height="20" alt="promo-deal-icon" />
                <span class="code-tag">BTOUR07</span>
              </div>
              <div class="btn-wrapper">
                <a href="/campaign/id/248" class="brand-btn" target="_blank">
                  <i data-v-09396f38="" class="fas fa-arrow-up"></i>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </slide>
      </carousel>

    </div>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';

export default {
  name: "HotDeals",
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>
#hot_deal_slide .VueCarousel-slide {
  margin: 1.15rem !important;
}

.promotion-content {
  background-color: #fff;
  display: flex;
  box-shadow: 0 10px 10px 3px rgb(0 0 0 / 4%);
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 12px;
  min-width: calc(50% - 100px);
  position: relative;
}

.promotion-content .img-placeholder {
  width: 160px;
  height: 120px;
  position: relative;
  top: -25px;
  left: -25px;
}

.promotion-content .img-placeholder img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promotion-content img, svg {
  vertical-align: middle;
}

.promotion-content img {
  border-style: none;
}

.promotion-content .text-wrapper {
  margin-top: 10px;
  width: 60%;
}

.promotion-content .text-wrapper p {
  margin: 0;
}

.promotion-content .text-wrapper p.promotion-title {
  color: #1c3c6b;
  font-size: 1rem;
  line-height: 22px;
  font-weight: 600;
}

.promotion-content .text-wrapper p.promotion-subtext {
  color: #22292f;
  margin-top: 5px;
  font-size: 0.8rem;
  line-height: 20px;
  font-weight: 400;
}

.promotion-content .promo-code {
  width: 100%;
  color: #1c3c6b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  position: relative;
  padding: 10px 0 5px;
}

.promotion-content .promo-code .code-wrapper {
  background-color: #ecf3fe;
  padding: 4px 10px;
  border-radius: 4px;
  position: absolute;
  bottom: 5px;
}

.promotion-content .promo-code .code-wrapper img {
  height: 20px;
  width: auto;
}

.promotion-content .promo-code .code-tag {
  font-size: 1rem;
  line-height: 20px;
  font-weight: 500;
  color: #1c3c6b;
  padding-left: 5px;
  vertical-align: text-top;
  font-family: Gilroy;
}

.promotion-content .btn-wrapper {
  position: absolute;
  right: 5px;
  bottom: -22px;
}

.promotion-content .btn-wrapper .brand-btn {
  background: #fccd03;
  color: #1c3c6b;
  text-align: right;
  padding: 12px 15px;
  border-radius: 8px;
  border: 0;
  font-size: 1rem;
  line-height: 22px;
  font-weight: 600;
  font-family: Gilroy;
}

.promotion-content .btn-wrapper .brand-btn i {
  transform: rotate(45deg);
}

.promotion-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
}

.promotion-navbar h4 {
  margin: 0 0 1rem 0;
  font-size: 2rem;
  line-height: 22px;
  font-weight: 600;
  color: #1c3c6b;
}

.promotion-navbar ul {
  list-style: none;
  display: flex;
  background-color: #fff;
  padding: 5px 10px;
  margin: 0;
  border-radius: 100px;
  text-align: center;
}

.promotion-navbar ul li:not(:last-of-type) {
  margin-right: 5px;
}

.promotion-navbar ul li {
  cursor: pointer;
  border-radius: 100px;
  padding: 0 20px;
}

.promotion-navbar ul li.active, .promotion-navbar ul li:hover {
  color: #1c3c6b;
  background-color: #ecf3fe;
}
</style>