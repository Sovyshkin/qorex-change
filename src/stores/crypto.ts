import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CryptoAsset, ExchangeRate, MarketData } from '../types'

export const useCryptoStore = defineStore('crypto', () => {
  // State
  const assets = ref<CryptoAsset[]>([])
  const rates = ref<ExchangeRate[]>([])
  const marketData = ref<MarketData[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Getters
  const popularAssets = computed(() => 
    assets.value.slice(0, 10).sort((a, b) => b.marketCap - a.marketCap)
  )

  const getAssetBySymbol = computed(() => (symbol: string) =>
    assets.value.find(asset => asset.symbol === symbol)
  )

  const getExchangeRate = computed(() => (from: string, to: string) =>
    rates.value.find(rate => rate.from === from && rate.to === to)
  )

  // Actions
  async function fetchAssets() {
    isLoading.value = true
    error.value = null

    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      assets.value = [
        {
          id: 'bitcoin',
          symbol: 'BTC',
          name: 'Bitcoin',
          price: 42500,
          change24h: 2.5,
          volume24h: 28000000000,
          marketCap: 830000000000
        },
        {
          id: 'ethereum',
          symbol: 'ETH',
          name: 'Ethereum',
          price: 2800,
          change24h: -1.2,
          volume24h: 15000000000,
          marketCap: 340000000000
        },
        {
          id: 'tether',
          symbol: 'USDT',
          name: 'Tether',
          price: 1.0,
          change24h: 0.01,
          volume24h: 45000000000,
          marketCap: 95000000000
        },
        {
          id: 'binancecoin',
          symbol: 'BNB',
          name: 'BNB',
          price: 315,
          change24h: 3.8,
          volume24h: 2000000000,
          marketCap: 47000000000
        },
        {
          id: 'ripple',
          symbol: 'XRP',
          name: 'XRP',
          price: 0.52,
          change24h: -0.8,
          volume24h: 1500000000,
          marketCap: 28000000000
        }
      ]
    } catch (err) {
      error.value = 'Ошибка загрузки данных о криптовалютах'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function fetchExchangeRates() {
    isLoading.value = true
    error.value = null

    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      rates.value = [
        { from: 'BTC', to: 'USDT', rate: 42500, timestamp: Date.now() },
        { from: 'ETH', to: 'USDT', rate: 2800, timestamp: Date.now() },
        { from: 'BTC', to: 'RUB', rate: 4200000, timestamp: Date.now() },
        { from: 'ETH', to: 'RUB', rate: 277000, timestamp: Date.now() },
        { from: 'USDT', to: 'RUB', rate: 99.5, timestamp: Date.now() }
      ]
    } catch (err) {
      error.value = 'Ошибка загрузки курсов обмена'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function fetchMarketData() {
    isLoading.value = true
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      
      marketData.value = assets.value.map(asset => ({
        symbol: asset.symbol,
        price: asset.price,
        change: asset.change24h,
        high24h: asset.price * 1.05,
        low24h: asset.price * 0.95,
        volume: asset.volume24h
      }))
    } catch (err) {
      error.value = 'Ошибка загрузки рыночных данных'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  function updateAssetPrice(symbol: string, newPrice: number) {
    const asset = assets.value.find(a => a.symbol === symbol)
    if (asset) {
      asset.price = newPrice
    }
  }

  function clearError() {
    error.value = null
  }

  return {
    // State
    assets,
    rates,
    marketData,
    isLoading,
    error,
    // Getters
    popularAssets,
    getAssetBySymbol,
    getExchangeRate,
    // Actions
    fetchAssets,
    fetchExchangeRates,
    fetchMarketData,
    updateAssetPrice,
    clearError
  }
})