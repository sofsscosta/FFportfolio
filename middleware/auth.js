import { getUserFromCookie } from '~/utils/firebaseUtils'

export default async function({ app, route, redirect, store, req }) {
  // CHECK HOW TO REGEX WITH VARIABLE
  if (route.path.match(/only-ferran-knows-221/gi)) {
    if (process.server) {
      const user = getUserFromCookie(req)
      if (!user) {
        redirect('/only-ferran-knows-221/login')
      }
    } 
    else {
      var user = store.state.isLogged
      if (!user) {
        redirect('/only-ferran-knows-221/login')
      }
    }
  }
}
  