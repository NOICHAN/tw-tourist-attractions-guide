<template>
<VLoading :active="isLoading"></VLoading>
<Menu ref="menuModalRef"></Menu>
<Navbar ref="navRef" @callMenuModal="showMenuModal"></Navbar>
<div class="banner d-flex flex-column justify-content-end">
  <div class="container">
    <h2 class="d-none d-md-block">景點</h2>
    <ul class="d-flex p-0 type">
      <li class="page-item">
        <a href="#" :class="{ active: currentType === 'ScenicSpot' }"
        class="page-link d-flex justify-content-center align-items-center"
        @click.prevent="toggleType('ScenicSpot')">
        <p class="m-0 text-nowrap">景點</p><span class="attractions"></span></a>
      </li>
      <li class="page-item">
        <a href="#" :class="{ active: currentType === 'Restaurant' }"
        class="page-link d-flex justify-content-center align-items-center"
        @click.prevent="toggleType('Restaurant')">
        <p class="m-0 text-nowrap">餐飲</p><span class="restaurant"></span></a>
      </li>
      <li class="page-item">
        <a href="#" :class="{ active: currentType === 'Hotel' }"
        class="page-link d-flex justify-content-center align-items-center"
        @click.prevent="toggleType('Hotel')">
        <p class="m-0 text-nowrap">旅宿</p><span class="hotel"></span></a>
      </li>
      <li class="page-item">
        <a href="#" :class="{ active: currentType === 'Activity' }"
        class="page-link d-flex justify-content-center align-items-center"
        @click.prevent="toggleType('Activity')">
        <p class="m-0 text-nowrap">活動</p><span class="activity"></span></a>
      </li>
    </ul>
    <div class="row flex-column flex-md-row g-2" ref="selectRegion">
      <div class="col col-md-5 select">
        <button type="button" class="area d-flex justify-content-start align-items-center"
        @click="showSelectRegion">
          <span class="location"></span>{{ currentCity.CityName }}
        </button>
        <ul class="selectRegion d-none d-sm-block d-sm-none">
          <li v-for="City in allCity" :key="City.CityID">
            <span class="locationBlue"></span>
            <a href="#" @click.prevent="selectCity(City)">{{ City.CityName }}</a>
          </li>
        </ul>
      </div>
      <div class="col-2 d-none d-md-block">
        <button type="button" class="d-flex searchBtn bg-danger border-0 text-white
          justify-content-center align-items-center"
          @click="searchCity()">
          <span class="search"></span><p class="m-0">搜尋</p>
        </button>
      </div>
    </div>
  </div>
</div>
<div class="content">
  <div class="contentTop d-flex align-items-center">
    <p class="mb-0 text-secondary">搜尋結果</p>
  </div>
  <router-view :sightseeingList="sightseeingList"/>
  <div class="contentFooter d-flex justify-content-center">
    <ul class="pagination d-flex">
      <li class="bg-white mr-20 border-0 page-item"
      :class="{'disabled' : currentPage <= 1}">
        <a href="#" class="page-link"
        @click="togglePage(currentPage - 1)"><span class="arrowLeft">上一頁</span></a></li>
      <li class="mr-12 page-item" :class="{'disabled' : page.page === currentPage,
      'active': page.page === currentPage}"
      v-for="page in paginatedData" :key="page">
        <a href="#" class="page-link"
        @click="togglePage(page.page)">{{ page.page }}</a></li>
      <li class="bg-danger ml-8 border-0 page-item"
      :class="{'disabled' : !isNext}">
        <a href="#" class="page-link"
        @click="togglePage(currentPage + 1)"><span class="arrowRight">下一頁</span></a></li>
    </ul>
  </div>
</div>
<Footer></Footer>
</template>

