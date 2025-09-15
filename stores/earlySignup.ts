import { defineStore } from 'pinia'
import type { EarlySignupForm, EarlySignupState } from '~/types/earlySignup'

export const useEarlySignupStore = defineStore('earlySignup', {
  state: (): EarlySignupState => ({
    form: {
      name: '',
      email: ''
    },
    isLoading: false,
    errors: {
      name: null,
      email: null
    }
  }),

  getters: {
    isNameValid: (state) => {
      const trimmedName = state.form.name.trim()
      return trimmedName.length > 0
    },
    
    isEmailValid: (state) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(state.form.email)
    },
    
    isFormValid(): boolean {
      return this.isNameValid && this.isEmailValid
    }
  },

  actions: {
    updateName(name: string) {
      this.form.name = name
      this.errors.name = null
    },

    updateEmail(email: string) {
      this.form.email = email
      this.errors.email = null
    },

    validateForm() {
      this.errors.name = this.isNameValid ? null : 'Name is required'
      this.errors.email = this.isEmailValid ? null : 'Please enter a valid email address'
    },

    async submitForm() {
      this.validateForm()
      
      if (!this.isFormValid) {
        return false
      }

      this.isLoading = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        this.isLoading = false
        
        // Navigate to thank you page after successful submission
        await navigateTo('/thank-you')
        
        return true
      } catch (error) {
        this.isLoading = false
        throw error
      }
    },

    reset() {
      this.form.name = ''
      this.form.email = ''
      this.isLoading = false
      this.errors.name = null
      this.errors.email = null
    }
  }
})
