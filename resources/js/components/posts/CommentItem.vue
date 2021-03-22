<template>
  <div class="bg-indigo-50 mt-4 w-1/2 rounded-lg px-3 py-2">
    <p class="text-gray-800">{{ comment.body }}</p>
  </div>
</template>

<script>
export default {
  props: ['comment']
}
</script>