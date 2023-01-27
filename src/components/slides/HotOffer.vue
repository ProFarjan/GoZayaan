<template>
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
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
export default {
  name: "HotOffer",
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>
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
</style>