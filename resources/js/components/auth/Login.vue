<template>
  <div>
    <app-header></app-header>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form @submit.prevent="signIn">
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="mb-6">
              <label for="email-address" class="sr-only">Email address</label>
              <input v-model="email" name="email" type="email" autocomplete="off" class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
            <div class="mb-6">
              <label for="password" class="sr-only">Password</label>
              <input v-model="password" name="password" type="password" class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
              <p class="text-red-500 text-sm italic hidden">Please choose a password</p>
            </div>
          </div>
          <div class="mt-6">
            <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
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
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signIn(){
      axios.get('/sanctum/csrf-cookie').then(response => {
          axios.post('/api/authenticate', { email: this.email, password: this.password })
            .then(res => this.$router.push({ name: 'Dashboard' }))
            .catch(err => console.log(err))
      })
    }
  }
}
</script>