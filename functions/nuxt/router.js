import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2e719c40 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _c5cdab4e = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _39ddbe0e = () => interopDefault(import('../pages/fashion/index.vue' /* webpackChunkName: "pages/fashion/index" */))
const _1edca922 = () => interopDefault(import('../pages/only-ferran-knows-221/index.vue' /* webpackChunkName: "pages/only-ferran-knows-221/index" */))
const _890fd6f6 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _4efbefd1 = () => interopDefault(import('../pages/video/index.vue' /* webpackChunkName: "pages/video/index" */))
const _01b66346 = () => interopDefault(import('../pages/only-ferran-knows-221/about.vue' /* webpackChunkName: "pages/only-ferran-knows-221/about" */))
const _589b1697 = () => interopDefault(import('../pages/only-ferran-knows-221/banners.vue' /* webpackChunkName: "pages/only-ferran-knows-221/banners" */))
const _72372bb0 = () => interopDefault(import('../pages/only-ferran-knows-221/create-project.vue' /* webpackChunkName: "pages/only-ferran-knows-221/create-project" */))
const _7e204ad4 = () => interopDefault(import('../pages/only-ferran-knows-221/create-video-project.vue' /* webpackChunkName: "pages/only-ferran-knows-221/create-video-project" */))
const _0466f73c = () => interopDefault(import('../pages/only-ferran-knows-221/events/index.vue' /* webpackChunkName: "pages/only-ferran-knows-221/events/index" */))
const _876ce4ea = () => interopDefault(import('../pages/only-ferran-knows-221/fashion/index.vue' /* webpackChunkName: "pages/only-ferran-knows-221/fashion/index" */))
const _2ef7678e = () => interopDefault(import('../pages/only-ferran-knows-221/login.vue' /* webpackChunkName: "pages/only-ferran-knows-221/login" */))
const _3de3e402 = () => interopDefault(import('../pages/only-ferran-knows-221/product/index.vue' /* webpackChunkName: "pages/only-ferran-knows-221/product/index" */))
const _65f0042e = () => interopDefault(import('../pages/only-ferran-knows-221/reviews/index.vue' /* webpackChunkName: "pages/only-ferran-knows-221/reviews/index" */))
const _e7c10ae4 = () => interopDefault(import('../pages/only-ferran-knows-221/video/index.vue' /* webpackChunkName: "pages/only-ferran-knows-221/video/index" */))
const _a08a525a = () => interopDefault(import('../pages/only-ferran-knows-221/reviews/create/index.vue' /* webpackChunkName: "pages/only-ferran-knows-221/reviews/create/index" */))
const _94e5cdfe = () => interopDefault(import('../pages/only-ferran-knows-221/reviews/edit/_reviewId.vue' /* webpackChunkName: "pages/only-ferran-knows-221/reviews/edit/_reviewId" */))
const _7c95f46e = () => interopDefault(import('../pages/only-ferran-knows-221/reviews/create/_slug/_projectId.vue' /* webpackChunkName: "pages/only-ferran-knows-221/reviews/create/_slug/_projectId" */))
const _02b055f4 = () => interopDefault(import('../pages/only-ferran-knows-221/events/_slug.vue' /* webpackChunkName: "pages/only-ferran-knows-221/events/_slug" */))
const _8ada277a = () => interopDefault(import('../pages/only-ferran-knows-221/fashion/_slug.vue' /* webpackChunkName: "pages/only-ferran-knows-221/fashion/_slug" */))
const _3c2d42ba = () => interopDefault(import('../pages/only-ferran-knows-221/product/_slug.vue' /* webpackChunkName: "pages/only-ferran-knows-221/product/_slug" */))
const _eb2e4d74 = () => interopDefault(import('../pages/only-ferran-knows-221/video/_slug.vue' /* webpackChunkName: "pages/only-ferran-knows-221/video/_slug" */))
const _c93aedde = () => interopDefault(import('../pages/events/_slug.vue' /* webpackChunkName: "pages/events/_slug" */))
const _38271cc6 = () => interopDefault(import('../pages/fashion/_slug.vue' /* webpackChunkName: "pages/fashion/_slug" */))
const _8c7d1986 = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _4d454e89 = () => interopDefault(import('../pages/video/_slug.vue' /* webpackChunkName: "pages/video/_slug" */))
const _7be73b62 = () => interopDefault(import('../pages/only-ferran-knows-221/_dynamic_/project-list.vue' /* webpackChunkName: "pages/only-ferran-knows-221/_dynamic_/project-list" */))
const _364b0325 = () => interopDefault(import('../pages/only-ferran-knows-221/_dynamic_/update-project.vue' /* webpackChunkName: "pages/only-ferran-knows-221/_dynamic_/update-project" */))
const _087f0ca5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2e719c40,
    name: "about"
  }, {
    path: "/events",
    component: _c5cdab4e,
    name: "events"
  }, {
    path: "/fashion",
    component: _39ddbe0e,
    name: "fashion"
  }, {
    path: "/only-ferran-knows-221",
    component: _1edca922,
    name: "only-ferran-knows-221"
  }, {
    path: "/product",
    component: _890fd6f6,
    name: "product"
  }, {
    path: "/video",
    component: _4efbefd1,
    name: "video"
  }, {
    path: "/only-ferran-knows-221/about",
    component: _01b66346,
    name: "only-ferran-knows-221-about"
  }, {
    path: "/only-ferran-knows-221/banners",
    component: _589b1697,
    name: "only-ferran-knows-221-banners"
  }, {
    path: "/only-ferran-knows-221/create-project",
    component: _72372bb0,
    name: "only-ferran-knows-221-create-project"
  }, {
    path: "/only-ferran-knows-221/create-video-project",
    component: _7e204ad4,
    name: "only-ferran-knows-221-create-video-project"
  }, {
    path: "/only-ferran-knows-221/events",
    component: _0466f73c,
    name: "only-ferran-knows-221-events"
  }, {
    path: "/only-ferran-knows-221/fashion",
    component: _876ce4ea,
    name: "only-ferran-knows-221-fashion"
  }, {
    path: "/only-ferran-knows-221/login",
    component: _2ef7678e,
    name: "only-ferran-knows-221-login"
  }, {
    path: "/only-ferran-knows-221/product",
    component: _3de3e402,
    name: "only-ferran-knows-221-product"
  }, {
    path: "/only-ferran-knows-221/reviews",
    component: _65f0042e,
    name: "only-ferran-knows-221-reviews"
  }, {
    path: "/only-ferran-knows-221/video",
    component: _e7c10ae4,
    name: "only-ferran-knows-221-video"
  }, {
    path: "/only-ferran-knows-221/reviews/create",
    component: _a08a525a,
    name: "only-ferran-knows-221-reviews-create"
  }, {
    path: "/only-ferran-knows-221/reviews/edit/:reviewId?",
    component: _94e5cdfe,
    name: "only-ferran-knows-221-reviews-edit-reviewId"
  }, {
    path: "/only-ferran-knows-221/reviews/create/:slug?/:projectId",
    component: _7c95f46e,
    name: "only-ferran-knows-221-reviews-create-slug-projectId"
  }, {
    path: "/only-ferran-knows-221/events/:slug?",
    component: _02b055f4,
    name: "only-ferran-knows-221-events-slug"
  }, {
    path: "/only-ferran-knows-221/fashion/:slug?",
    component: _8ada277a,
    name: "only-ferran-knows-221-fashion-slug"
  }, {
    path: "/only-ferran-knows-221/product/:slug?",
    component: _3c2d42ba,
    name: "only-ferran-knows-221-product-slug"
  }, {
    path: "/only-ferran-knows-221/video/:slug?",
    component: _eb2e4d74,
    name: "only-ferran-knows-221-video-slug"
  }, {
    path: "/events/:slug",
    component: _c93aedde,
    name: "events-slug"
  }, {
    path: "/fashion/:slug",
    component: _38271cc6,
    name: "fashion-slug"
  }, {
    path: "/product/:slug",
    component: _8c7d1986,
    name: "product-slug"
  }, {
    path: "/video/:slug",
    component: _4d454e89,
    name: "video-slug"
  }, {
    path: "/only-ferran-knows-221/:dynamic_?/project-list",
    component: _7be73b62,
    name: "only-ferran-knows-221-dynamic_-project-list"
  }, {
    path: "/only-ferran-knows-221/:dynamic_?/update-project",
    component: _364b0325,
    name: "only-ferran-knows-221-dynamic_-update-project"
  }, {
    path: "/",
    component: _087f0ca5,
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
