<template>
  <div>
    <app-header></app-header>
    <main class="min-h-screen flex flex-grow">
      <div class="container mx-auto flex space-y-4 my-4">
	      <div v-if="posts.length > 0" class="flex-col space-y-4">
          <div v-for="post in posts" :key="post.id" class="border shadow-md pb-4">
            <img src="http://placehold.it/750x300" alt="Post image" />
            <h1 class="text-3xl font-semibold my-4 pl-4">{{ post.title }}</h1>
            <p class="pl-4">{{ post.body }}</p>
            <router-link :to="{ name: 'PostDetail' , params: { id: post.id }}" class="bg-blue-400 px-3 py-2 rounded text-white mt-4 ml-4 inline-block hover:bg-blue-600">Read
              More ...</router-link>
          </div>
	      </div>
        <div v-else class="w-full"><h1 class="text-4xl text-gray-700 font-semibold text-center">No posts, coming soon.</h1></div>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../partials/Header'
import AppFooter from '../partials/Footer'
export default {
  components: {
    AppHeader,
    AppFooter
  },

  data(){
    return{
      posts: []
    }
  },

  mounted(){
    axios.get('/api/posts')
      .then(res => {
        this.posts = res.data.data
      })
  }

}
</script>