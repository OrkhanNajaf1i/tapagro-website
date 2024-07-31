// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  imports: {
    dirs: [
      // Scan top-level modules
      // "composables",

      // ... or scan modules nested one level deep with a specific name and file extension
      // "composables/*/index.{ts,js,mjs,mts}",

      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      socialLoginGoogleRedirectUri:
        process.env.SOCIAL_LOGIN_GOOGLE_REDIRECT_URI,
    },
  },
});
