<template>
  <v-card min-height="500" class="monster-card" v-touch="{ left: () => swipeLeft(), right: () => swipeRight() }">
    <v-img height="350" :src="monster.photo" class="white--text align-end">
      <v-icon color="red" x-large class="event" :class="{ raised: liked }">
        mdi-heart
      </v-icon>
      <v-icon color="blue" x-large class="event" :class="{ raised: disliked }">
        mdi-close
      </v-icon>

      <v-card-title>
        {{ monster.name }}
      </v-card-title>
    </v-img>

    <v-card-text>
      {{ monster.bio }}
    </v-card-text>
    <v-card-actions class="d-none d-sm-flex">
      <desktop-swipper @left="swipeLeft()" @right="swipeRight()"/>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Monster from '@/models/Monster'
import DesktopSwipper from '@/components/DesktopSwipper.vue'

@Component({
  components: { DesktopSwipper }
})
export default class MonsterCard extends Vue {
  @Prop({ required: true })
  monster: Monster
  liked: boolean = false
  disliked: boolean = false

  swipeLeft () {
    this.liked = false
    this.disliked = true
    this.$emit('swiped')
  }

  swipeRight () {
    this.disliked = false
    this.liked = true
    this.$emit('swiped')
  }
}
</script>
