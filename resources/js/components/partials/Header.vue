<template>
  <header class="h-20 flex items-center bg-gray-300 text-gray-700">
    <div class="container flex justify-between items-center mx-auto">
      <h1 class="text-4xl ml-6">
        <a href="#">Test Blog</a>
      </h1>
      <ul class="flex space-x-6">
        <li>
          <router-link :to="{name: 'Dashboard'}" class="text-gray-700 text-lg hover:text-white">Dashboard</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Posts'}" class="text-gray-700 text-lg hover:text-white">Posts</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Login'}" class="text-gray-700 text-lg hover:text-white">Login</router-link>
        </li>
        <li class="pr-6">
          <a href="#" class="text-gray-700 text-lg hover:text-white">Logout</a>
        </li>
      </ul>
    </div>
  </header>
</template>