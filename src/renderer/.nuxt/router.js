import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _671a09e8 = () => interopDefault(import('../pages/pagenotfound/index.vue' /* webpackChunkName: "pages/pagenotfound/index" */))
const _7bb30518 = () => interopDefault(import('../pages/realm.vue' /* webpackChunkName: "pages/realm" */))
const _21f8b33d = () => interopDefault(import('../pages/authentication/login.vue' /* webpackChunkName: "pages/authentication/login" */))
const _fdf46dbc = () => interopDefault(import('../pages/authentication/login-2.vue' /* webpackChunkName: "pages/authentication/login-2" */))
const _6977a174 = () => interopDefault(import('../pages/authentication/signup.vue' /* webpackChunkName: "pages/authentication/signup" */))
const _36fbf4ce = () => interopDefault(import('../pages/authentication/signup-2.vue' /* webpackChunkName: "pages/authentication/signup-2" */))
const _3caf5951 = () => interopDefault(import('../pages/blogs/blog_details/index.vue' /* webpackChunkName: "pages/blogs/blog_details/index" */))
const _067ff93d = () => interopDefault(import('../pages/blogs/blog_left-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_left-sidebar/index" */))
const _61d73f77 = () => interopDefault(import('../pages/blogs/blog_no-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_no-sidebar/index" */))
const _4d45350c = () => interopDefault(import('../pages/blogs/blog_right-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_right-sidebar/index" */))
const _7931d3c2 = () => interopDefault(import('../pages/bonus/about.vue' /* webpackChunkName: "pages/bonus/about" */))
const _6fe542d2 = () => interopDefault(import('../pages/bonus/elements.vue' /* webpackChunkName: "pages/bonus/elements" */))
const _23abb20b = () => interopDefault(import('../pages/bonus/faq.vue' /* webpackChunkName: "pages/bonus/faq" */))
const _4a57237e = () => interopDefault(import('../pages/bonus/price.vue' /* webpackChunkName: "pages/bonus/price" */))
const _73f61b92 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _671a09e8,
    name: "pagenotfound"
  }, {
    path: "/realm",
    component: _7bb30518,
    name: "realm"
  }, {
    path: "/authentication/login",
    component: _21f8b33d,
    name: "authentication-login"
  }, {
    path: "/authentication/login-2",
    component: _fdf46dbc,
    name: "authentication-login-2"
  }, {
    path: "/authentication/signup",
    component: _6977a174,
    name: "authentication-signup"
  }, {
    path: "/authentication/signup-2",
    component: _36fbf4ce,
    name: "authentication-signup-2"
  }, {
    path: "/blogs/blog_details",
    component: _3caf5951,
    name: "blogs-blog_details"
  }, {
    path: "/blogs/blog_left-sidebar",
    component: _067ff93d,
    name: "blogs-blog_left-sidebar"
  }, {
    path: "/blogs/blog_no-sidebar",
    component: _61d73f77,
    name: "blogs-blog_no-sidebar"
  }, {
    path: "/blogs/blog_right-sidebar",
    component: _4d45350c,
    name: "blogs-blog_right-sidebar"
  }, {
    path: "/bonus/about",
    component: _7931d3c2,
    name: "bonus-about"
  }, {
    path: "/bonus/elements",
    component: _6fe542d2,
    name: "bonus-elements"
  }, {
    path: "/bonus/faq",
    component: _23abb20b,
    name: "bonus-faq"
  }, {
    path: "/bonus/price",
    component: _4a57237e,
    name: "bonus-price"
  }, {
    path: "/",
    component: _73f61b92,
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
