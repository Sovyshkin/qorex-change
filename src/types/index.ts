export interface CryptoAsset {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  volume24h: number
  marketCap: number
  icon?: string
}

export interface ExchangeRate {
  from: string
  to: string
  rate: number
  timestamp: number
}

export interface Transaction {
  id: string
  type: 'buy' | 'sell' | 'exchange'
  fromAsset: string
  toAsset: string
  amount: number
  price: number
  status: 'pending' | 'completed' | 'failed'
  timestamp: number
}

export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  verified: boolean
  balance: Record<string, number>
}

export interface MarketData {
  symbol: string
  price: number
  change: number
  high24h: number
  low24h: number
  volume: number
}