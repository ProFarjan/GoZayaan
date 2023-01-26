<template>
  <div>
    <div class="page-header clear-filter">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">

          <b-card round>
            <div class="search-type">
              <span class="search-type-tab active">
                <img src="/img/icon-Flight.svg" alt="Flight" width="25" height="18">
                Flight
              </span>
            </div>

            <div id="btn_flight_radio" class="text-left">
              <b-form-radio-group
                  id="radio-slots"
                  v-model="selected"
                  :options="options"
                  name="radio-options-slots"
              >
              </b-form-radio-group>
            </div>

            <b-card-footer id="searchbar" class="text-left">
              <div class="flight-search bar">
                <div class="box location from">
                  <span class="label">From</span>
                  <div class="value">Dhaka</div>
                  <span class="sub-value">
                    DAC, Hazrat Shahjalal International Airport
                  </span>
                </div>
                <div class="box location to has-swapper">
                  <span class="swapper"></span><span class="label">To</span>
                  <div class="value">
                    Cox's Bazar
                  </div>
                  <span class="sub-value">
                    CXB, Cox's Bazar Airport
                  </span>
                </div>
                <div class="box date depart">
                  <span class="label">Journey Date</span>
                  <div class="value">
                    30 <span>Jan'23</span>
                  </div>
                  <span class="sub-value">
                    Monday
                  </span>
                </div>
                <div class="box date return">
                  <span class="label">Return Date</span>
                  <div class="value">
                    31 <span>Jan'23</span>
                  </div>
                  <span class="sub-value">
                    Tuesday
                  </span>
                  <span class="remove-return-date"></span>
                </div>
                <div class="box traveler">
                  <span class="label">Traveler, Class</span>
                  <div class="value">1
                    Traveler
                  </div>
                  <span class="sub-value">
                    Economy
                  </span>
                </div>
              </div>
              <div class="search-btn-container">
                <button type="button" class="search-btn">
                  Search
                </button>
              </div>
            </b-card-footer>

          </b-card>
        </div>
      </div>
    </div>

    <div class="section section-basic" style="margin-top: 3.5rem;">
      <div class="container">
        <b-img style="border-radius: 15px !important;" src="https://ik.imagekit.io/w13m3d3rhif/web/campaign/season-of-travel/season-of-travel-lg.png?tr=f-auto,h-280,pr-true" fluid alt="Responsive image"></b-img>
      </div>
    </div>

    <div class="section section-basic" style="margin: 3rem 0;">
      <div class="container" id="hot_deal_slide">

        <div class="promotion-navbar">
          <h4>Hot Deals</h4>
          <div class="promotion-tab">
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

    <div class="section section-basic" style="margin: 3.2rem 0;">
      <div class="container" id="hot_deal_offer">

        <carousel
            :mouse-drag="false"
            :navigationEnabled="true"
            :paginationEnabled="false"
            :perPageCustom="[[320, 1],[1199, 2]]">
          <slide v-for="n in 8" :key="n">

            <div class="gz-promotion-content">
              <div class="content-placeholder">
                <a href="https://www.gozayaan.com/campaign/id/artisan" rel="noopener" target="_blank" class="navigation-btn brand-btn">
                  Learn More
                </a>
                <picture>
                  <source media="(max-width: 576px)" srcset="https://sgp1.digitaloceanspaces.com/gozayaan/media/campaign/img_ea144f8c-f546-4668-9712-0d152a04cf74.jpg" />
                  <img src="https://sgp1.digitaloceanspaces.com/gozayaan/media/campaign/img_003592d8-8a59-4b28-b21e-6bcfc4f17445.jpg" alt="image" />
                </picture>
              </div>
            </div>

          </slide>
        </carousel>

      </div>
    </div>

    <download-section></download-section>
  </div>
