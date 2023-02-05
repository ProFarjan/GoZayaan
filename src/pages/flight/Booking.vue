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
          <div class="booking-header mt-3">
            <h4>Enter Traveller Details</h4>
          </div>
          <div class="booking-traveller-details">
            <b-card>
              <b-card-header>
                <div class="p-3 m-0" :class="flight_traveller_details ? 'collapsed' : ''" v-b-toggle.collapse-3>
                  <h6>Passenger Details</h6>
                </div>
              </b-card-header>
              <b-card-body>
                <b-collapse id="collapse-3" v-model="flight_traveller_details" class="p-3 separator-collapse flight-booking-detail">
                  <b-form>
                    <b-row>
                      <b-col md="6" sm="12" class="mb-2">
                        <label for="input-first-name">Given Name / First Name:</label>
                        <b-form-input
                            id="input-first-name"
                            v-model="traveller_first_name"
                            :state="travellerFirstNameState"
                            aria-describedby="input-first-name-feedback"
                            placeholder="Enter traveller first name"
                            trim
                        ></b-form-input>
                        <b-form-invalid-feedback id="input-first-name-feedback">
                          Enter at least 3 letters
                        </b-form-invalid-feedback>
                      </b-col>
                      <b-col md="6" sm="12" class="mb-2">
                        <label for="input-last-name">Last Name:</label>
                        <b-form-input
                            id="input-last-name"
                            v-model="traveller_last_name"
                            :state="travellerLastNameState"
                            aria-describedby="input-last-name-feedback"
                            placeholder="Enter traveller last name"
                            trim
                        ></b-form-input>
                        <b-form-invalid-feedback id="input-last-name-feedback">
                          Enter at least 3 letters
                        </b-form-invalid-feedback>
                      </b-col>
                    </b-row>
                    <b-row >
                      <b-col md="6" sm="12" class="mt-2">
                        <label for="input-email-name">Email:</label>
                        <b-form-input
                            id="input-email-name"
                            v-model="traveller_email_name"
                            :state="travellerEmailState"
                            aria-describedby="input-email-feedback"
                            placeholder="Enter email"
                            trim
                        ></b-form-input>
                        <b-form-invalid-feedback id="input-email-feedback">
                          Enter at least 3 letters
                        </b-form-invalid-feedback>
                      </b-col>
                      <b-col md="6" sm="12" class="mt-2">
                        <label for="input-phone-name">Phone Number:</label>
                        <vue-phone-number-input size="sm" v-model="traveller_phone_name" />
                      </b-col>
                    </b-row>
                    <b-row class="mt-3 mb-1">
                      <b-col cols="12">
                        <b-form-checkbox
                            id="save-check"
                            v-model="save_traveller"
                            name="save_check"
                            value="saved"
                            unchecked-value="not_saved"
                        >
                          Save this to my traveler list.
                        </b-form-checkbox>
                      </b-col>
                    </b-row>
                  </b-form>
                </b-collapse>
              </b-card-body>
            </b-card>
          </div>
          <div class="booking-header mt-2 mb-3">
            <b-button block variant="warning" style="color: #1c3c6b;font-weight: 600;">Continue</b-button>
          </div>
        </b-col>
        <b-col>
          <b-card>
            <b-card-header class="p-2" :class="flight_amt_detail ? 'collapsed' : ''" v-b-toggle.collapse-2>
              <b-row class="justify-content-center">
                <b-col cols="4">
                  <b-img src="https://picsum.photos/125/125/?image=58" rounded center alt="Rounded image"></b-img>
                </b-col>
                <b-col>
                  <div class="header-summary">
                    <div class="fare-type">
                      <img src="/img/icon-Flight.svg" alt="airplane icon" />
                      <span>Flight</span>
                    </div>
                    <span class="name">
                        DAC - CXB
                    </span>
                    <span class="subtitle">One Way</span>
                  </div>
                </b-col>
              </b-row>
            </b-card-header>
            <b-card-body class="p-2">
              <b-collapse id="collapse-2" v-model="flight_amt_detail" class="separator-collapse pb-2">
                <div class="fare-info-header">
                  Fare Summary
                </div>
                <div class="fare-content">
                  <div class="fare-info-content">
                    <div class="passenger-items">
                      <span class="passenger-type">
                          Adult (1 traveler)
                      </span>
                    </div>
                    <div class="fare-item">
                      <span class="fare">Base Fare</span>
                      <span class="fare-price">
                          <span class="sm-text">BDT</span>
                          <span class="lg-text">
                              4,074
                          </span>
                      </span>
                    </div>
                    <div class="fare-item">
                      <span class="fare">Tax</span>
                      <span class="fare-price">
                          <span class="sm-text">BDT</span>
                          <span class="lg-text">
                              725
                          </span>
                      </span>
                    </div>
                  </div>
                </div>
              </b-collapse>
            </b-card-body>
            <b-card-footer style="border-top: 1px solid #ebf0f4;" class="p-2 mt-0">
              <div class="fare-content">
                <div class="fare-info-content">
                  <div class="fare-item">
                    <span class="fare">Sub-Total</span>
                    <span class="fare-price">
                          <span class="sm-text">BDT</span>
                          <span class="lg-text">
                              4,074
                          </span>
                      </span>
                  </div>
                  <div class="fare-item">
                    <span class="fare">Convenience Charge</span>
                    <span class="fare-price">
                          <span class="sm-text">BDT</span>
                          <span class="lg-text">
                               95
                          </span>
                      </span>
                  </div>
                </div>
              </div>
            </b-card-footer>
            <b-card-footer style="background-color: #ecf3fe;" >
              <div class="fare-content p-2">
                <div class="fare-info-content">
                  <div class="fare-item">
                    <span class="fare" style="color: #1c3c6b;font-weight: 600;">You Pay (for 1 Traveler)</span>
                    <span class="fare-price" style="color: #1c3c6b;">
                          <span class="sm-text">BDT</span>
                          <span class="lg-text">
                              4,074
                          </span>
                      </span>
                  </div>
                </div>
              </div>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>

    </b-container>
    <download-section></download-section>
  </div>
