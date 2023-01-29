<template>
  <div id="guestPicker">
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

      <div class="search-btn-container">
        <button type="button" class="search-btn">
          Done
        </button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "GuestPicker",
  data: () => {
    return {
      adult: 0,
      children: 0,
      children_age: [],
      infant: 0,
      children_list: [2,3,4,5,6,7,8,9,10,11],
      class_list: ['Economy','Business'],
      class_type: ''
    }
  },
  computed: {
    isAdultZero () {
      return this.adult <= 0
    },
    isChildrenZero () {
      return this.children <= 0
    },
    isInfantZero () {
      return this.infant <= 0
    }
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>

</style>