<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Welcome to GTS
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Your Nuxt 3 application is running successfully!
        </p>
        <div class="space-y-4">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              🚀 Getting Started
            </h2>
            <p class="text-gray-600">
              This is your home page. You can edit this file at <code class="bg-gray-100 px-2 py-1 rounded text-sm">pages/index.vue</code>
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              📁 Pages Router
            </h2>
            <p class="text-gray-600">
              Create new pages by adding Vue files to the <code class="bg-gray-100 px-2 py-1 rounded text-sm">pages/</code> directory
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Set page meta
useHead({
  title: 'Home - GTS',
  meta: [
    { name: 'description', content: 'Welcome to the GTS Nuxt 3 application' }
  ]
})
</script>