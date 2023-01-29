<template>
  <div :class="!flightSearch ? 'container' : ''">
    <div class="content-center brand">

      <b-card round>
        <div class="search-type" v-if="!flightSearch">
              <span class="search-type-tab active">
                <img src="/img/icon-Flight.svg" alt="Flight" width="25" height="18">
                Flight
              </span>
        </div>

        <div id="btn_flight_radio" class="text-left">
          <b-form-radio-group
              id="radio-slots"
              v-model="way_selected"
              :options="way_list"
              name="radio-options-slots"
          >
          </b-form-radio-group>
        </div>

        <b-card-footer id="searchbar" class="text-left">

          <div class="flight-search bar">

            <div class="box location from" :class="isActiveFrom" @click="open_from" v-click-outside="close_from">
              <span class="label">From</span>
              <div class="value">{{ from_value.city }}</div>
              <span class="sub-value">
                {{ from_value.port_short_name }}, {{ from_value.port_name }}
              </span>
              <multiselect
                  v-if="isActiveFrom"
                  ref="openfromel"
                  v-model="from_value"
                  :options="from_options"
                  :customLabel="customLabel"
                  track-by="port_short_name"
                  :hideSelected="true"
                  placeholder="Type to search"
                  @select="select_from"
                  @close="close_from">
                <template slot="option" slot-scope="props">
                  <div class="airport">
                    <div class="airport-location">
                      <div class="city-country">{{ props.option.city }}, {{ props.option.country }}</div>
                      <div class="airport-name">{{ props.option.port_name }}</div>
                    </div>
                    <div class="code">{{ props.option.port_short_name }}</div>
                  </div>
                </template>
              </multiselect>
            </div>
            <div class="box location to has-swapper" :class="isActiveTo" @click="open_to" v-click-outside="close_to">
              <span class="swapper"></span>
              <span class="label">To</span>
              <div class="value">
                {{ to_value.city }}
              </div>
              <span class="sub-value">
                {{ to_value.port_short_name }}, {{ to_value.port_name }}
              </span>
              <multiselect
                  v-if="isActiveTo"
                  ref="opentoel"
                  v-model="to_value"
                  :options="to_options"
                  :hideSelected="true"
                  :customLabel="customLabel"
                  track-by="port_short_name"
                  placeholder="Type to search"
                  @select="select_to"
                  @close="close_to">
                <template slot="option" slot-scope="props">
                  <div class="airport">
                    <div class="airport-location">
                      <div class="city-country">{{ props.option.city }}, {{ props.option.country }}</div>
                      <div class="airport-name">{{ props.option.port_name }}</div>
                    </div>
                    <div class="code">{{ props.option.port_short_name }}</div>
                  </div>
                </template>
              </multiselect>
            </div>

            <div class="box date depart" :class="isActiveJourney" @click="open_journey_to">
              <span class="label">Journey Date</span>
              <div class="value">
                {{ new Date(journey_to).getDate() }} <span>{{ new Date(journey_to).toLocaleString('en-us',{month:'short'}) }}'{{ new Date(journey_to).toLocaleString('en-us',{year:'numeric'}) }}</span>
              </div>
              <span class="sub-value">
                {{ new Date(journey_to).toLocaleString('en-us',{weekday: 'long'}) }}
              </span>
              <date-picker ref="journeyto" v-model="journey_to" format="YYYY-MM-DD" @close="close_journey_to" @input="select_journey_to" :disabled-date="back_date_disabled" :default-value="new Date()">
                <template v-slot:header>
                  <p class="text-center" style="font-weight: 600;font-size: 0.9rem;margin: 3px 0 0;">Select journey date</p>
                </template>
              </date-picker>

              <date-picker ref="journeyreturn" range v-model="return_date" @close="close_journey_return" @input="select_journey_return" :disabled-date="back_date_disabled">
                <template v-slot:header>
                  <p class="text-center" style="font-weight: 600;font-size: 0.9rem;margin: 3px 0 0;">Select return date</p>
                </template>
              </date-picker>
            </div>
            <div class="box date return" :class="isActiveJourneyReturn">
              <span @click="open_journey_return">
                <span class="label">Return Date</span>
                <div class="value" v-if="return_date.length">
                  {{ new Date(return_date[1]).getDate() }} <span>{{ new Date(return_date[1]).toLocaleString('en-us',{month:'short'}) }}'{{ new Date(return_date[1]).toLocaleString('en-us',{year:'numeric'}) }}</span>
                </div>
                <span class="sub-value" v-if="return_date.length">
                  Tuesday
                </span>
                <span class="sub-value inline-style" v-if="!return_date.length">
                  Save more on return flight
                </span>
              </span>
              <span class="remove-return-date" v-if="return_date.length" @click="reset_return_journey"></span>
            </div>

            <div class="box traveler" :class="isActivetraveler" @click="open_traveler" v-click-outside="closeGuestPicker">
              <span class="label">Traveler, Class</span>
              <div class="value">{{ total_traveler }}
                Traveler
              </div>
              <span class="sub-value">
                {{ class_type }}
              </span>
              <div id="guestPicker" v-if="isActivetraveler">
                <b-card>
                  <div class="guest_picker_list">
                    <div class="label">
                      Adults
                      <span>12 years and above</span>
                    </div>
                    <div class="input-container">
                      <button type="button" :disabled="isAdultZero" class="btn adjust btn-link" :class="isAdultZero ? 'disabled' : ''" @click="adult_fn_re">
                        <img src="/img/icon-remove-circle-blue.svg" alt="remove-icon">
                      </button>
                      <div class="adult-count">{{ adult }}</div>
                      <button type="button" class="btn adjust btn-link" style="margin-right: 0;" @click="adult_fn_add">
                        <img src="/img/icon-plus-circle-blue.svg" alt="add-icon">
                      </button>
                    </div>
                  </div>

                  <div>
                    <div class="guest_picker_list" style="border: 0px;">
                      <div class="label">
                        Children
                        <span>2-11 years</span>
                      </div>
                      <div class="input-container children">
                        <button type="button" :disabled="isChildrenZero" class="btn adjust btn-link" :class="isChildrenZero ? 'disabled' : ''" @click="children_fn_re">
                          <img src="/img/icon-remove-circle-blue.svg" alt="remove-icon">
                        </button>
                        <div class="adult-count">{{ children }}</div>
                        <button type="button" class="btn adjust btn-link" style="margin-right: 0;" @click="children_fn_add">
                          <img src="/img/icon-plus-circle-blue.svg" alt="add-icon">
                        </button>
                      </div>
                    </div>
                    <div class="children-age" v-if="children > 0">
                      <div class="child-age-wrapper" v-for="n in children" :key="n">
                        <label>Child {{ n }} Age</label>
                        <select class="brand-input small custom-select">
                          <option v-for="age in children_list" :value="age" :key="age">{{ age }}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="guest_picker_list" style="border-top: 1px solid #ecf3fe;">
                    <div class="label">
                      Infant
                      <span>Below 2 years</span>
                    </div>
                    <div class="input-container">
                      <button type="button" :disabled="isInfantZero" class="btn adjust btn-link" :class="isInfantZero ? 'disabled' : ''" @click="infant_fn_re">
                        <img src="/img/icon-remove-circle-blue.svg" alt="remove-icon">
                      </button>
                      <div class="adult-count">{{ infant }}</div>
                      <button type="button" class="btn adjust btn-link" style="margin-right: 0;" @click="infant_fn_add">
                        <img src="/img/icon-plus-circle-blue.svg" alt="add-icon">
                      </button>
                    </div>
                  </div>

                  <div class="class_type">
                    <div class="label">Class</div>
                    <b-form-radio-group
                        id="class-type"
                        v-model="class_type"
                        :options="class_list"
                        name="class_type"
                    >
                    </b-form-radio-group>
                  </div>

                  <div class="search-btn-container_g">
                    <button type="button" class="search-btn_g" @click="closeGuestPicker">
                      Done
                    </button>
                  </div>
                </b-card>
              </div>
            </div>
          </div>

          <div class="search-btn-container" v-if="!flightSearch">
            <button type="button" class="search-btn" @click="search_flight">
              Search
            </button>
          </div>
        </b-card-footer>

      </b-card>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  name: "FlightSearch",
  components: {
    Multiselect,
    DatePicker
  },
  props: {
    flightSearch: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      adult: 1,
      children: 0,
      children_age: [],
      infant: 0,
      children_list: [2,3,4,5,6,7,8,9,10,11],
      class_list: ['Economy','Business'],
      class_type: 'Economy',
      from_value: {
        city: 'Dhaka 01',
        country: 'Bangladesh',
        port_name: 'Hazrat Shahjalal International Airport',
        port_short_name: 'DAC 1'
      },
      from_options: [
        {city: 'Dhaka 01', country: 'Bangladesh', port_name: '01 Hazrat Shahjalal International Airport', port_short_name: 'DAC 1'},
        {city: 'Dhaka 02', country: 'Bangladesh', port_name: '02 Hazrat Shahjalal International Airport', port_short_name: 'DAC 2'},
        {city: 'Dhaka 03', country: 'Bangladesh', port_name: '03 Hazrat Shahjalal International Airport', port_short_name: 'DAC 3'},
        {city: 'Dhaka 03', country: 'Bangladesh', port_name: '03 Hazrat Shahjalal International Airport', port_short_name: 'DAC 3'},
        {city: 'Dhaka 03', country: 'Bangladesh', port_name: '03 Hazrat Shahjalal International Airport', port_short_name: 'DAC 3'},
        {city: 'Dhaka 03', country: 'Bangladesh', port_name: '03 Hazrat Shahjalal International Airport', port_short_name: 'DAC 3'},
        {city: 'Dhaka 04', country: 'Bangladesh', port_name: '04 Hazrat Shahjalal International Airport', port_short_name: 'DAC 4'}
      ],
      to_value: {
        city: 'Dhaka 01',
        country: 'Bangladesh',
        port_name: 'Hazrat Shahjalal International Airport',
        port_short_name: 'DAC 1'
      },
      to_options: [
        {city: 'Dhaka 01', country: 'Bangladesh', port_name: '01 Hazrat Shahjalal International Airport', port_short_name: 'DAC 1'},
        {city: 'Dhaka 02', country: 'Bangladesh', port_name: '02 Hazrat Shahjalal International Airport', port_short_name: 'DAC 2'},
        {city: 'Dhaka 03', country: 'Bangladesh', port_name: '03 Hazrat Shahjalal International Airport', port_short_name: 'DAC 3'},
        {city: 'Dhaka 04', country: 'Bangladesh', port_name: '04 Hazrat Shahjalal International Airport', port_short_name: 'DAC 4'}
      ],
      way_selected: 'one_way',
      way_list: [
        { text: 'One Way', value: 'one_way' },
        { text: 'Round Way', value: 'round_way' }
      ],
      isActiveFrom: '',
      isActiveTo: '',
      isActiveJourney: '',
      isActiveJourneyReturn: '',
      isActivetraveler: '',
      journey_to: new Date(),
      return_date: []
    }
  },
  computed: {
    journey_to_date () {
      return this.journey_to
    },
    isAdultZero () {
      return this.adult <= 0
    },
    isChildrenZero () {
      return this.children <= 0
    },
    isInfantZero () {
      return this.infant <= 0
    },
    total_traveler () {
      return parseInt(this.adult) + parseInt(this.children) + parseInt(this.infant)
    }
  },
  watch: {
    return_date () {
      if (this.return_date.length == 2) {
        this.journey_to = this.return_date[0]
      }
    }
  },
  methods: {
    search_flight () {
      this.$router.push({
        path: '/flight/list',
        params: {
          adult: this.adult,
          child: this.children,
          child_age: 0,
          infant: this.infant,
          cabin_class: this.class_type,
          trips: this.journey_to,
        }
      })
    },
    adult_fn_add () {
      this.adult++
    },
    adult_fn_re () {
      if(this.adult > 0) this.adult--
    },
    children_fn_add () {
      this.children++
    },
    children_fn_re () {
      if(this.children > 0) this.children--
    },
    infant_fn_add () {
      this.infant++
    },
    infant_fn_re () {
      if(this.infant > 0) this.infant--
    },
    customLabel ({ city, port_name }) {
      //return `${city} – ${port_name}`
      return ""
    },
    open_traveler () {
      this.isActivetraveler = "active"
    },
    closeGuestPicker () {
      if (this.isActivetraveler == 'active') {
        this.isActivetraveler = ''
      }
    },
    open_from () {
      this.isActiveFrom = "active"
      setTimeout(() => this.$refs.openfromel.activate(), 100)
    },
    select_from () {
      this.isActiveTo = "active"
      this.close_from()
      setTimeout(() => this.$refs.opentoel.activate(), 100)
    },
    open_to () {
      this.isActiveTo = "active"
      this.close_from()
      setTimeout(() => this.$refs.opentoel.activate(), 100)
    },
    select_to () {
      this.$refs.journeyto.openPopup()
      this.isActiveTo = ""
      this.close_from()
      this.isActiveJourney = "active"
    },
    close_from () {
      this.isActiveFrom = ""
    },
    close_to () {
      this.isActiveTo = ""
    },
    open_journey_to () {
      this.$refs.journeyto.openPopup()
      this.isActiveJourney = "active"
      this.close_to()
    },
    select_journey_to () {
      this.close_journey_to()
    },
    close_journey_to () {
      this.isActiveJourney = ""
    },
    back_date_disabled (date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today
    },
    open_journey_return () {
      this.$refs.journeyreturn.openPopup()
      this.isActiveJourneyReturn = "active"
      this.way_selected = 'round_way'
      this.return_date = [this.journey_to_date, new Date()]
    },
    select_journey_return () {
      this.close_journey_return()
    },
    close_journey_return () {
      this.isActiveJourneyReturn = ""
    },
    reset_return_journey () {
      this.isActiveJourneyReturn = ""
      this.return_date = []
      this.way_selected = 'one_way'
      this.$refs.journeyreturn.closePopup()
    }
  }
}
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
#searchbar .bar div.box.active {
  background-color: rgba(153,194,255,.3215686274509804);
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
#searchbar .bar div.box .sub-value.inline-style {
  white-space: normal;
  line-height: 1rem;
  font-size: 0.65rem;
  font-width: 300;
}
#searchbar .bar div.box .remove-return-date {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 0;
  transform: translate(-50%,-50%) rotate(45deg);
  background-image: url(http://localhost:8080/img/plus-circle-solid.svg);
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 50%;
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

.airport {
  display: flex;
  align-items: center;
  padding: 8px 0px;
}
.airport .airport-location {
  -ms-flex-preferred-size: 80%;
  flex-basis: 80%;
}
.airport .airport-location .city-country {
  font-size: 0.8rem;
  line-height: 18px;
  font-weight: 600;
  color: #1c3c6b;
}
.airport .airport-location .airport-name {
  font-size: .72rem;
  line-height: 14px;
  font-weight: 400;
  color: #2e538a;
}
.airport .code {
  flex-basis: 20%;
  text-align: right;
  font-size: 0.8rem;
  line-height: 18px;
  font-weight: 600;
  color: #728db6;
}

#guestPicker {
  position: absolute;
  right: 0;
  width: 150%;
  margin-top: 1rem;
  padding: 0px;
  z-index: 1002;
}
#guestPicker .guest_picker_list {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  border-bottom: 1px solid #ecf3fe;
}
#guestPicker .guest_picker_list .label {
  font-size: .86rem;
  line-height: 14px;
  font-weight: 400;
  display: block;
  color: #1c3c6b;
}
#guestPicker .guest_picker_list .label span{
  display: block;
  font-size: .7rem;
  line-height: 14px;
  font-weight: 400;
  color: #728db6 !important;
}
#guestPicker .guest_picker_list .input-container{
  display: flex;align-items: center;
}
#guestPicker .guest_picker_list .input-container .adult-count{
  color: #1c3c6b;
  min-width: 40px;
  text-align: center;
}
#guestPicker .guest_picker_list .input-container button{
  appearance: none;
  background-color: transparent;
  border: 0;
  width: auto;
  height: auto;
  padding: 0;
  outline: 0;
  margin: 0 0.2rem;
}
#guestPicker .guest_picker_list .input-container button img{
  width: 22px;
  vertical-align: middle;
  border-style: none;
}

