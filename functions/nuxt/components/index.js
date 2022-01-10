export const AdminSidebar = () => import('../../components/Admin/Sidebar.vue' /* webpackChunkName: "components/admin-sidebar" */).then(c => wrapFunctional(c.default || c))
export const Contact = () => import('../../components/Contact/Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c))
export const Banner = () => import('../../components/Banner/Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../../components/Navbar/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const NavbarDesktop = () => import('../../components/Navbar/NavbarDesktop.vue' /* webpackChunkName: "components/navbar-desktop" */).then(c => wrapFunctional(c.default || c))
export const NavbarMobile = () => import('../../components/Navbar/NavbarMobile.vue' /* webpackChunkName: "components/navbar-mobile" */).then(c => wrapFunctional(c.default || c))
export const ProjectTag = () => import('../../components/Project/Tag.vue' /* webpackChunkName: "components/project-tag" */).then(c => wrapFunctional(c.default || c))
export const ReviewsReviewItem = () => import('../../components/Reviews/ReviewItem.vue' /* webpackChunkName: "components/reviews-review-item" */).then(c => wrapFunctional(c.default || c))
export const Slider = () => import('../../components/Slider/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))
export const ProjectPhotographyGrid = () => import('../../components/Project/Photography/Grid.vue' /* webpackChunkName: "components/project-photography-grid" */).then(c => wrapFunctional(c.default || c))
export const ProjectPhotographyModal = () => import('../../components/Project/Photography/Modal.vue' /* webpackChunkName: "components/project-photography-modal" */).then(c => wrapFunctional(c.default || c))
export const ProjectItem = () => import('../../components/Project/Photography/ProjectItem.vue' /* webpackChunkName: "components/project-item" */).then(c => wrapFunctional(c.default || c))
export const ProjectVideoProject = () => import('../../components/Project/Video/VideoProject.vue' /* webpackChunkName: "components/project-video-project" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
