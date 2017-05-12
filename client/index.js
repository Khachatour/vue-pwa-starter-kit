import './promise-polyfill'
import { app } from './app'

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'development') {
  require('./pwa')
}

app.$mount('#app')
