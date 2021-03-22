<template>
  <tr>
    <td class="text-center border">{{post.id}}</td>
    <td class="border">{{post.title}}</td>
    <td class="border">{{post.body}}</td>
    <td class="border text-center">{{post.comments_count}}</td>
    <td class="border flex">
      <router-link :to="{ name: 'PostDetail', params: { id: post.id }}">
        <button class="bg-blue-400 rounded text-white px-3 py-2 mx-2 hover:bg-blue-700">View</button>
      </router-link>
      <button @click="postDelete(post.id)" class="bg-red-400 rounded text-white px-3 py-2 mr-2 hover:bg-red-700">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    postDelete(id) {
      axios.delete('/api/posts/' + id).then( res => {
        this.$emit('post-deleted')
      })
      
    }
  }
}
</script>