</template>
<script>
import { Parallax } from '@/components';
import DownloadSection from './components/DownloadSection';
import {Carousel, Slide} from 'vue-carousel';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    DownloadSection,
    Carousel,
    Slide
  },
  data: () => {
    return {
      selected: '',
      options: [
        { text: 'One Way', value: 'one_way' },
        { text: 'Round Way', value: 'round_way' }
      ]
    }
  }
};
</script>
<style scoped>
  .search-type{
    display: flex;
    align-items: center;
    background: #fff;
    box-shadow: 0 4px 10px rgb(0 117 255 / 9%);
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 50%;
    justify-content: space-evenly;
    padding: 0 60px;
    width: auto;
    transform: translate(-50%,calc(-50% - 5px));
  }
  .search-type span.search-type-tab {
    min-width: 120px;
    padding: 20px;
    justify-content: center;
    cursor: pointer;
    font-size: 0.88rem;
    line-height: 26px;
    font-weight: 600;
    color: #1c3c6b;
  }
  .search-type span.search-type-tab.active {
    border-bottom: 2px solid #fccd03;
  }
  .search-type span.search-type-tab img {
    filter: none;
    max-width: 24px;
    max-height: 18px;
    vertical-align: middle;
    margin-right: 8px;
  }
  .card-body {
    min-height: 200px;
    padding: 3rem;
  }
  #btn_flight_radio span {
    color: #1c3c6b;
    opacity: 1;
  }


  #searchbar .bar {
    display: flex;
  }
  #searchbar div.location {
    flex-basis: calc(25% - 10px);
    max-width: calc(25% - 10px);
    margin-right: 10px !important;
  }
  #searchbar .bar div.box {
    padding: 8px 15px;
    border-radius: 10px;
    border: 1px solid #dbdde0;
    cursor: pointer;
    position: relative;
  }
  #searchbar .bar div.box .label {
    font-size: .75rem;
    line-height: 14px;
    font-weight: 400;
    display: block;
  }
  #searchbar .box span.label {
    text-transform: uppercase;
    color: #1c3c6b;
    margin-bottom: 4px;
  }
  #searchbar .bar div.box .value {
    font-size: 1.1rem;
    line-height: 24px;
    font-weight: 700;
    color: #1c3c6b;
  }
  #searchbar .bar div.box .value+.sub-value {
    margin-top: 0;
    font-size: 11px;
  }
  #searchbar .bar div.box .value span {
    font-size: 0.85rem;
    line-height: 20px;
    font-weight: 400;
  }
  #searchbar .bar div.box .sub-value {
    line-height: 14px;
    font-weight: 400;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #searchbar .box span.sub-value {
    color: #5d6974;
  }
  #searchbar .bar div.box.has-swapper {
    padding-left: 25px;
  }
  #searchbar .bar div.box .swapper {
    position: absolute;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-image: url(http://localhost:8080/img/swap.svg);
    background-size: 40px;
    background-position: 50%;
    background-repeat: no-repeat;
    top: 50%;
    left: -5px;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }

  #searchbar div.date {
    flex-basis: 15%;
  }
  #searchbar div.date.depart {
    border-radius: 10px 0 0 10px;
  }
  #searchbar div.date {
    flex-basis: 15%;
  }
  #searchbar div.date.return {
    border-radius: 0 10px 10px 0;
    border-left: 0;
  }
  #searchbar .bar div.box .sub-value.inline-style {
    white-space: normal;
  }
  #searchbar div.traveler {
    flex-basis: calc(20% - 10px);
    margin-left: 10px;
  }

  #searchbar .search-btn-container button.search-btn {
    border: 0;
    background-color: #fccd03;
    color: #1c3c6b;
    border-radius: 10px;
    padding: 15px 50px;
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    bottom: 0;
    -webkit-transform: translate(-50%,50%);
    transform: translate(-50%,50%);
    outline: none;
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

  .fa, .fas {
    font-weight: 900;
  }

  #hot_deal_slide .VueCarousel-slide {
    margin: 1.15rem !important;
  }

  .promotion-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
  }

  .promotion-navbar h4 {
    margin: 0;
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


  .gz-promotion-content {
    border-radius: 5px;
    min-width: calc(50% - 25px);
    position: relative;
    margin-right: 15px;
  }

  .gz-promotion-content .content-placeholder {
    position: relative;
    height: 150px;
    background-size: cover;
    border-radius: 15px;
  }

  .gz-promotion-content .content-placeholder .navigation-btn {
    font-size: .8571428571rem;
    line-height: 18px;
    font-weight: 600;
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border: 0;
    box-shadow: 0 1.5px 3px 0 rgb(0 0 0 / 16%);
    border-radius: 100px;
    color: #1c3c6b;
    padding: 2px 16px;
  }

  .gz-promotion-content .content-placeholder img, .gz-promotion-content .content-placeholder picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  @media only screen and (max-width: 991px) {
    #searchbar .bar {
      flex-wrap: wrap;
    }
  }
</style>