<style lang="scss" scoped>
h2 {
  color: #fff;
  font: normal normal bold 80px/106px Roboto;
  text-shadow: 0px 3px 6px #00000029;
}
a {
  text-decoration:none;
}
.page-item {
  &:last-child .page-link {
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
  }
  &:first-child .page-link {
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
  }
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
        border: none;
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
      @media(min-width: 768px) {
        width: 108px;
        height: 48px;
        p {
          letter-spacing: 0.26px;
          font: normal normal normal 16px/21px Roboto;
        }
        span {
            width: 20px;
            height: 20px;
            margin-left: 8px;
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
  letter-spacing: 0.22px;
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
  &.active {
    color: #2C2C2C;
  }
  &.active .location {
    background: url('@/assets/images/icon_location_blue.svg') 0% 0% no-repeat padding-box;
  }
  @media(min-width: 768px) {
      height: 60px;
    }
}
.select {
  position: relative;
}
.selectRegion {
  position: absolute;
  top: 110%;
  z-index: 10;
  width: 200px;
  height: 256px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
  padding: 8px 0;
  overflow: auto;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: block;
      padding: 14.5px 92px 14.5px 0;
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
.searchBtn {
  width: 160px;
  height: 60px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
  p {
    font: normal normal normal 20px/26px Roboto;
    letter-spacing: 0px;
  }
}
.search {
  display: block;
  background: url('@/assets/images/icon_search.svg') 0% 0% no-repeat padding-box;
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.banner {
  background-image: url('@/assets/images/banner.png');
  height: 400px;
  background-size: cover;
  background-position: center center;
  padding: 0 5% 3% 5%;
  @media(min-width: 768px) {
    padding: 0 13% 2% 13%;
  }
}
.content {
  background: #F1F1F1;
  padding: 52px 20px 72px 20px;
  @media(min-width: 576px) {
    padding: 52px 82px 72px 82px;
  }
  .contentTop {
    margin-bottom: 22px;
    >p {
      font: normal normal normal 20px/26px Roboto;
      letter-spacing: 0.32px;
      padding: 2px 4px;
      border-left: 4px solid #2A48FF;
    }
    .sort {
      font: normal normal normal 14px/19px Roboto;
        letter-spacing: 0.22px;
      >p {
        margin-right: 20px;
      }
      >select {
        color: #2C2C2C;
        padding: 8px 16px;
        border-radius: 5px;
      }
    }
  }
}
.mr-12 {
  margin-right: 12px;
}
.mr-20 {
  margin-right: 20px;
}
.ml-8 {
  margin-left: 8px;
}
.contentFooter {
  margin-top: 20px;
  .pagination {
    list-style: none;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      border-radius: 8px;
      background: #fff;
      font: normal normal bold 16px/21px Roboto;
      a {
        color: #2C2C2C;
      }
      &:hover,
      &.active {
        background: #2A48FF33;
        border: 1px solid #2A48FF;
        a {
          color: #2A48FF;
        }
      }
      .page-link {
        &:focus {
          background-color: transparent;
          z-index: 0;
          box-shadow: none;
        }
      };
      .arrowLeft {
        display: block;
        width: 20px;
        height: 20px;
        background: url('@/assets/images/icon_arrow_left.svg')0% 0% no-repeat padding-box;
        text-indent:101%;
        overflow:hidden;
        white-space:nowrap;
      }
      .arrowRight {
        display: block;
        width: 20px;
        height: 20px;
        background: url('@/assets/images/icon_arrow_right.svg')0% 0% no-repeat padding-box;
        text-indent:101%;
        overflow:hidden;
        white-space:nowrap;
      }
      .page-link {
        border: none;
        background: transparent;
      }
    }
  }
}

</style>

<script setup>

import Navbar from '@/components/NavbarComponent.vue';
import Menu from '@/components/MenuModal.vue';
import Footer from '@/components/FooterComponent.vue';
import errorHandler from '@/utils/errorHandler';
import getAuthorizationHeader from '@/utils/authorizationHeader';
import noImage from '@/assets/images/noImage.svg';
import {
  ref, onMounted, onUnmounted, inject, watchEffect,
} from 'vue';
import { useRouter } from 'vue-router';

const axiosInstance = inject('axiosInstance');
const swal = inject('$swal');

const selectRegion = ref(null);
const menuModalRef = ref({});
const navRef = ref(null);
const router = useRouter();
const isLoading = ref(false);
const sightseeingList = ref([]);
const displayPages = 5;
const pagesPerPage = 24;
const isNext = ref(false);
const paginatedData = ref([]);
const currentPage = ref(1);
const currentType = ref('ScenicSpot');
const currentCity = ref({ CityName: '輸入想去的地區' });
const allCity = ref([]);

const getAccessTokenByCookie = () => document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

const getScenicSpotData = async () => {
  let City = '';
  if (currentCity.value.CityID) {
    City = `/${currentCity.value.City}`;
  }
  const config = {
    params: {
      $format: 'JSON',
    },
  };
  config.params.$top = (displayPages + 1) * pagesPerPage;
  config.params.$skip = (currentPage.value - 1) * pagesPerPage;
  const { data } = await axiosInstance.get(`Tourism/${currentType.value}${City}`, config);
  if (data.length > pagesPerPage * displayPages) {
    isNext.value = true;
  } else {
    isNext.value = false;
  }
  return data;
};

const replaceDefaultImageIfImageNotExists = (scenicSpotData) => {
  const data = scenicSpotData;
  for (let i = 0; i < displayPages * pagesPerPage; i += 1) {
    if (data.length < displayPages * pagesPerPage) {
      if (data[i] === undefined) return data;
    }
    const hasPicture = Object.prototype.hasOwnProperty.call(data[i].Picture, 'PictureUrl1');
    if (!hasPicture) {
      data[i].Picture.PictureUrl1 = noImage;
    }
  }
  return data;
};

const splitPagination = (processedData) => {
  paginatedData.value = [];
  const data = processedData;
  for (let i = 0; paginatedData.value.length < displayPages; i += 1) {
    const fromNum = i * pagesPerPage;
    const toNum = (i + 1) * pagesPerPage;
    paginatedData.value[i] = {
      page: currentPage.value + i,
      data: data.slice(fromNum, toNum),
    };
    if (data.length < displayPages * pagesPerPage) {
      if (Object.values(paginatedData.value[i]).length < pagesPerPage) {
        sightseeingList.value = paginatedData.value[0].data;
        return;
      }
    }
  }
  sightseeingList.value = paginatedData.value[0].data;
};

const initial = async () => {
  const scenicSpotData = await getScenicSpotData();
  const processedData = replaceDefaultImageIfImageNotExists(scenicSpotData);
  // eslint-disable-next-line no-unused-vars
  splitPagination(processedData);
};

const getAllCity = async () => {
  const { data } = await axiosInstance.get('Basic/City');
  allCity.value = data;
};

const selectCity = (City) => {
  currentCity.value = City;
  selectRegion.value.querySelector('.selectRegion').classList.add('d-sm-none');
  selectRegion.value.querySelector('.area').classList.add('active');
};

const searchCity = () => {
  try {
    if (!currentCity.value.CityID) {
      throw new Error('noSelected');
    }
    currentPage.value = 1;
    initial();
  } catch (error) {
    errorHandler(swal.fire, error.message);
  }
};

const togglePage = (page) => {
  isLoading.value = true;
  const paginatedDataAtLastIndex = paginatedData.value.length - 1;
  if (page < paginatedData.value[0].page) {
    currentPage.value = page - paginatedDataAtLastIndex;
    initial();
  } else if (page > paginatedData.value[paginatedDataAtLastIndex].page) {
    currentPage.value = page;
    initial();
  } else {
    currentPage.value = page;
    const targetPaginatedData = paginatedData.value
      .find((item) => item.page === currentPage.value);
    sightseeingList.value = targetPaginatedData.data;
  }
  setTimeout(() => {
    isLoading.value = false;
  }, 800);
};

const toggleType = (type) => {
  currentType.value = type;
  currentPage.value = 1;
  initial();
};

const showSelectRegion = () => {
  const isNone = selectRegion.value.querySelector('.d-sm-none');
  const selectRegionContent = selectRegion.value.querySelector('.selectRegion');
  if (isNone) {
    selectRegionContent.classList.remove('d-sm-none');
  } else {
    selectRegionContent.classList.add('d-sm-none');
  }
};

const showMenuModal = () => {
  menuModalRef.value.showModal();
};

const fixNav = () => {
  if (window.scrollY > navRef.value.$el.offsetHeight + 100) {
    navRef.value.addActiveStyle();
  } else {
    navRef.value.removeActiveStyle();
  }
};

watchEffect(() => {
  router.push(`${currentType.value}`);
});

onMounted(async () => {
  try {
    isLoading.value = true;
    window.addEventListener('scroll', fixNav);
    const accessToken = getAccessTokenByCookie();
    if (accessToken === '') {
      await getAuthorizationHeader();
    }
    await getAllCity();
    await initial();
  } catch (error) {
    errorHandler(swal.fire, error.message);
  } finally {
    isLoading.value = false;
  }
});
onUnmounted(() => {
  window.removeEventListener('scroll', fixNav);
});

</script>
