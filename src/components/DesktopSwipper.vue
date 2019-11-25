<template>
  <v-row align="center" class="desktop-swiper">
    <v-col cols="auto" @click="$emit('left')">
      <v-icon color="blue" x-large>mdi-close</v-icon>
    </v-col>
    <v-spacer/>
    <v-col cols="auto" @click="$emit('right')">
      <v-icon color="red" x-large>mdi-heart</v-icon>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DesktopSwipper extends Vue {

}
</script>
