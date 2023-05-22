import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RecordIndexView from '../views/record/RecordIndexView.vue'
import RanklistIndexView from '../views/ranklist/RanklistIndexView.vue'
import UserBotIndexView from '../views/user/bot/UserBotIndexView.vue'
import NotFoundView from '../views/error/NotFound.vue'
const routes = [
  {
    path: '/',
    name: "home",
    redirect: '/pk/',
  },
  {
    path: '/pk/',
    name: "Pk_Index",
    component: PkIndexView
  },
  {
    path: '/record/',
    name: "Record_Index",
    component: RecordIndexView
  },
  {
    path: '/ranklist/',
    name: "Ranklist_Index",
    component: RanklistIndexView

  },
  {
    path: '/user/bot/',
    name: "User_Bot_Index",
    component: UserBotIndexView
  },
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: NotFoundView
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
