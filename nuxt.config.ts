import Paragraph from "./components/content/Paragraph.vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/content"],
  content: {
    documentDriven: true,
    markdown:{
      anchorLinks : true,
      tags: {
        p :'Paragraph'
      }
    }
  },
  // ssr: true
  
})