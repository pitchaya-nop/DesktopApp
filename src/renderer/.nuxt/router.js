import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7467609c = () => interopDefault(import('../pages/pagenotfound/index.vue' /* webpackChunkName: "pages/pagenotfound/index" */))
const _0742930e = () => interopDefault(import('../pages/realm.vue' /* webpackChunkName: "pages/realm" */))
const _2a4f7663 = () => interopDefault(import('../pages/authentication/login.vue' /* webpackChunkName: "pages/authentication/login" */))
const _628f4a70 = () => interopDefault(import('../pages/authentication/login-2.vue' /* webpackChunkName: "pages/authentication/login-2" */))
const _6bf9430e = () => interopDefault(import('../pages/authentication/signup.vue' /* webpackChunkName: "pages/authentication/signup" */))
const _4d21a8b3 = () => interopDefault(import('../pages/authentication/signup-2.vue' /* webpackChunkName: "pages/authentication/signup-2" */))
const _2ff7cd12 = () => interopDefault(import('../pages/blogs/blog_details/index.vue' /* webpackChunkName: "pages/blogs/blog_details/index" */))
const _32fb60d7 = () => interopDefault(import('../pages/blogs/blog_left-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_left-sidebar/index" */))
const _5d5bc591 = () => interopDefault(import('../pages/blogs/blog_no-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_no-sidebar/index" */))
const _3c4ef120 = () => interopDefault(import('../pages/blogs/blog_right-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_right-sidebar/index" */))
const _2ea9cddc = () => interopDefault(import('../pages/bonus/about.vue' /* webpackChunkName: "pages/bonus/about" */))
const _24beda78 = () => interopDefault(import('../pages/bonus/elements.vue' /* webpackChunkName: "pages/bonus/elements" */))
const _a9a12ab6 = () => interopDefault(import('../pages/bonus/faq.vue' /* webpackChunkName: "pages/bonus/faq" */))
const _0061c4d0 = () => interopDefault(import('../pages/bonus/price.vue' /* webpackChunkName: "pages/bonus/price" */))
const _0b2107d1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'hash',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/pagenotfound",
    component: _7467609c,
    name: "pagenotfound"
  }, {
    path: "/realm",
    component: _0742930e,
    name: "realm"
  }, {
    path: "/authentication/login",
    component: _2a4f7663,
    name: "authentication-login"
  }, {
    path: "/authentication/login-2",
    component: _628f4a70,
    name: "authentication-login-2"
  }, {
    path: "/authentication/signup",
    component: _6bf9430e,
    name: "authentication-signup"
  }, {
    path: "/authentication/signup-2",
    component: _4d21a8b3,
    name: "authentication-signup-2"
  }, {
    path: "/blogs/blog_details",
    component: _2ff7cd12,
    name: "blogs-blog_details"
  }, {
    path: "/blogs/blog_left-sidebar",
    component: _32fb60d7,
    name: "blogs-blog_left-sidebar"
  }, {
    path: "/blogs/blog_no-sidebar",
    component: _5d5bc591,
    name: "blogs-blog_no-sidebar"
  }, {
    path: "/blogs/blog_right-sidebar",
    component: _3c4ef120,
    name: "blogs-blog_right-sidebar"
  }, {
    path: "/bonus/about",
    component: _2ea9cddc,
    name: "bonus-about"
  }, {
    path: "/bonus/elements",
    component: _24beda78,
    name: "bonus-elements"
  }, {
    path: "/bonus/faq",
    component: _a9a12ab6,
    name: "bonus-faq"
  }, {
    path: "/bonus/price",
    component: _0061c4d0,
    name: "bonus-price"
  }, {
    path: "/",
    component: _0b2107d1,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