.children-age {
  justify-content: flex-start;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 0.8rem 0.8rem;
}
.child-age-wrapper {
  width: 24%;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
}
.child-age-wrapper label {
  font-size: .76rem;
  line-height: 14px;
  font-weight: 300;
  margin-bottom: 5px;
  color: #1c3c6b;
}
.child-age-wrapper select {
  padding: 4px 8px;
  font-size: 12px;
  height: 1.8rem;
}

.class_type {
  padding: 0.8rem;
}
.class_type .label {
  font-size: .86rem;
  line-height: 14px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #1c3c6b;
}
#class-type .page-header span {
  font-size: 0.74rem;
}
#guestPicker .search-btn-container_g {
  padding: 0 0.8rem 0.8rem;
  text-align: right;
}
#guestPicker .search-btn-container_g button.search-btn_g {
  border: 0;
  background-color: #fccd03;
  color: #1c3c6b;
  border-radius: 4px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 700;
  outline: none;
}

#guestPicker .card {
  border-radius: 0.1rem !important;
  margin-bottom: 0px !important;
}
#guestPicker .card-body {
  padding: 0 !important;
}

.active {
  display: block;
}

@media only screen and (max-width: 991px) {
  #searchbar .bar {
    flex-wrap: wrap;
  }
}
</style>