import { defineStore } from 'pinia'

export default defineStore('User Store', {
  state: () => ({
    name: 'timothy',
    data: {}
  }),
  actions: {
    getName () {
      this.name = 'timothy'
    },
    showName (name) {
      console.log(name)
    }
  }
})
