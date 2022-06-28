import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: 'ScenicSpot',
        component: () => import('../views/ScenicSpotList.vue'),
      },
      {
        path: 'Restaurant',
        component: () => import('../views/RestaurantList.vue'),
      },
      {
        path: 'Hotel',
        component: () => import('../views/HotelList.vue'),
      },
      {
        path: 'Activity',
        component: () => import('../views/ActivityList.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
