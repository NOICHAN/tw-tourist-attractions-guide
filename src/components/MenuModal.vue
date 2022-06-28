<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title m-auto" id="exampleModalLabel">
            <span class="modalHeaderLogo">Logo</span>
          </h5>
          <button type="button" class="btn-close ms-0"  data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body pb-0">
          <ul class="d-flex justify-content-center p-0 type">
            <li><a href="#" class="d-flex justify-content-center align-items-center">
              <p class="m-0">景點</p><span class="attractions"></span></a>
            </li>
            <li><a href="#" class="d-flex justify-content-center align-items-center">
              <p class="m-0">餐飲</p><span class="restaurant"></span></a>
            </li>
            <li><a href="#" class="d-flex justify-content-center align-items-center">
              <p class="m-0">旅宿</p><span class="hotel"></span></a>
            </li>
            <li><a href="#" class="d-flex justify-content-center align-items-center">
              <p class="m-0">活動</p><span class="activity"></span></a>
            </li>
          </ul>
          <div class="row flex-column g-2">
            <div class="col" ref="selectRegion">
              <button type="button" class="area p-0
              d-flex justify-content-start align-items-center"
              @click="showSelectRegion">
                <span class="location"></span>
                輸入想去的地區
                <i class="bi bi-caret-down-fill ms-auto triangle"></i>
              </button>
              <ul class="selectRegion mb-0 d-block d-none">
                <li><span class="locationBlue"></span><a href="#">台北市</a></li>
                <li><span class="locationBlue"></span><a href="#">台北市</a></li>
                <li><span class="locationBlue"></span><a href="#">台北市</a></li>
                <li><span class="locationBlue"></span><a href="#">台北市</a></li>
                <li><span class="locationBlue"></span><a href="#">台北市</a></li>
                <li><span class="locationBlue"></span><a href="#">台北市</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 bg-white mt-1 text-center">
          <button type="button" class="d-flex searchBtn bg-danger border-0 text-white
          justify-content-center align-items-center">
          <span class="search"></span><p class="m-0">搜尋</p>
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .modal-content {
    background: #F1F1F1;
  }
  .modalHeaderLogo {
    display: inline-block;
    width: 100px;
    height: 27px;
    text-indent:101%;
    overflow:hidden;
    white-space:nowrap;
    background: url('@/assets/images/icon_logo_blue.svg') 0% 0% no-repeat padding-box;
    background-size: cover;
    background-position: center center;
  }
  a {
  text-decoration:none;
  }
  .type {
  list-style: none;
  li {
    margin-right: 12px;
    a {
      color: #959595;
      background: #fff;
      width: 70px;
      height: 35px;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 24px;
      p {
        letter-spacing: 0.22px;
        font: normal normal normal 14px/19px Roboto;
      }
      span {
            display: block;
            width: 14px;
            height: 14px;
            margin-left: 4px;
      }
      .attractions {
        background: transparent url('@/assets/images/icon_attractions.svg')
        0% 0% no-repeat padding-box;
        background-size: cover;
      }
      .restaurant {
        background: transparent url('@/assets/images/icon_restaurant.svg')
        0% 0% no-repeat padding-box;
        background-size: cover;
      }
      .hotel {
        background: transparent url('@/assets/images/icon_hotel.svg')
        0% 0% no-repeat padding-box;
        background-size: cover;
      }
      .activity {
        background: transparent url('@/assets/images/icon_activity.svg')
        0% 0% no-repeat padding-box;
        background-size: cover;
      }
      &:hover,
      &.active {
        color: #fff;
        background: #B72323;
        .attractions {
        background: transparent url('@/assets/images/icon_attractions_white.svg')
        0% 0% no-repeat padding-box;
        background-size: cover;
        }
      .restaurant {
        background: transparent url('@/assets/images/icon_restaurant_white.svg')
        0% 0% no-repeat padding-box;
        background-size: cover;
        }
      .hotel {
        background: transparent url('@/assets/images/icon_hotel_white.svg')
        0% 0% no-repeat padding-box;
        background-size: cover;
        }
      .activity {
        background: transparent url('@/assets/images/icon_activity_white.svg')
        0% 0% no-repeat padding-box;
        background-size: cover;
        }
      }
    }
  }
}
input[type="search"] {
  padding: 20px;
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
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0.22px;
  .location {
    display: block;
    background: url('@/assets/images/icon_location.svg') 0% 0% no-repeat padding-box;
    margin: 12px;
    width: 24px;
    height: 24px;
  }
  .triangle {
    margin: 18px 16px;
    font-size: 14px;
  }
}
.selectRegion {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
  margin-top: -5px;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    height: 48px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    a {
      display: block;
      width: 100%;
      padding: 14.5px 0 14.5px 0;
      font: normal normal normal 14px/19px Roboto;
      letter-spacing: 0.22px;
      color: #2C2C2C;
    }
    &:hover {
      background: #E4E7FF 0% 0% no-repeat padding-box;
    }
    .locationBlue {
      display: block;
      margin: 12px;
      background: url('@/assets/images/icon_location_blue.svg') 0% 0% no-repeat padding-box;
      width: 24px;
      height: 24px;
    }
  }
}
.modal-footer {
  height: 80px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px -3px 6px #00000029;
  .searchBtn {
    width: 100%;
    height: 48px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    p {
      font: normal normal normal 16px/21px Roboto;
      letter-spacing: 0px;
    }
  }
  .search {
    display: block;
    background: url('@/assets/images/icon_search.svg') 0% 0% no-repeat padding-box;
    background-position: center;
    width: 20px;
    height: 20px;
    margin-right: 6px;
}
}
</style>

<script setup>
/* global defineExpose */
import Modal from 'bootstrap/js/dist/modal';
import { ref, onMounted } from 'vue';

const selectRegion = ref(null);
const showSelectRegion = () => {
  const isNone = selectRegion.value.querySelector('.d-none');
  const selectRegionContent = selectRegion.value.querySelector('.selectRegion');
  const triangleIcon = selectRegion.value.querySelector('.triangle');
  if (isNone) {
    selectRegionContent.classList.remove('d-none');
    triangleIcon.classList.remove('bi-caret-down-fill');
    triangleIcon.classList.add('bi-caret-up-fill');
  } else {
    selectRegionContent.classList.add('d-none');
    triangleIcon.classList.remove('bi-caret-up-fill');
    triangleIcon.classList.add('bi-caret-down-fill');
  }
};
const modal = ref({});
let bsModal = null;
onMounted(() => {
  bsModal = new Modal(modal.value);
});

const showModal = () => {
  bsModal.show();
};
defineExpose({
  showModal,
});

</script>
