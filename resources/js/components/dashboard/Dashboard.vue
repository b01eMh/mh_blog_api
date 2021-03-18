<template>
  <div>
    <div>
      <header class="flex px-6 bg-blue-50 h-16">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-2xl text-blue-800">Admin User</h1>
          <ul class="flex space-x-12">
            <li><a href="#" class="text-blue-200 text-lg hover:text-blue-900">Home</a></li>
            <li><a href="#" class="text-blue-200 text-lg hover:text-blue-900">Logout</a></li>
          </ul>
        </div>
      </header>
    </div>
    <div class="container mx-auto h-screen flex">

      <div class="pt-6 w-3/12">

        <ul class="flex-col space-y-8 mt-6 w-full text-center">

          <li class="mt-6"><a href="#"
              class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Dashboard</a>
          </li>

          <li><a href="#"
              class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">User
              Profile</a></li>

          <li><a href="#"
              class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Categories</a>
          </li>

          <li><a href="#"
              class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Posts</a>
          </li>

          <li><a href="#"
              class="text-blue-800 text-lg inline-block w-3/4 rounded-md py-2 hover:bg-purple-500 hover:text-white">Comments</a>
          </li>

        </ul>

      </div>



      <div class="w-9/12">

        <div>
          <h1 class="text-4xl font-semibold text-gray-800 p-8">Dashboard</h1>
        </div>

        <div>
          main content in right side
          {{ user }}
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user: []
    }
  },
  mounted() {
    axios.get('/api/user')
      .then(res => this.user = res.data)
  }
}
</script>