<template>
  <div>
    <div class="page-header clear-filter">
      <parallax
        class="page-header-image"
        :style="'background-image:url('+header_bg_img+')'"
      >
      </parallax>

      <flight-search></flight-search>

    </div>

    <div class="section section-basic" style="margin-top: 3.5rem;">
      <div class="container">
        <b-img
            style="border-radius: 15px !important;"
            :src="home_page_banner_img"
            fluid
            alt="Responsive image">
        </b-img>
      </div>
    </div>

    <hot-deals></hot-deals>
    <hot-offer></hot-offer>
    <download-section></download-section>
  </div>
</template>
<script>
import { Parallax } from '@/components';
import DownloadSection from './components/DownloadSection';
import HotOffer from "@/components/slides/HotOffer.vue";
import HotDeals from "@/components/slides/HotDeals.vue";
import FlightSearch from "@/components/FlightSearch.vue";

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    FlightSearch,
    HotDeals,
    HotOffer,
    Parallax,
    DownloadSection
  },
  data: () => {
    return {
      header_bg_img: 'img/header.jpg',
      home_page_banner_img: 'https://ik.imagekit.io/w13m3d3rhif/web/campaign/season-of-travel/season-of-travel-lg.png?tr=f-auto,h-280,pr-true'
    }
  }
};
</script>

<style scoped>
  .fa, .fas {
    font-weight: 900;
  }
  .img-fluid {
    min-height: 140px !important;
  }
</style>
