<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <header class="sticky top-0 z-40 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Global">
        <div class="flex items-center gap-3">
          <NuxtLink to="/" class="flex items-center gap-2">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold">G</span>
            <span class="text-lg font-semibold tracking-tight">GTS</span>
          </NuxtLink>
        </div>

        <div class="hidden md:flex items-center gap-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :aria-current="isActive(link.to) ? 'page' : undefined"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            :class="isActive(link.to) ? 'text-gray-900 dark:text-white' : ''"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <div class="md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle navigation menu"
            :aria-expanded="mobileOpen ? 'true' : 'false'"
            @click="mobileOpen = !mobileOpen"
          >
            <span v-if="!mobileOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </nav>

      <div v-if="mobileOpen" class="md:hidden border-t border-gray-200/60 dark:border-gray-800/60">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to + '-mobile'"
            :to="link.to"
            @click="mobileOpen = false"
            class="py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            :class="isActive(link.to) ? 'text-gray-900 dark:text-white' : ''"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-gray-200/60 dark:border-gray-800/60">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
        <p>© {{ currentYear }} GTS. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <NuxtLink to="/about" class="hover:text-gray-900 dark:hover:text-white">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-gray-900 dark:hover:text-white">Contact</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
  
</template>

<script setup lang="ts">
interface NavLink {
  label: string
  to: string
}

const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Early Signup', to: '/early-signup' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]

const route = useRoute()
const mobileOpen = ref(false)
const currentYear = new Date().getFullYear()

const isActive = (to: string): boolean => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>

