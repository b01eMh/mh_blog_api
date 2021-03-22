<template>
  <div>
    <app-header></app-header>
    <main class="min-h-screen flex flex-col">
      <div class="container mx-auto flex flex-col space-x-2 my-4">
	      <div class="flex">
          <div class="flex-auto border shadow-md pb-4">
            <img src="http://placehold.it/750x300" alt="Post image" />
            <h1 class="text-3xl font-semibold my-4 pl-4">{{ post.title }}</h1>
            <p class="pl-4">{{ post.body }}</p>
          </div>
          <div class="w-2/12 ml-4 flex flex-col">
            <button @click="postDelete" class="bg-red-400 text-white hover:bg-red-700 py-4 px-8 rounded-md">Delete</button>
            <button @click="showForm = !showForm" class="bg-blue-400 text-white hover:bg-blue-700 py-4 px-8 mt-6 rounded-md">Edit</button>
            <button @click="showCommentForm = !showCommentForm" class="bg-purple-400 text-white hover:bg-purple-700 py-4 px-8 mt-6 rounded-md">Add Comment</button>
          </div>
	      </div>
        <edit-form v-if="showForm" :post="post" @cancel-form="showForm = false" @post-edited="fetchPost"></edit-form>
        <div v-if="showCommentForm">
          <add-comment-form :post="post" @cancel-comment-form="showCommentForm = false" @comment-added="fetchPost"></add-comment-form>
        </div>
        <div v-if="post.comments != ''">
          <h1 class="text-2xl text-gray-700 font-semibold mt-4">Comments</h1>
          <comment-item v-for="comment in post.comments" :key="comment.id" :comment="comment"></comment-item>
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../partials/Header'
import AppFooter from '../partials/Footer'
import CommentItem from './CommentItem'
import EditForm from './EditForm'
import AddCommentForm from '../comments/AddCommentForm'

export default {
  props: ['id'],
  components: {
    AppHeader,
    AppFooter,
    CommentItem,
    EditForm,
    AddCommentForm
  },
  data(){
    return{
      post: [],
      showForm : false,
      showCommentForm: false,
    }
  },

  methods: {
    postDelete() {
      axios.delete('/api/posts/' + this.id).then(res => this.$router.push({ name: 'DashPosts'}))
    },

    fetchPost(){
      this.showForm = false
      this.showCommentForm= false
      axios.get('/api/posts/' + this.id).then(res => this.post = res.data)
    },

  },

  mounted(){
    this.fetchPost()
  }
}
</script>