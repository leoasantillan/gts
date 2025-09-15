<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <NuxtRouteAnnouncer />
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Welcome to GTS</h1>
      <p class="text-gray-600 mb-4">
        A clean Nuxt 3 application with TypeScript and Tailwind CSS.
      </p>
      <div class="flex space-x-2">
        <span class="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
          Nuxt 3
        </span>
        <span class="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
          TypeScript
        </span>
        <span class="inline-block bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">
          Tailwind CSS
        </span>
      </div>
    </div>
  </div>
</template>
