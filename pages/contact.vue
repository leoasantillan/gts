<template>
  <section>
    <div class="mx-auto max-w-3xl py-12 px-4">
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Contact</h1>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Have questions or feedback? Reach out and we'll get back to you soon.
      </p>
    </div>

    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div class="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
          <h2 class="text-xl font-semibold">Send us a message</h2>
          <form class="mt-6 grid grid-cols-1 gap-4" @submit.prevent="submit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input id="name" v-model="form.name" type="text" required class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input id="email" v-model="form.email" type="email" required class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <input id="subject" v-model="form.subject" type="text" required class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea id="message" v-model="form.message" rows="5" required class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <p v-if="status.message" :class="status.error ? 'text-red-600' : 'text-green-600'" class="text-sm">{{ status.message }}</p>
              <button type="submit" :disabled="loading" class="ml-auto inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                <span v-if="!loading">Send message</span>
                <span v-else>Sending…</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <aside>
        <div class="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
          <h3 class="text-base font-semibold">Other ways to reach us</h3>
          <ul class="mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li>Twitter: <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">@gts</a></li>
            <li>Email: <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="mailto:hello@example.com">hello@example.com</a></li>
            <li>GitHub: <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">gts</a></li>
          </ul>
        </div>
      </aside>
    </div>
  </section>

</template>

<script setup lang="ts">
interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const form = reactive<ContactForm>({ name: '', email: '', subject: '', message: '' })
const loading = ref(false)
const status = reactive<{ message: string | null; error: boolean }>({ message: null, error: false })

useSeoMeta({
  title: 'Contact',
  description: 'Get in touch with the team behind this project.'
})

const submit = async (): Promise<void> => {
  try {
    loading.value = true
    status.message = null
    status.error = false

    await new Promise((resolve) => setTimeout(resolve, 600))

    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    status.message = 'Thanks! Your message has been sent.'
  } catch (err) {
    status.message = 'Something went wrong. Please try again.'
    status.error = true
  } finally {
    loading.value = false
  }
}
</script>