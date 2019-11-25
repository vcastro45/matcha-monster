import Vue from 'vue'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import Vuetify from 'vuetify/lib'
import { Touch } from 'vuetify/lib/directives'
import fr from 'vuetify/src/locale/fr'

Vue.use(Vuetify, {
  directives: {
    Touch
  }
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  lang: {
    locales: { fr },
    current: 'fr'
  },
  theme: {
    themes: {
      light: {
        primary: '#ED6C6D'
      }
    }
  }
})
