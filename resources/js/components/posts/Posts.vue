<template>
  <div>
    <app-header></app-header>
    <main class="flex flex-grow">
      <div class="container mx-auto flex space-x-2 my-4">
	      <div class="flex-col w-9/12 space-y-8">
          <div v-for="post in posts" :key="post.id" class="border shadow-md pb-4">
            <img src="http://placehold.it/750x300" alt="Post image" />
            <h1 class="text-3xl font-semibold my-4 pl-4">{{ post.title }}</h1>
            <p class="pl-4">{{ post.body }}</p>
            <a href="#" class="bg-blue-400 px-3 py-2 rounded text-white mt-4 ml-4 inline-block hover:bg-blue-600">Read
              More ...</a>
          </div>
	      </div>

        <div class="flex-col w-3/12 space-y-6">
          <div class="border rounded-md shadow-md px-2 py-4">
            <h1 class="text-2xl font-medium border-b">Categories</h1>
            <ul class="pt-4 grid grid-rows-3 grid-flow-col gap-4">
              <li>
                <a href="#" class="hover:text-gray-400">Web Design</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">Html</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">Freebies</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">JavaScript</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">Css</a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">Python</a>
              </li>
            </ul>
          </div>
          <div class="border rounded-md px-2 py-4 shadow-md">
            <h1 class="text-2xl font-medium border-b">Widget</h1>
            <p class="pt-4">Lerem ispom dummy text.Lerem ispom dummy text.Lerem ispom dummy text.</p>
          </div>
        </div>
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