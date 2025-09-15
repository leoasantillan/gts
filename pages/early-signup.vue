<template>
  <section>
    <div class="mx-auto max-w-3xl py-12 px-4">
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Early Access Sign-Up</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Be among the first to experience our platform. Sign up for early access and get notified when we launch.
      </p>
    </div>

    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pb-16">
      <div class="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
        <div v-if="!store.isSuccess">
          <h2 class="text-xl font-semibold mb-6">Join the Early Access List</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                id="name"
                v-model="store.form.name"
                type="text"
                required
                :class="[
                  'mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
                  'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100',
                  store.errors.name 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-300 dark:border-gray-700'
                ]"
                @input="store.updateName(($event.target as HTMLInputElement).value)"
                @blur="validateName"
                placeholder="Enter your full name"
              />
              <p v-if="store.errors.name" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ store.errors.name }}
              </p>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                v-model="store.form.email"
                type="email"
                required
                :class="[
                  'mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
                  'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100',
                  store.errors.email 
                    ? 'border-red-300 dark:border-red-600' 
                    : 'border-gray-300 dark:border-gray-700'
                ]"
                @input="store.updateEmail(($event.target as HTMLInputElement).value)"
                @blur="validateEmail"
                placeholder="Enter your email address"
              />
              <p v-if="store.errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ store.errors.email }}
              </p>
            </div>

            <div class="flex items-center justify-between pt-4">
              <p class="text-sm text-gray-500 dark:text-gray-400">
                We'll only use your email to notify you about our launch.
              </p>
              <button
                type="submit"
                :disabled="!store.isFormValid || store.isLoading"
                class="ml-4 inline-flex items-center rounded-md bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
              >
                <span v-if="!store.isLoading">Join Early Access</span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing up...
                </span>
              </button>
            </div>
          </form>
        </div>

        <!-- Success State -->
        <div v-else class="text-center py-8">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
            <svg class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            You're on the list!
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for your interest, {{ store.form.name }}. We'll notify you at {{ store.form.email }} as soon as we launch.
          </p>
          <div class="space-y-3">
            <button
              @click="store.reset"
              class="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Sign up another person
            </button>
            <div>
              <NuxtLink
                to="/"
                class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 text-sm font-medium transition-colors"
              >
                ← Back to homepage
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Information -->
      <div class="mt-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-6">
        <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">What to expect</h3>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <li class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Early access to all features before public launch
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Direct feedback channel to shape the product
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            No spam - just important updates about the launch
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const store = useEarlySignupStore()

// SEO
useSeoMeta({
  title: 'Early Access Sign-Up',
  description: 'Join our early access list and be the first to experience our platform when it launches.'
})

// Form validation methods
const validateName = () => {
  if (!store.isNameValid && store.form.name.length > 0) {
    store.errors.name = 'Name is required'
  }
}

const validateEmail = () => {
  if (!store.isEmailValid && store.form.email.length > 0) {
    store.errors.email = 'Please enter a valid email address'
  }
}

// Form submission
const handleSubmit = async () => {
  try {
    await store.submitForm()
  } catch (error) {
    console.error('Form submission error:', error)
  }
}

// Reset store on page leave to ensure clean state
onUnmounted(() => {
  if (!store.isSuccess) {
    store.reset()
  }
})
</script>
