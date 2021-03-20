<template>
  <div>
      <app-header></app-header>
    <div class="container mx-auto h-screen flex">
      <dash-menu></dash-menu>
      <div class="w-9/12">
        <div class="bg-gray-100 p-8">
          <h1 class="text-4xl font-semibold text-gray-800">Posts</h1>
        </div>
        <div>
          <table class="table-auto border">
            <thead>
              <tr>
                <th class="border px-4 py-2">#</th>
                <th class="border px-4 py-2">Title</th>
                <th class="border px-4 py-2">Body</th>
                <th class="border px-4 py-2">Image</th>
                <th class="border px-4 py-2">Comments</th>
                <th class="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post.id" class="border">
                <td class="text-center border">{{post.id}}</td>
                <td class="border">{{post.title}}</td>
                <td class="border">{{post.body}}</td>
                <td class="border">dummy img</td>
                <td class="border">{{post.comments_count}}</td>
                <td class="border">random action</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../partials/Header'
import DashMenu from '../partials/dashMenu'

export default {
  components: {
    AppHeader,
    DashMenu
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