import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: App,
    meta: {
      title: '星辉万物'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(async (to) => {
  if (to.meta.title) { // 判断是否有标题
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.title = to.meta.title
  }
})

export default router
