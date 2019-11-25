<template>
  <v-app id="app">
    <navigator class="shrink"/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navigator from '@/components/Navigator.vue'

@Component({
  components: { Navigator }
})
export default class App extends Vue {
}
</script>