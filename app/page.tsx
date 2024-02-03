'use client'

import { useState } from 'react'
import { title, subtitle } from '@/components/primitives'
import { RadioGroup, Radio } from '@nextui-org/radio'
import { Button } from '@nextui-org/button'
import useGenerateFundWallet from '@/hooks/useGenerateFundWallet'

export default function Home() {
  const { submit } = useGenerateFundWallet()

  const [networkType, setNetworkType] = useState<
    'testnet' | 'devnet' | 'xahauTestnet'
  >('testnet')

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>XRP</h1>
        <h1 className={title({ color: 'violet' })}>Faucets</h1>
        <br />
        <h2 className={subtitle({ class: 'mt-4' })}>
          The XRP Ledger test nets offer platforms for testing changes to the
          XRP Ledger without using real funds.
        </h2>
      </div>

      <div className="flex gap-3">
        <RadioGroup
          label="Choose Network:"
          defaultValue="testnet"
          value={networkType}
          onChange={(e) => setNetworkType(e.target.value as 'testnet' | 'devnet' | 'xahauTestnet')}
        >
          <Radio
            value="testnet"
            description="Mainnet-like network for testing applications."
          >
            Testnet
          </Radio>
          <Radio value="devnet" description="Preview of upcoming amendments.">
            Devnet
          </Radio>
          <Radio
            value="xahauTestnet"
            description="Hooks (L1 smart contracts) enabled Xahau testnet."
          >
            Xahau-Testnet
          </Radio>
        </RadioGroup>
      </div>

      <div className="flex gap-3">
        <Button color="primary" onClick={() => submit(networkType || 'testnet')}>
          Generate Testnet credentials
        </Button>
      </div>
    </section>
  )
}
