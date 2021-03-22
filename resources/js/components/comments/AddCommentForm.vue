<template>
  <form @submit.prevent="handleCommentSubmit">
    <div class="mt-4">
      <label for="body" class="sr-only">Body</label>
      <textarea v-model="comment.body" class="w-full focus:outline-none focus:ring-2 rounded-lg border-2" name="body" cols="20" rows="5"></textarea>
      <p v-if="errMsgComment" class="text-red-500 text-sm italic">{{ errMsgComment[0] }}</p>
    </div>
    <div class="mt-4 flex space-x-2">
      <button type="submit" class="flex-1 p-4 mb-4 bg-green-400 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2">Add</button>
      <button @click="cancelForm" class="flex-1 p-4 mb-4 bg-gray-400 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2">Cancel</button>
    </div>
</form>
</template>

<script>
export default {
  props: ['post'],

  data() {
    return {
      comment: {
        body: '',
        post_id: this.post.id
      },
      errMsgComment: null,
    }
  },

  methods: {
    async handleCommentSubmit() {
      try {
        const response = await axios.post('/api/comments', this.comment)
        if(response.status == 201){
          this.comment.body = '',
          this.errMsgComment = '',
          this.$emit('comment-added')
        }
      } catch (e) {
        this.errMsgComment = e.response.data.errors.body
      }
    },

    cancelForm(){
      this.comment.body = ''
      this.errMsgComment = '',
      this.$emit('cancel-comment-form')
    }
  },

}
</script>