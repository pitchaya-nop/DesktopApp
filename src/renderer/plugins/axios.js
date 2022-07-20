export default function ({ app, $axios, redirect, store }) {

  $axios.onRequest((config) => {

    config.headers['App-Version'] = `1.0.0`
    config.headers['Os-Version'] = `15.0`
    config.headers['Accept-Language'] = `en`
    config.headers['Platform'] = `web`
    config.headers['Device-Id'] = `web`

    const token = store.getters['auth/token']
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  })

    
    // config.headers['Accept-Language'] = app.i18n.locale
  

  // $axios.onResponse((res) => {
  //
  // })

  // $axios.onError((error) => {
  //   const statusCode = error.response.status
  //   if (statusCode === 401) {
  //   }
  // })
}
