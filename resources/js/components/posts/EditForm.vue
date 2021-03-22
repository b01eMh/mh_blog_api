<template>
  <form @submit.prevent="handleSubmit" class="mt-6 ml-4">
    <div>
      <label for="title" class="sr-only">Title</label>
      <input type="text" v-model="postTitle" name="title" class="border-2 w-1/2 p-4 rounded-lg focus:outline-none focus:ring-2" placeholder="Enter title">
      <p v-if="errMsgTitle" class="text-red-500 text-sm italic">{{ errMsgTitle[0] }}</p>
    </div>
    <div class="mt-4">
      <label for="body" class="sr-only">Body</label>
      <textarea v-model="postBody" class="w-full focus:outline-none focus:ring-2 rounded-lg border-2" name="body" cols="30" rows="10"></textarea>
      <p v-if="errMsgBody" class="text-red-500 text-sm italic">{{ errMsgBody[0] }}</p>
    </div>
    <div class="mt-4 flex space-x-2">
      <button type="submit" class="flex-1 p-4 mb-4 bg-green-400 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2">Edit</button>
      <button @click="cancelForm" class="flex-1 p-4 mb-4 bg-gray-400 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['post'],
  data() {
    return{
      postTitle: this.post.title,
      postBody: this.post.body,
      errMsgTitle: null,
      errMsgBody: null
    }
  },

  methods: {

    async handleSubmit(){
      try{
        const response = await axios.put('/api/posts/' + this.post.id, { title:this.postTitle, body:this.postBody })

          if (response.status == 200) {
            this.title = ''
            this.body = ''
            this.errMsgTitle = ''
            this.errMsgBody = ''
            this.$emit('post-edited')
          }

      } catch (e) {
          this.errMsgTitle = e.response.data.errors.title

          this.errMsgBody = e.response.data.errors.body

      }

    },
    cancelForm() {
      this.title = this.post.title,
      this.body = this.post.body,
      this.$emit('cancel-form')
    }
  }

}
</script>