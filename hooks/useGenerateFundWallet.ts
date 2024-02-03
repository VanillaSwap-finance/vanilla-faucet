import { useState } from 'react'
import { Client } from 'xrpl'
import { getNetworkByType } from '@/utils/network'

const useGenerateFundWallet = () => {
  const submit = async (network: 'testnet' | 'devnet' | 'xahauTestnet') => {
    console.log('Generating wallet...: ', network)

    const networkConfig = getNetworkByType(network)
    console.log('Network config:', networkConfig)

    const client = new Client(networkConfig.wss)
    await client.connect()

    try {
      const { wallet, balance } = await client.fundWallet()
      console.log('Wallet:', wallet)
      console.log('Balance:', balance)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error('An unknown error occurred.', error)
      }
    } finally {
      client.disconnect()
    }
  }

  return {
    submit,
  }
}

export default useGenerateFundWallet
