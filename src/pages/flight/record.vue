<template>
  <b-card>
    <div class="flight-card">
      <div class="flight-airlines-wrapper">
        <div class="airline-info-container">
          <div class="flight-airlines-info">
            <div class="airplane-info">
              <div class="image-placeholder">
                <img src="https://sgp1.digitaloceanspaces.com/gz-sandbox/carrier/logo/dfcbe726-30f3-478a-a062-731fdd91d0ee.png" />
              </div>
              <div class="airplane-info-text">
                <span class="airplane-name">
                    NOVOAIR
                </span>
              </div>
            </div>
            <div>
              <div class="flight-time">
                <div class="start-time">
                  <span class="time-text">
                    16:30
                  </span>
                  <span class="destination-text">DAC</span>
                </div>
                <div class="stops-info">
                  <div class="stop-numbers"><span>Non-stop</span></div>
                  <div class="arrow-pointer"></div>
                </div>
                <div class="end-time">
                  <span class="time-text">
                      17:35
                  </span>
                  <span class="destination-text">CXB</span>
                </div>
              </div>
            </div>
            <div class="flight-duration-text">
              <span>
                  1h 5m
              </span>
            </div>
          </div>
          <div class="flight-airlines-info">
            <div class="airplane-info">
              <div class="image-placeholder">
                <img src="https://sgp1.digitaloceanspaces.com/gz-sandbox/carrier/logo/dfcbe726-30f3-478a-a062-731fdd91d0ee.png" />
              </div>
              <div class="airplane-info-text">
                <span class="airplane-name">
                    NOVOAIR
                </span>
              </div>
            </div>
            <div>
              <div class="flight-time">
                <div class="start-time">
                  <span class="time-text">
                      09:20
                  </span>
                  <span class="destination-text">CXB</span>
                </div>
                <div class="stops-info">
                  <div class="stop-numbers"><span>Non-stop</span></div>
                  <div class="arrow-pointer"></div>
                </div>
                <div class="end-time">
                  <span class="time-text">
                      10:25
                  </span>
                  <span class="destination-text">DAC</span>
                </div>
              </div>
            </div>
            <div class="flight-duration-text">
              <span data-v-518b83f4="">
                  1h 5m
              </span>
            </div>
          </div>
        </div>
        <div class="price-info-wrapper">
          <div class="price-texts">
            <span class="discount-info">
                DOMFLY0223
            </span>
            <div>
              <span class="actual-price">
                  BDT 9,598
              </span>
              <span class="discount-price">
                  BDT 9,028
              </span>
            </div>
          </div>
          <button type="button" class="btn selection-btn btn-block btn-secondary btn-sm btn_select">
            Select
          </button>
        </div>
      </div>
      <div class="flight-details-wrapper">
        Under Development...
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "record"
}
</script>

<style scoped>
.card-body {
  padding: 0rem;
}
.flight-card {

}
.flight-card .flight-airlines-wrapper {
  display: flex;
}
.flight-card .flight-airlines-wrapper .airline-info-container {
  flex-basis: 75%;
  padding: 18px;
}
.flight-card .flight-airlines-wrapper .airline-info-container .flight-airlines-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.airplane-info {
  display: flex;
  align-items: center;
}
.flight-card .flight-airlines-wrapper .airline-info-container .flight-airlines-info .airplane-info {
  flex-basis: 35%;
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
.airplane-info .airplane-info-text {
  display: inline-block;
}
.airplane-info .airplane-info-text span{
  font-size: 0.85rem;
  line-height: 22px;
  font-weight: 400;
}
.airplane-info .airplane-info-text span.airplane-name {
  color: #1c3c6b;
}
.flight-time {
  display: flex;
}
.flight-time .start-time{
  flex-basis: 30%;
  text-align: left;
}
.flight-time .end-time .time-text, .flight-time .start-time .time-text {
  color: #1c3c6b;
  font-size: 0.95rem;
  line-height: 22px;
  font-weight: 600;
}
.flight-time .end-time .day-text, .flight-time .end-time .destination-text, .flight-time .start-time .day-text, .flight-time .start-time .destination-text{
  display: block;
  color: #5d6974;
  font-size: 0.8rem;
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
.flight-time .stops-info .arrow-pointer{
  background-color: #728db6;
  height: 2px;
  width: 100px;
  position: relative;
  margin: 0 18px;
  display: inline-block;
}
.flight-time .stops-info .arrow-pointer:after{
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
.flight-card .flight-airlines-wrapper .airline-info-container .flight-airlines-info .flight-duration-text{
  color: #3a4856;
  font-size: 0.85rem;
  line-height: 22px;
  font-weight: 600;
  width: 15%;
  text-align: right;
}
.flight-card .flight-airlines-wrapper .price-info-wrapper{
  flex-basis: 30%;
  background-color: #ecf3fe;
  text-align: right;
  padding: 14px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.flight-card .flight-airlines-wrapper .price-info-wrapper .price-texts {
  margin-bottom: 15px;
}
.flight-card .flight-airlines-wrapper .price-info-wrapper .price-texts .discount-info {
  color: #056998;
  padding-bottom: 5px;
  display: block;
}
.flight-card .flight-airlines-wrapper .price-info-wrapper .price-texts .actual-price {
  color: #5d6974;
  font-size: 0.85rem;
  line-height: 22px;
  font-weight: 400;
  text-decoration: line-through;
}
.flight-card .flight-airlines-wrapper .price-info-wrapper .price-texts .discount-price {
  display: inline-block;
  color: #1c3c6b;
  font-size: 0.95rem;
  line-height: 22px;
  font-weight: 600;
  margin-left: 10px;
}
button.selection-btn {
  background: #fccd03 no-repeat calc(100% - 12px) 50%;
  text-align: left;
  font-size: 0.85rem;
  line-height: 16px;
  font-weight: 600;
}
.btn_select{
  padding: 5px 15px;
  color: #2d538a;
  border-radius: 2px;
}
</style>