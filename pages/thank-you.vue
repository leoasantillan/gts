<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-4 -left-4 w-72 h-72 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute top-1/2 -right-8 w-64 h-64 bg-yellow-300/20 rounded-full blur-xl animate-bounce delay-1000"></div>
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>

    <!-- Confetti Animation -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="i in 50" :key="i" 
           :class="`absolute w-2 h-2 bg-${getColorByIndex(i)} rounded-full animate-confetti`"
           :style="confettiStyles[i]">
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <!-- Success Icon with Animation -->
      <div class="mb-8 relative">
        <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
          <svg class="w-16 h-16 text-green-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <!-- Animated rings around the icon -->
        <div class="absolute inset-0 w-32 h-32 border-4 border-white/30 rounded-full animate-ping"></div>
        <div class="absolute inset-0 w-32 h-32 border-2 border-white/20 rounded-full animate-ping animation-delay-300"></div>
      </div>

      <!-- Thank You Message -->
      <div class="text-center max-w-2xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Thank You!
        </h1>
        
        <div v-if="userName" class="mb-6 animate-fade-in-up animation-delay-200">
          <p class="text-2xl md:text-3xl text-white/90 font-medium">
            Welcome aboard, <span class="text-yellow-300 font-bold">{{ userName }}</span>! 🎉
          </p>
        </div>

        <div class="space-y-4 animate-fade-in-up animation-delay-400">
          <p class="text-xl md:text-2xl text-white/80">
            You're now on our exclusive early access list!
          </p>
          <p class="text-lg text-white/70">
            We'll send you an email at <span class="text-yellow-300 font-semibold">{{ userEmail }}</span> when we're ready to launch.
          </p>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
        <div v-for="(feature, index) in features" :key="index"
             class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-white font-semibold text-lg mb-2">{{ feature.title }}</h3>
          <p class="text-white/80 text-sm">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
        <button
          @click="signupAnother"
          class="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Sign Up Another Person
        </button>
        <NuxtLink
          to="/"
          class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-center"
        >
          Back to Homepage
        </NuxtLink>
      </div>

      <!-- Timeline Section -->
      <div class="mt-16 max-w-2xl mx-auto animate-fade-in-up animation-delay-1000">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 class="text-2xl font-bold text-white mb-6 text-center">What happens next?</h2>
          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-purple-800 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 class="text-white font-semibold">We're building something amazing</h3>
                <p class="text-white/70 text-sm">Our team is hard at work creating the best experience for you.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-purple-800 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 class="text-white font-semibold">You'll get early access</h3>
                <p class="text-white/70 text-sm">Be among the first to try our platform before anyone else.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-purple-800 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 class="text-white font-semibold">Shape the future</h3>
                <p class="text-white/70 text-sm">Your feedback will help us make the product even better.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useEarlySignupStore()

// Use confetti composable
const { getColorByIndex, generateConfettiStyles } = useConfetti()

// SEO
useSeoMeta({
  title: 'Thank You - Early Access Signup',
  description: 'Thank you for joining our early access list! We\'ll be in touch soon.'
})

// Get user data from store
const userName = computed(() => store.form.name)
const userEmail = computed(() => store.form.email)

// Redirect to signup if no user data (direct access to thank you page)
if (!userName.value || !userEmail.value) {
  await navigateTo('/early-signup')
}

// Features data
const features = [
  {
    icon: '🚀',
    title: 'Early Access',
    description: 'Get exclusive access to all features before public launch'
  },
  {
    icon: '💬',
    title: 'Direct Feedback',
    description: 'Help shape the product with your valuable input'
  },
  {
    icon: '🎯',
    title: 'Priority Support',
    description: 'Get priority customer support as an early adopter'
  }
]

// Generate confetti styles using composable
const confettiStyles = generateConfettiStyles(50)

// Actions
const signupAnother = () => {
  store.reset()
  navigateTo('/early-signup')
}

// Clean up store when leaving the page
onUnmounted(() => {
  // Don't reset immediately, let user navigate back if needed
})
</script>

<style scoped>
@keyframes confetti {
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-confetti {
  animation: confetti linear infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

/* Initially hide elements that will fade in */
.animate-fade-in-up {
  opacity: 0;
}
</style>
