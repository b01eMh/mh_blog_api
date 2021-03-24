<template>
  <header class="h-20 flex items-center bg-gray-300 text-gray-700">
    <div class="container flex justify-between items-center mx-auto">
      <h1 class="text-4xl ml-6">
        <router-link :to="{ name: 'Home' }">Test Blog</router-link>
      </h1>
      <ul class="flex space-x-6">
        <li v-if="authenticated">
          <router-link :to="{name: 'Dashboard'}" class="text-gray-700 text-lg hover:text-white">Dashboard</router-link>
        </li>
        <li v-if="!authenticated">
          <router-link :to="{name: 'Login'}" class="text-gray-700 text-lg hover:text-white">Login</router-link>
        </li>
        <li v-if="!authenticated">
          <router-link :to="{name: 'Register'}" class="text-gray-700 text-lg hover:text-white">Register</router-link>
        </li>
        <li v-if="authenticated" class="pr-6">
          <a href="#" @click="signOut()" class="text-gray-700 text-lg hover:text-white">Logout</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'authenticated'
    ])
  },

  methods: {
    async signOut(){
      await this.$store.dispatch('logout')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>