import { networkConfig } from '@/config/network'

export const getNetworkByType = (
  type: 'testnet' | 'devnet' | 'xahauTestnet'
): { wss: string; rpc: string } => {
  return networkConfig[type]
}
