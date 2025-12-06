import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '../types'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Getters
  const isAuthenticated = computed(() => !!user.value)
  const userBalance = computed(() => user.value?.balance || {})

  // Actions
  async function login(email: string, password: string) {
    isLoading.value = true
    error.value = null
    
    try {
      // Simulate API call - in real app would use email and password
      console.log('Login attempt for:', email, password)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      user.value = {
        id: '1',
        email,
        name: 'Пользователь',
        verified: true,
        balance: {
          BTC: 0.5,
          ETH: 2.3,
          USDT: 1000,
          RUB: 50000
        }
      }
    } catch (err) {
      error.value = 'Ошибка авторизации'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function register(email: string, password: string, name: string) {
    isLoading.value = true
    error.value = null
    
    try {
      // Simulate API call - in real app would use email and password
      console.log('Register attempt for:', email, password)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      user.value = {
        id: '1',
        email,
        name,
        verified: false,
        balance: {}
      }
    } catch (err) {
      error.value = 'Ошибка регистрации'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  function logout() {
    user.value = null
    error.value = null
  }

  function clearError() {
    error.value = null
  }

  return {
    // State
    user,
    isLoading,
    error,
    // Getters
    isAuthenticated,
    userBalance,
    // Actions
    login,
    register,
    logout,
    clearError
  }
})