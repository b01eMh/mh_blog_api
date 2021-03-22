<template>
  <div class="pt-6 w-3/12 bg-indigo-50">
    <ul class="flex-col space-y-8 mt-6 w-full text-center">
      <li class="mt-6">
        <router-link :to="{ name: 'DashPosts'}" class="bg-indigo-200 text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Posts</router-link>
      </li>
    </ul>
  </div>
</template>