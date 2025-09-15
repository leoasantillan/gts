<template>
  <section class="relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div class="max-w-3xl">
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Welcome to GTS
        </h1>
        <p class="mt-5 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          A Nuxt 3 starter focused on TypeScript, Tailwind CSS, great DX, and performance.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-3">
          <span class="inline-flex items-center rounded-md bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 text-sm">Nuxt 3</span>
          <span class="inline-flex items-center rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 text-sm">TypeScript</span>
          <span class="inline-flex items-center rounded-md bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 text-sm">Tailwind CSS</span>
        </div>
        <div class="mt-10 flex gap-3">
          <NuxtLink to="/about" class="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
            Learn more
          </NuxtLink>
          <NuxtLink to="/contact" class="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            Get in touch
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="bg-gray-50 dark:bg-gray-800/40 border-t border-b border-gray-200/60 dark:border-gray-800/60">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
          <h2 class="text-xl font-semibold">Modern Stack</h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">Built with Nuxt 3, TypeScript, and Tailwind for rapid, type-safe development.</p>
        </div>
        <div class="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
          <h2 class="text-xl font-semibold">Best Practices</h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">Strict typing, composition API, and performance-first defaults out of the box.</p>
        </div>
        <div class="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
          <h2 class="text-xl font-semibold">Ready to Ship</h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">SEO-friendly, SSR by default, and production-ready configurations included.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Welcome to GTS',
  description: 'A clean Nuxt 3 application with TypeScript and Tailwind CSS.'
})
</script>
