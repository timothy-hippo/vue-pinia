<template>
  <div class="about">
    <input type="text" v-model="data.name">
    <button type="button" @click="showName(data.name)">顯示</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import userStore from '@/stores/user'
export default {
  computed: {
    ...mapState(userStore, ['data', 'name'])
  },
  methods: {
    ...mapActions(userStore, ['getName', 'showName'])
  },
  created () {
    this.getName()
  }
}
</script>
