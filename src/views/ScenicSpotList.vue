<template>
   <div class="contentMain">
    <div class="row flex-column flex-sm-row">
      <div class="col-12 col-sm-6 col-md-4 col-xl-3 cardSpacing"
      v-for="item in sightseeingList" :key="item.ScenicSpotID">
        <div class="card flex-row flex-sm-column">
          <img :src="item.Picture.PictureUrl1"
          class="card-img-top" :alt="item.ScenicSpotName">
          <button type="button" class="favorite bg-white border-0"><span></span></button>
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title text-secondary">{{ item.ScenicSpotName }}</h5>
            <div class="d-flex">
              <span class="cardLocation"></span>
              <a href="#" class="text-info stretched-link">{{ item.City }}</a>
            </div>
            <div class="d-flex flex-wrap">
              <span class="badge me-1 mb-1" v-if="item.Class1">{{ item.Class1 }}</span>
              <span class="badge me-1 mb-1" v-if="item.Class2">{{ item.Class2 }}</span>
              <span class="badge mb-1" v-if="item.Class3">{{ item.Class3 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardSpacing{
  margin-bottom: 32px;
  .card {
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    height: 136px;
    position: relative;
    @media(min-width: 576px) {
      height: 100%;
    }
    &:hover {
      border: 2px solid #B72323;
      border-radius: 12px;
    }
    img {
      border-radius: 8px 0px 0px 8px;
      width: 30%;
      margin-right: 8px;
      object-fit: cover;
      object-position: center center;
      @media(min-width: 576px) {
      border-radius: 8px 8px 0px 0px;
      width: 100%;
      height: 190px;
      margin-right: 0px;
      }
    }
    img[src=""],img:not([src]){
      background: url('@/assets/images/noImage.svg');
      background-size: cover;
      background-position: center center;
      }
    .favorite {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      position: absolute;
      bottom: 12px;
      right: 12px;
      box-shadow: 0px 3px 6px #00000029;
      z-index: 9;
      >span {
        width: 20px;
        height: 20px;
        display: block;
        background: url('@/assets/images/icon_like_frame.svg')0% 0% no-repeat padding-box;
      }
      &:hover >span,
      &.active >span {
        background: url('@/assets/images/icon_like_red.svg')0% 0% no-repeat padding-box;
      }
      @media(min-width: 576px) {
      top: 12px;
      right: 12px;
      }
    }
    .card-body {
      h5 {
        font: normal normal normal 16px/21px Roboto;
      }
      .cardLocation {
        display: block;
        width: 20px;
        height: 20px;
        background: url('@/assets/images/icon_location_blue.svg') 0% 0% no-repeat padding-box;
        background-size: cover;
        margin-bottom: 12px;
      }
      .badge {
        display: block;
        background: #C8C8C8;
        border-radius: 4px;
        color: #707070;
        padding: 4px 8px;
      }
    }
  }
}
</style>

<script setup>
/* global defineProps */
import { ref, watchEffect } from 'vue';

const sightseeingList = ref([]);
const props = defineProps(['sightseeingList']);
watchEffect(() => {
  sightseeingList.value = props.sightseeingList;
  console.log('ScenicSpot', sightseeingList.value);
});

</script>
