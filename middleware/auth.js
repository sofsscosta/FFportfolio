export default async function({ route, redirect, store }) {
    if (route.path.match(/admin/gi)) {
      // if (localStorage.getItem('authToken'))
      // console.log()
      // console.log(localStorage.getItem('authToken'))
      // const isLogged = await isLogged()
      if (!store.state.isLogged) {
        redirect('/admin/login');
      }
    }
  
    // switch (route.path) {
    //   case '/profile':
    //     if (!store.state.account.loggedIn) {
    //       redirect('/login');
    //     }
    //     break;
    //   default:
    //     break;
    // }
  }
  