</template>

<script>
import DownloadSection from "@/pages/components/DownloadSection.vue";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default {
  name: "Booking",
  components: {
    DownloadSection,
    VuePhoneNumberInput
  },
  data: () => {
    return {
      mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' },
      flight_info_coll: true,
      flight_details_coll: true,
      flight_traveller_details: true,
      traveller_first_name: '',
      traveller_last_name: '',
      traveller_phone_name: '',
      traveller_email_name: '',
      save_traveller: '',
      flight_amt_detail: true
    }
  },
  computed: {
    travellerFirstNameState () {
      if (this.traveller_first_name == '') return null
      return this.traveller_first_name.length > 2 ? true : false
    },
    travellerLastNameState () {
      if (this.traveller_last_name == '') return null
      return this.traveller_last_name.length > 2 ? true : false
    },
    travellerEmailState () {
      if (this.traveller_email_name == '') return null
      return this.traveller_email_name.length > 2 ? true : false
    },
    travellerPhoneState () {
      if (this.traveller_phone_name == '') return null
      return this.traveller_phone_name.length > 2 ? true : false
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
.booking-flight-info h6, .booking-traveller-details h6 {
  font-size: 0.88rem;
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
  font-size: 1.2rem;
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
  font-size: 0.85rem;
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
  margin-top: 4px;
  border-top: 1px solid #bcc9dc;
  padding-top: 8px;
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
  font-size: 1rem;
  line-height: 22px;
  font-weight: 600;
}
.flight-time .end-time .day-text, .flight-time .end-time .destination-text, .flight-time .start-time .day-text, .flight-time .start-time .destination-text {
  display: block;
  color: #5d6974;
  font-size: 0.75rem;
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
.header-summary .fare-type {
  color: #1c3c6b;
}
.fare-type, .subtitle {
  display: block;
}
.header-summary .fare-type img{
  width: 20px;
  margin-right: 6px;
}
.header-summary .fare-type span{
  text-transform: capitalize;
}
.header-summary .name {
  font-size: 1rem;
  line-height: 24px;
  font-weight: 600;
  color: #1c3c6b;
}
.header-summary .subtitle {
  color: #4e5154;
  font-size: .75rem;
  line-height: 22px;
  font-weight: 400;
}
.fare-info-header {
  color: #1c3c6b;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  margin-top: 15px;
}
.fare-content .fare-info-content{
  width: 100%;
  flex-basis: 100%;
  color: #636363;
}
.fare-content .fare-info-content .passenger-items{

}
.fare-content .fare-info-content .passenger-items{

}
.fare-item:not(:first-of-type), .fare-item:not(:first-of-type) {
  margin-top: 5px;
}
.fare-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.fare-item .fare {
  max-width: 70%;
}
.fare-item .fare-price {
  max-width: 40%;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 600;
}
.fare-item .sm-text {
  font-size: .75rem;
  line-height: 22px;
  font-weight: 600;
}
</style>