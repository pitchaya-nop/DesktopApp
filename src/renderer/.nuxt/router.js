import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c788ab0 = () => interopDefault(import('../pages/pagenotfound/index.vue' /* webpackChunkName: "pages/pagenotfound/index" */))
const _88c75960 = () => interopDefault(import('../pages/realm.vue' /* webpackChunkName: "pages/realm" */))
const _b24e2c3e = () => interopDefault(import('../pages/authentication/login.vue' /* webpackChunkName: "pages/authentication/login" */))
const _4eb2e6c6 = () => interopDefault(import('../pages/authentication/login-2.vue' /* webpackChunkName: "pages/authentication/login-2" */))
const _fec38160 = () => interopDefault(import('../pages/authentication/signup.vue' /* webpackChunkName: "pages/authentication/signup" */))
const _670ec716 = () => interopDefault(import('../pages/authentication/signup-2.vue' /* webpackChunkName: "pages/authentication/signup-2" */))
const _538b9df5 = () => interopDefault(import('../pages/blogs/blog_details/index.vue' /* webpackChunkName: "pages/blogs/blog_details/index" */))
const _0aee09ce = () => interopDefault(import('../pages/blogs/blog_left-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_left-sidebar/index" */))
const _a6a1ef5a = () => interopDefault(import('../pages/blogs/blog_no-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_no-sidebar/index" */))
const _66749f1e = () => interopDefault(import('../pages/blogs/blog_right-sidebar/index.vue' /* webpackChunkName: "pages/blogs/blog_right-sidebar/index" */))
const _67e256c4 = () => interopDefault(import('../pages/bonus/about.vue' /* webpackChunkName: "pages/bonus/about" */))
const _544c4476 = () => interopDefault(import('../pages/bonus/elements.vue' /* webpackChunkName: "pages/bonus/elements" */))
const _204b39e7 = () => interopDefault(import('../pages/bonus/faq.vue' /* webpackChunkName: "pages/bonus/faq" */))
const _c597b74c = () => interopDefault(import('../pages/bonus/price.vue' /* webpackChunkName: "pages/bonus/price" */))
const _810a6fda = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3c788ab0,
    name: "pagenotfound"
  }, {
    path: "/realm",
    component: _88c75960,
    name: "realm"
  }, {
    path: "/authentication/login",
    component: _b24e2c3e,
    name: "authentication-login"
  }, {
    path: "/authentication/login-2",
    component: _4eb2e6c6,
    name: "authentication-login-2"
  }, {
    path: "/authentication/signup",
    component: _fec38160,
    name: "authentication-signup"
  }, {
    path: "/authentication/signup-2",
    component: _670ec716,
    name: "authentication-signup-2"
  }, {
    path: "/blogs/blog_details",
    component: _538b9df5,
    name: "blogs-blog_details"
  }, {
    path: "/blogs/blog_left-sidebar",
    component: _0aee09ce,
    name: "blogs-blog_left-sidebar"
  }, {
    path: "/blogs/blog_no-sidebar",
    component: _a6a1ef5a,
    name: "blogs-blog_no-sidebar"
  }, {
    path: "/blogs/blog_right-sidebar",
    component: _66749f1e,
    name: "blogs-blog_right-sidebar"
  }, {
    path: "/bonus/about",
    component: _67e256c4,
    name: "bonus-about"
  }, {
    path: "/bonus/elements",
    component: _544c4476,
    name: "bonus-elements"
  }, {
    path: "/bonus/faq",
    component: _204b39e7,
    name: "bonus-faq"
  }, {
    path: "/bonus/price",
    component: _c597b74c,
    name: "bonus-price"
  }, {
    path: "/",
    component: _810a6fda,
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
