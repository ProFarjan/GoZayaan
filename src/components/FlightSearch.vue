<template>
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
              v-model="way_selected"
              :options="way_list"
              name="radio-options-slots"
          >
          </b-form-radio-group>
        </div>

        <b-card-footer id="searchbar" class="text-left">
          <div class="flight-search bar">
            <div class="box location from" @click="open_from">
              <span class="label">From</span>
              <div class="value">{{ from_value.city }}</div>
              <span class="sub-value">
                {{ from_value.port_short_name }}, {{ from_value.port_name }}
              </span>
              <multiselect
                  ref="openfromel"
                  v-model="from_value"
                  :options="from_options"
                  :customLabel="customLabel"
                  track-by="port_short_name"
                  placeholder="Type to search"
                  @select="open_to">
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
            <div class="box location to has-swapper" @click="open_to">
              <span class="swapper"></span>
              <span class="label">To</span>
              <div class="value">
                {{ to_value.city }}
              </div>
              <span class="sub-value">
                {{ to_value.port_short_name }}, {{ to_value.port_name }}
              </span>
              <multiselect
                  ref="opentoel"
                  v-model="to_value"
                  :options="to_options"
                  :customLabel="customLabel"
                  track-by="port_short_name"
                  placeholder="Type to search">
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
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  name: "FlightSearch",
  components: {
    Multiselect
  },
  data: () => {
    return {
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
      ]
    }
  },
  methods: {
    customLabel ({ city, port_name }) {
      //return `${city} – ${port_name}`
      return ""
    },
    open_from () {
      this.$refs.openfromel.activate()
    },
    open_to () {
      this.$refs.opentoel.activate()
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

@media only screen and (max-width: 991px) {
  #searchbar .bar {
    flex-wrap: wrap;
  }
}
</style>