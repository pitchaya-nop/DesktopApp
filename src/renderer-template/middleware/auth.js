export default async ({ app, store, redirect, route }) => {

const token = store.getters['auth/token']
  console.log(token)
  console.log(route);
  if(!token){
    if (!route.path.includes('authentication')) {
      redirect('/authentication/login')
    }
  }else{
    if (route.path.includes('authentication')) {
      redirect('/')
    }
  }


}
