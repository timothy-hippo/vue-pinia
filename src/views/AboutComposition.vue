<template>
  <div>{{name}}{{ age }}</div>
  <button type="button" @click="updateData">+</button>
  <button type="button" @click="resetData">reset</button>
</template>

<script>
import userStore from '@/stores/user'
import { storeToRefs } from 'pinia'
export default {
  setup () {
    const user = userStore()
    const { name, age } = storeToRefs(user)
    function updateData () {
      user.$patch({ name: 'hippo5', age: '25' })
    }
    function resetData () {
      user.$reset()
    }
    return {
      user,
      name,
      age,
      updateData,
      resetData
    }
  }
}
</script>
