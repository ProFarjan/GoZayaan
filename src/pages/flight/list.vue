<template>
  <div>
    <div class="section" style="background-color: #FFFFFF;">
      <div class="container">
        <div class="content-center margin_top_list">
          <flight-search
              :flight-search="true"
              :trips="searchFlight.trips"
              :adult="searchFlight.adult"
              :children="searchFlight.children"
              :child_age="searchFlight.child_age"
              :class_type="searchFlight.class_type"
              :infant="searchFlight.infant">
          </flight-search>
        </div>
      </div>
    </div>

    <div class="section section-basic" style="margin-top: .9rem;">
      <div class="container">
        <b-row>
          <b-col md="9" sm="12">

            <div v-if="!getSkeyleton">
              <record-skeleton v-for="n in 6" :key="n"></record-skeleton>
            </div>
            <div v-else>
              <span v-if="trips.length">
                <record v-for="(trip, n) in trips" :key="n" :trips="trip"></record>
              </span>
              <span v-else>
                No Data Found
              </span>
            </div>

          </b-col>
          <b-col md="3" sm="12">
            <b-card class="search-result" v-if="getSkeyleton">
              <h6>Search Complete</h6>
              <p style="margin: 0;">Showing {{ totalRows }} results</p>
            </b-card>
            <b-card>
              <b-list-group>
                <b-list-group-item active>Need Help?</b-list-group-item>
                <b-list-group-item :href="'tel:'+$root.$data.call_now">
                  <b-icon icon="headset" aria-hidden="true" scale="1.4" variant="warning"></b-icon> {{$root.$data.call_now}}
                </b-list-group-item>
                <b-list-group-item :href="$root.$data.messenger">
                  <b-icon icon="messenger" aria-hidden="true" scale="1.4" variant="warning"></b-icon> {{$root.$data.messenger}}
                </b-list-group-item>
              </b-list-group>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>

    <download-section></download-section>

  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import FlightSearch from "@/components/FlightSearch.vue";
import DownloadSection from "@/pages/components/DownloadSection.vue";
import Record from "@/pages/flight/record.vue";
import RecordSkeleton from "@/pages/flight/recordSkeleton.vue";
export default {
  name: 'list',
  bodyClass: 'landing-page',
  components: {
    RecordSkeleton,
    Record,
    DownloadSection,
    FlightSearch,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      totalRows: 0,
      currentPage: 1,
      stop_skeleton: false,
      searchFlight: {
        adult: 1,
        children: 0,
        child_age: null,
        infant: 0,
        class_type: 'Economy',
        trips: null,
      },
      trips: null
    }
  },
  computed: {
    getSkeyleton () {
      return this.stop_skeleton
    }
  },
  methods: {
    stopSkeleton () {
      this.stop_skeleton = true
    }
  },
  mounted() {
    const filter = {};
    let query = this.$route.query
    if (query.hasOwnProperty('trips')) {
      try {
        this.searchFlight.trips = JSON.parse(query.trips)
        if (this.searchFlight.trips?.from) filter.journey_from = this.searchFlight.trips?.from?.id
        if (this.searchFlight.trips?.to) filter.journey_to = this.searchFlight.trips?.to?.id
      } catch (e) {}
    }
    if (query.hasOwnProperty('adult')) this.searchFlight.adult = parseInt(query.adult)
    if (query.hasOwnProperty('children')) this.searchFlight.children = parseInt(query.children)
    if (query.hasOwnProperty('child_age')) this.searchFlight.child_age = query.child_age
    if (query.hasOwnProperty('infant')) this.searchFlight.infant = parseInt(query.infant)
    if (query.hasOwnProperty('class_type')) this.searchFlight.class_type = query.class_type
    this.axios.get('trip-search', {
      params: {
        status: 1,
        ...filter
      }
    }).then(res => {
      if (res.data?.status) {
        this.totalRows = res.data?.data.length
        this.trips = res.data?.data?.trip
        setTimeout(this.stopSkeleton, 1000)
      } else {
        setTimeout(this.stopSkeleton, 3000)
      }
    }).catch(e => {
      setTimeout(this.stopSkeleton, 3000)
    })

  }
};
</script>
<style scoped>
.margin_top_list {
  margin-top: 12vh !important;
}
.card {
  border-radius: 4px !important;
}
.card-body {
  padding: 0rem;
  min-height: 50px;
}
.list-group-item.active {
  z-index: 2;
  background-image: linear-gradient(90deg,#2e538a,#057aac);
  padding: 14px 18px;
  color: #fff;
  font-size: 1.1428571429rem;
  line-height: 22px;
  font-weight: 600;
}
.b-icon.bi {
  margin-right: 10px;
}
.search-result {
  padding: 15px;
}
.search-result h6 {
  color: #1c3c6b;
  font-weight: 600;
  font-size: 14px;
}
.search-result p {
  color: #5d6974;
  font-size: 13px;
}
</style>
