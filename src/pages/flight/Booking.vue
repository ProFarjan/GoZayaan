<template>
  <div class="mt-25">
    <b-container>

      <b-row>
        <b-col md="8" sm="12">
          <div class="booking-header">
            <h4>Review Your Booking</h4>
            <ul>
              <li>Flight Selection</li>
              <li class="review">Booking</li>
            </ul>
          </div>
          <div class="booking-flight-info">
            <b-card v-for="n in 2" :key="n">
              <div class="p-3 m-0" :class="flight_info_coll ? 'collapsed' : ''" v-b-toggle.collapse-1>
                <h6>DAC-CXB</h6>
              </div>
              <b-collapse id="collapse-1" v-model="flight_info_coll" class="p-3 separator-collapse flight-booking-detail">
                <div class="flight-airlines-info">
                  <div class="airplane-info-wrapper">
                    <div class="airplane-info">
                      <div class="image-placeholder"><img src="https://sgp1.digitaloceanspaces.com/gz-sandbox/carrier/logo/dfcbe726-30f3-478a-a062-731fdd91d0ee.png" /></div>
                      <div class="airplane-info-text">
                        <span class="airplane-name">
                            NOVOAIR
                        </span>
                        <span class="airplane-model">VQ 921 | ATR725 </span>
                      </div>
                    </div>
                    <div class="airplane-amenities">
                      <span class="flight-type">(Economy)</span>
                      <div class="amenity-icons"></div>
                    </div>
                  </div>
                  <div class="flight-time detail-time">
                    <div class="start-time">
                      <span class="time-text">
                          07:45
                      </span>
                      <span class="day-text">
                          Sun, 05 Feb, 2023
                      </span>
                      <span class="destination-text">DAC </span>
                    </div>
                    <div class="stops-info">
                      <div class="stop-names"><span data-v-0a21138e="">.</span></div>
                      <div class="arrow-pointer"></div>
                      <div class="stop-names"><span class="duration-text">1h 5m</span></div>
                    </div>
                    <div class="end-time">
                      <span class="time-text">
                          08:50
                      </span>
                      <span class="day-text">
                          Sun, 05 Feb, 2023
                      </span>
                      <span class="destination-text">CXB</span>
                    </div>
                  </div>
                </div>

              </b-collapse>
            </b-card>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>

    </b-container>
    <download-section></download-section>
  </div>
</template>

<script>
import DownloadSection from "@/pages/components/DownloadSection.vue";

export default {
  name: "Booking",
  components: {
    DownloadSection
  },
  data: () => {
    return {
      flight_info_coll: true,
      flight_details_coll: true
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 4px;
  margin-top: 1rem;
}
.separator-collapse {
  border-top: 1px solid #bcc9dc;
}
.card-body {
  padding: 0rem;
}
.mt-25 {
  margin-top: 12vh !important
}
.booking-flight-info h6 {
  font-size: 1rem;
  line-height: 22px;
  font-weight: 600;
  color: #1c3c6b;
  margin: 0;
}
.booking-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.booking-header h4 {
  font-size: 1.4rem;
  line-height: 24px;
  font-weight: 600;
  color: #1c3c6b;
  margin: 0;
}
.booking-header ul {
  list-style: none;
  margin: 0;
}
.booking-header ul li {
  display: inline-block;
  padding: 0 12px;
  color: #1c3c6b;
}
.booking-header ul li:not(:last-child):after {
  border: solid #1c3c6b;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 8px;
  content: "";
  transform: rotate(-45deg);
}
.booking-header ul li.review {
  font-weight: 700;
}
.flight-booking-detail {

}
.flight-booking-detail .flight-airlines-info .airplane-info-wrapper, .flight-detail-section .flight-airlines-info .airplane-info-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 0;
}
.airplane-info .image-placeholder {
  width: 50px;
  height: 50px;
  margin-right: 12px;
  display: inline-block;
}
.airplane-info .image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.airplane-info .airplane-info-text{
  display: inline-block;
  margin-left: 15px;
}
.airplane-info .airplane-info-text span {
  font-size: 1rem;
  line-height: 22px;
  font-weight: 400;
}
.airplane-info .airplane-info-text span.airplane-name {
  color: #1c3c6b;
}
.airplane-info .airplane-info-text span.airplane-model {
  color: #5d6974;
  display: block;
}
.flight-booking-detail .flight-airlines-info .airplane-info-wrapper .airplane-amenities, .flight-detail-section .flight-airlines-info .airplane-info-wrapper .airplane-amenities {
  color: #5d6974;
}
.flight-time {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  border-top: 1px solid #bcc9dc;
  padding-top: 12px;
}
.detail-accordion .flight-booking-detail .flight-airlines-info .detail-time, .detail-accordion .flight-detail-section .flight-airlines-info .detail-time{
  justify-content: space-between;
  margin-top: 12px;
  border-top: 1px solid #bcc9dc;
  padding-top: 12px;
}
.flight-time .start-time {
  flex-basis: 30%;
  text-align: left;
}
.flight-time .end-time .time-text, .flight-time .start-time .time-text {
  color: #1c3c6b;
  font-size: 1.2857142857rem;
  line-height: 22px;
  font-weight: 600;
}
.flight-time .end-time .day-text, .flight-time .end-time .destination-text, .flight-time .start-time .day-text, .flight-time .start-time .destination-text {
  display: block;
  color: #5d6974;
  font-size: 1rem;
  line-height: 22px;
  font-weight: 400;
}
.flight-time .stops-info .stop-names, .flight-time .stops-info .stop-numbers{
  color: #728db6;
  font-size: .8571428571rem;
  line-height: 14px;
  font-weight: 400;
  text-align: center;
}
.flight-time .stops-info .arrow-pointer {
  background-color: #728db6;
  height: 2px;
  width: 100px;
  position: relative;
  margin: 0 18px;
  display: inline-block;
}
.flight-time .stops-info .arrow-pointer:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 8px 0 0;
  border-color: #728db6 transparent transparent transparent;
  right: -2px;
  top: -6px;
  transform: scaleY(-1);
}
.flight-time .end-time{
  text-align: right;
  flex-basis: 30%;
}
</style>