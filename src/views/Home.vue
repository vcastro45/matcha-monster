<template>
  <v-container class="home">
    <v-row no-gutters justify="center">
      <v-col cols="12" v-if="!loading">
        <monster-card :monster="activeMonster" @swiped="nextMonster()" v-if="activeMonster" :key="activeMonster.name"/>
      </v-col>
      <v-col cols="auto" v-else>
        <v-progress-circular color="primary" size="50" indeterminate/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import Monster from '@/models/Monster'
import MonsterCard from '@/components/MonsterCard.vue'

@Component({
  components: { MonsterCard }
})
export default class Home extends Vue {
  monsters: Monster[] = []
  loading: boolean = false
  activeIndex: number = 0

  get activeMonster (): Monster | null {
    if (this.monsters.length > 0) {
      return this.monsters[this.activeIndex % this.monsters.length]
    }
    return null
  }

  async created () {
    this.monsters = await this.getMonsters()
  }

  async getMonsters () {
    this.loading = true
    let monsters = []

    try {
      const response = await axios.get('http://my-json-server.typicode.com/vcastro45/fake-db/monster')
      monsters = response.data
    } finally {
      this.loading = false
    }
    return monsters
  }

  nextMonster () {
    setTimeout(() => {
      this.activeIndex++
    }, 600)
  }
}
</script>
