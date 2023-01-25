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

            <b-card-footer id="searchbar">
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
            </b-card-footer>

          </b-card>

        </div>
      </div>
    </div>

    <div class="section section-basic" style="margin-top: 4rem;">
      <div class="container">
        <b-img style="border-radius: 15px !important;" src="https://ik.imagekit.io/w13m3d3rhif/web/campaign/season-of-travel/season-of-travel-lg.png?tr=f-auto,h-280,pr-true" fluid alt="Responsive image"></b-img>
      </div>
    </div>

    <div class="section section-basic" style="margin-top: 2rem;">
      <div class="container">
        <carousel :per-page="3" :mouse-drag="false">
          <slide>
            Slide 1 Content
          </slide>
          <slide>
            Slide 2 Content
          </slide>
          <slide>
            Slide 3 Content
          </slide>
          <slide>
            Slide 4 Content
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
    font-size: .8571428571rem;
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
    font-size: 1.2857142857rem;
    line-height: 24px;
    font-weight: 700;
    color: #1c3c6b;
  }
  #searchbar .bar div.box .value+.sub-value {
    margin-top: 0;
    font-size: 12px;
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
</style>
