<template>
  <div>
      <app-header></app-header>
    <div class="container mx-auto h-screen flex">
      <dash-menu></dash-menu>
      <div class="w-9/12">
        <div class="flex justify-between bg-gray-100 p-8">
          <h1 class="text-4xl font-semibold text-gray-800">Posts</h1>
          <button @click="showForm = !showForm" class="bg-indigo-400 rounded text-white px-3 py-2 mr-2 hover:bg-indigo-700">Add New Post</button>
        </div>
        <div>
          <div v-if="showForm">
            <add-form @cancel-form="showForm = false" @post-added="fetchPosts"></add-form>
          </div>
          <table class="table-auto border w-full">
            <thead>
              <tr>
                <th class="border px-4 py-2">#</th>
                <th class="border px-4 py-2">Title</th>
                <th class="border px-4 py-2">Body</th>
                <th class="border px-4 py-2">Comments</th>
                <th class="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <post-item v-for="post in posts" :key="post.id" :post="post" @post-deleted="fetchPosts" class="border"></post-item>
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
import PostItem from './PostItem'
import AddForm from '../posts/AddForm'

export default {
  components: {
    AppHeader,
    DashMenu,
    PostItem,
    AddForm
  },

  data(){
    return{
      posts: [],
      showForm : false,
    }
  },

  methods: {
    fetchPosts(){
      this.showForm = false
      axios.get('/api/user-posts')
        .then(res => {
          this.posts = res.data.data
        })
    }
  },

  mounted(){
    this.fetchPosts()
  }

}
</script>