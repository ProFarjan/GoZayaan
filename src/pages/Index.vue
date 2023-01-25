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
</style>
