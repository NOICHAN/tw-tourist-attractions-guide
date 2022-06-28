<template>
<nav class="nav position-fixed w-100" ref="nav">
  <div class="container d-flex justify-content-between align-items-center mb-2">
    <h1 class="logo mb-0"><a class="navbar-brand me-0" href="#">Logo</a>
    </h1>
    <a href="#" class="favorite bg-white d-flex justify-content-center align-items-center">
        <span></span>我的最愛
    </a>
  </div>
  <div class="container d-sm-none d-none">
      <div class="row flex-nowrap">
          <div class="col">
            <button type="button" class="area d-flex justify-content-start  align-items-center"
            @click="callMenuModal">
                <span class="location"></span>輸入想去的地區
            </button>
        </div>
      </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
    .logo a {
        display: block;
        text-indent:101%;
        overflow:hidden;
        white-space:nowrap;
        background: url('@/assets/images/icon_logo.svg') 0% 0% no-repeat padding-box;
        height: 28px;
        width: 104px;
    }
    .nav {
        padding: 10px;
        z-index: 10;
        &.active {
            background: #fff;
            .logo a {
                background: url('@/assets/images/icon_logo_blue.svg') 0% 0% no-repeat padding-box;
            }
        }
    }
    .favorite {
        text-decoration:none;
        width: 109px;
        height: 35px;
        color: #959595;
        box-shadow: 0px 3px 6px #0000001F;
        border-radius: 6px;
        letter-spacing: 0.17px;
        font: normal normal normal 14px/19px Roboto;
        span {
            display: block;
            background: url('@/assets/images/icon_like.svg') 0% 0% no-repeat padding-box;
            width: 20px;
            height: 20px;
        }
        &:hover {
            border: 1px solid #B72323;
            color: #B72323;
            span {
                background: url('@/assets/images/icon_like_red.svg') 0% 0% no-repeat padding-box
            }
        }
    }
input[type="search"],
 .area {
  display: block;
  width: 100%;
  height: 48px;
  color: #959595;
  box-shadow: 0px 3px 6px #00000029;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 8px;
  border: none;
  padding: 20px;
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0.22px;
  .location {
    display: block;
    background: url('@/assets/images/icon_location.svg') 0% 0% no-repeat padding-box;
    width: 24px;
    height: 24px;
  }
}
</style>

<script setup>
/* global defineEmits */
/* global defineExpose */
import { ref } from 'vue';

const nav = ref(null);
const addActiveStyle = () => {
  nav.value.classList.add('active');
  nav.value.querySelector('.d-sm-none').classList.remove('d-none');
};
const removeActiveStyle = () => {
  nav.value.classList.remove('active');
  nav.value.querySelector('.d-sm-none').classList.add('d-none');
};
const emit = defineEmits(['callMenuModal']);
const callMenuModal = () => {
  emit('callMenuModal');
};
defineExpose({
  addActiveStyle,
  removeActiveStyle,
});
</script>
