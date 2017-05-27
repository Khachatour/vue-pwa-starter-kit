# Progressive Web Application using VueJS, Webpack

This is a boilerplate generated on top of the great written open source project from [Egoist](https://github.com/egoist/vuepack)

  - Offline Ready using webpack [offline-plugin](https://github.com/NekR/offline-plugin)
  - Manifest already generated using [this manifest plugin](https://github.com/easthing/pwa-manifest-webpack-plugin) I don't recommend to use this one because, I think it is not maintained now. Insted use [this one](https://github.com/kevlened/copy-webpack-plugin) and create manifest.json by your own
  - Vuex and Vue Router integrated you can do magic!

# Installation

```sh
$ git clone https://github.com/Khachatour/vue-pwa-starter-kit.git
$ npm install
# for developement server
$ npm run dev
# bundle all scripts and styles for production use
$ npm run build //for build 

# lint your code
$ npm run lint
```


# Note! Webpack's offline plugin is configured to work in development environment for educational purposes. It means caching is active, and service workers are generating.
Go to
```sh
./client/index.js
```
and change development to production!!
And you are good to go!
