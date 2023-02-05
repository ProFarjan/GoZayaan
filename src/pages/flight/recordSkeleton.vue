<template>
  <b-card>
    <b-row>
      <b-col class="my_padding">
        <b-row class="mb-2" v-for="n in 2" :key="n">
          <b-col cols="4">
            <b-skeleton-img animation="fade" width="100%" height="50px"></b-skeleton-img>
          </b-col>
          <b-col>
            <b-skeleton animation="wave" width="100%"></b-skeleton>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="my_padding">
        <b-skeleton animation="wave" width="85%"></b-skeleton>
        <b-skeleton animation="wave" width="55%"></b-skeleton>
        <b-skeleton animation="wave" width="70%"></b-skeleton>
        <b-skeleton animation="wave" width="100%"></b-skeleton>
        <b-skeleton animation="wave" width="50%"></b-skeleton>
      </b-col>
      <b-col>
        <b-skeleton-img height="21vh"></b-skeleton-img>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "recordSkeleton"
}
</script>

<style scoped>
.card-body{
  padding: 0;
}
.my_padding{
  padding: 1rem 0 .3rem 2rem;
}
</style>