<template>
  <div>
    <div>
      <app-header></app-header>
    </div>
    <div class="container mx-auto h-screen flex">
      <div class="pt-6 w-3/12">
        <ul class="flex-col space-y-8 mt-6 w-full text-center">
          <li class="mt-6">
            <a href="#" class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">User Profile</a>
          </li>
          <li>
            <a href="#" class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Categories</a>
          </li>
          <li>
            <a href="#" class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Posts</a>
          </li>
          <li>
            <a href="#" class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Comments</a>
          </li>
        </ul>
      </div>
      <div class="w-9/12">
        <div>
          <h1 class="text-4xl font-semibold text-gray-800 p-8">Dashboard</h1>
        </div>
        <div>
          main content in right side
          {{ user }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../partials/Header'
import { mapGetters } from 'vuex'

export default {
  components:{
    AppHeader
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>