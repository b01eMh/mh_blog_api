<template>
  <div>
      <app-header></app-header>
    <div class="container mx-auto h-screen flex">
      <dash-menu></dash-menu>
      <div class="w-9/12">
        <div class="bg-gray-100 p-8">
          <h1 class="text-4xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        <div class="mt-4 px-6">
          <h1 class="text-lg">Hello, <span class="font-semibold text-gray-800">{{ user.name }}</span>, welcome to dashboard</h1>
          <p class="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facilis omnis! Reprehenderit tempore architecto nobis perferendis quae atque inventore fugit id vel! Accusantium, sapiente. Minus ad adipisci magni eligendi officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facilis omnis! Reprehenderit tempore architecto nobis perferendis quae atque inventore fugit id vel! Accusantium, sapiente. Minus ad adipisci magni eligendi officiis!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../partials/Header'
import DashMenu from '../partials/dashMenu'
import { mapGetters } from 'vuex'

export default {
  components:{
    AppHeader,
    DashMenu
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>