<template>
  <div class="pt-6 w-3/12 bg-indigo-50">
    <ul class="flex-col space-y-8 mt-6 w-full text-center">
      <li class="mt-6">
        <router-link :to="{ name: 'DashPosts'}" class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Posts</router-link>
      </li>
      <li>
        <a href="#" class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">User Profile</a>
      </li>
      <li>
        <a href="#" class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Categories</a>
      </li>
      <li>
        <a href="#" class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Comments</a>
      </li>
    </ul>
  </div>
</template>