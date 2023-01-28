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

.card {
  border-radius: 0.1rem !important;
  margin-bottom: 0px !important;
}
.card-body {
  padding: 0 !important;
}
.active {
  display: block;
}
</style>