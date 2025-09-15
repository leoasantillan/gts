<template>
  <section>
    <div class="mx-auto max-w-3xl py-12 px-4">
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">About</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Learn more about this project, our mission, and the principles guiding it.
      </p>
    </div>

    <div class="border-y border-gray-200/60 dark:border-gray-800/60 bg-gray-50 dark:bg-gray-800/40">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <h2 class="text-xl font-semibold">Mission</h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            Build a solid foundation for modern web apps using Nuxt 3, TypeScript, and Tailwind CSS, prioritizing DX and performance.
          </p>

          <h2 class="mt-8 text-xl font-semibold">Principles</h2>
          <ul class="mt-3 space-y-3 text-gray-600 dark:text-gray-400 list-disc pl-5">
            <li>Type safety and clarity in code.</li>
            <li>Small, focused components following Composition API best practices.</li>
            <li>Utility-first styling with Tailwind and responsive layouts.</li>
            <li>SSR-first for SEO and fast first paint.</li>
          </ul>
        </div>

        <aside class="lg:col-span-1">
          <div class="rounded-lg border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <h3 class="text-base font-semibold">Tech Stack</h3>
            <dl class="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div class="flex items-center justify-between">
                <dt>Framework</dt>
                <dd class="font-medium">Nuxt 3</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt>Language</dt>
                <dd class="font-medium">TypeScript</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt>Styling</dt>
                <dd class="font-medium">Tailwind CSS</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt>Rendering</dt>
                <dd class="font-medium">SSR by default</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  </section>
  
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description: 'Learn more about this project, our mission, and the principles guiding it.'
})
</script>

