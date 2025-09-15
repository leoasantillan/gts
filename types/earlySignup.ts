export interface EarlySignupForm {
  name: string
  email: string
}

export interface EarlySignupState {
  form: EarlySignupForm
  isLoading: boolean
  isSuccess: boolean
  errors: {
    name: string | null
    email: string | null
  }
}
