<template>
  <div>
    <app-header></app-header>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register
          </h2>
        </div>
        <div v-if="errorMessages" class=" bg-white p-4 rounded-lg">
          <ul v-for="(err, index) in errorMessages" :key="index">
            <li class="text-red-500 text-sm">{{err[0]}}</li>
          </ul>
        </div>
        <form @submit.prevent="registerUser">
          <div class="rounded-md shadow-sm">
            <div class="mb-6">
              <label for="name" class="sr-only">Name</label>
              <input v-model="name" name="email" type="text" autocomplete="off" class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your name">
            </div>
            <div class="mb-6">
              <label for="email-address" class="sr-only">Email address</label>
              <input v-model="email" name="email" type="text" autocomplete="off" class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
            <div class="mt-6">
              <label for="password" class="sr-only">Password</label>
              <input v-model="password" name="password" type="password" class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
            </div>
            <div class="mt-6">
              <label for="password_confirmation" class="sr-only">Confirm Password</label>
              <input v-model="password_confirmation" name="password_confirmation" type="password" class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Repeat a Password">
            </div>
          </div>
          <div class="mt-6">
            <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../partials/Header'
import AppFooter from '../partials/Footer'

export default {
  components: {
    AppHeader,
    AppFooter
  },

  data(){
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errorMessages: [],
    }
  },

  methods: {
    async registerUser() {
      this.errorMsg = ''
      try {
        const user = await axios.post('/api/register', { name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation })
          if (user) {
            this.$router.push({ name: 'Login' })
          }
      } catch (e) {
        console.log(e.response.data.errors)
        this.errorMessages = e.response.data.errors
      }
    }
  },

}
</script>