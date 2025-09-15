<template>
  <div class="min-h-screen bg-gray-50">
    <NuxtRouteAnnouncer />
    
    <!-- Navigation -->
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-gray-900">
              GTS
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-8">
            <NuxtLink 
              to="/" 
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-gray-900 font-semibold"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-gray-900 font-semibold"
            >
              About
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-gray-900 font-semibold"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
