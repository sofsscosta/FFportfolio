import { getUserFromCookie } from '~/utils/firebaseUtils'

export default async function({ app, route, redirect, store, req }) {
  if (route.path.match(/admin/gi)) {
    if (process.server) {
      const user = getUserFromCookie(req)
      if (!user) {
        redirect('/admin/login')
      }
    } 
    else {
      var user = store.state.isLogged
      console.log('user in middleware', user)
      if (!user) {
        redirect('/admin/login')
      }
    }
  }
}
  