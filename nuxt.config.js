export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  router: {
    base: "/",
  },
  head: {
    title: "5A Law",
    htmlAttrs: {
      lang: "en",
    },
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript",
      },
      // {
      //   src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      //   type: "text/javascript",
      // },
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/5alaw.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Plugins to run before renderig page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxt/content",
  ],
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },

  axios: {
    baseURL: "https://5alawoffice.com/5Adb/", //'http://localhost:8080/5A/' Used as fallback if no runtime config is provided
    proxy: true, // Can be also an object with default options
  },

  proxy: {
    "/api/": {
      target: "https://5alawoffice.com/5Adb/",
      pathRewrite: { "^/api/": "" },
    },
    //http://localhost:8080/5A/ https://5alawoffice.com/5Aback/'
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
