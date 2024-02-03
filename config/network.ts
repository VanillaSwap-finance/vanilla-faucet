export const NETWORK_TYPE = {
  TESTNET: 'testnet',
  DEVNET: 'devnet',
  XAHAU_TESTNET: 'xahauTestnet',
}

export const networkConfig = {
  testnet: {
    wss: 'wss://s.altnet.rippletest.net:51233/',
    rpc: 'https://s.altnet.rippletest.net:51234/',
  },
  devnet: {
    wss: 'wss://s.devnet.rippletest.net:51233/',
    rpc: 'https://s.devnet.rippletest.net:51234/',
  },
  xahauTestnet: {
    wss: 'wss://xahau-test.net/',
    rpc: 'https://xahau-test.net/',
  },
}
