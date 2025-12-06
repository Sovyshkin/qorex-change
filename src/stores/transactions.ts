import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Transaction } from '../types'

export const useTransactionStore = defineStore('transactions', () => {
  // State
  const transactions = ref<Transaction[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Getters
  const recentTransactions = computed(() =>
    transactions.value
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10)
  )

  const pendingTransactions = computed(() =>
    transactions.value.filter(tx => tx.status === 'pending')
  )

  const completedTransactions = computed(() =>
    transactions.value.filter(tx => tx.status === 'completed')
  )

  const totalVolume = computed(() =>
    transactions.value
      .filter(tx => tx.status === 'completed')
      .reduce((sum, tx) => sum + (tx.amount * tx.price), 0)
  )

  // Actions
  async function createExchangeTransaction(
    fromAsset: string,
    toAsset: string,
    amount: number,
    rate: number
  ) {
    isLoading.value = true
    error.value = null

    try {
      const transaction: Transaction = {
        id: generateId(),
        type: 'exchange',
        fromAsset,
        toAsset,
        amount,
        price: rate,
        status: 'pending',
        timestamp: Date.now()
      }

      transactions.value.unshift(transaction)
      
      // Simulate processing time
      setTimeout(() => {
        const tx = transactions.value.find(t => t.id === transaction.id)
        if (tx) {
          tx.status = Math.random() > 0.1 ? 'completed' : 'failed'
        }
      }, 3000)

      return transaction
    } catch (err) {
      error.value = 'Ошибка создания транзакции'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function fetchTransactions() {
    isLoading.value = true
    error.value = null

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock transaction data
      transactions.value = [
        {
          id: '1',
          type: 'exchange',
          fromAsset: 'BTC',
          toAsset: 'USDT',
          amount: 0.1,
          price: 42500,
          status: 'completed',
          timestamp: Date.now() - 3600000
        },
        {
          id: '2',
          type: 'buy',
          fromAsset: 'USDT',
          toAsset: 'ETH',
          amount: 2800,
          price: 2800,
          status: 'completed',
          timestamp: Date.now() - 7200000
        }
      ]
    } catch (err) {
      error.value = 'Ошибка загрузки транзакций'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  function updateTransactionStatus(id: string, status: Transaction['status']) {
    const transaction = transactions.value.find(tx => tx.id === id)
    if (transaction) {
      transaction.status = status
    }
  }

  function clearError() {
    error.value = null
  }

  function generateId(): string {
    return Math.random().toString(36).substr(2, 9)
  }

  return {
    // State
    transactions,
    isLoading,
    error,
    // Getters
    recentTransactions,
    pendingTransactions,
    completedTransactions,
    totalVolume,
    // Actions
    createExchangeTransaction,
    fetchTransactions,
    updateTransactionStatus,
    clearError
  }
})