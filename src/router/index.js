import Vue from 'vue'
import VueRouter from 'vue-router'
//以懒加载的方式引入组件
const Home =()=> import ('@/views/home/Home');
const Category = ()=>import('@/views/category/Category')
const ShopCart = ()=>import('@/views/shopcart/ShopCart')
const Profile = ()=>import('@/views/profile/Profile')
const Detail = ()=>import("@/views/detail/Detail")
Vue.use(VueRouter)

//解决多次点击相同的路由跳转时，报错的问题，如多次点击首页，会报错
//如果使用的是 this.$router.push或者router-link to，则在router下的index将异常catch住就可以了
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
//如果使用的是replace方法则需要在相应位置手动判断,


const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail
  }

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
