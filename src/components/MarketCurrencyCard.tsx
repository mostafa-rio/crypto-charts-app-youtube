import React from 'react'
import PriceChange24h from './PriceChange24h'
import { Button } from '@nextui-org/button'
import { IoPulse } from 'react-icons/io5'
import CardChart from './CardChart'
import { useGlobalStore } from '../store/useGlobalStore'

type Props = {
  id: string
  image: string
  name: string
  currentPrice: number
  changeIn24h: number
  chartData: { x: number; y: number }[]
}

function MarketCurrencyCard({
  id,
  name,
  image,
  currentPrice,
  changeIn24h,
  chartData,
}: Props) {
  const setDetailsId = useGlobalStore((state) => state.setDetailsId)

  const showDetails = () => {
    setDetailsId(id)
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  return (
    <div className="bg-indigo-900 bg-opacity-10 w-full p-5 rounded-2xl flex flex-col h-80 text-indigo-300">
      {/* image and name */}
      <div className="flex gap-3">
        <div>
          <img src={image} alt={name} className="rounded-full w-12 h-12" />
        </div>
        <div className="font-bold my-auto text-white text-xl">{name}</div>
      </div>
      {/* chart */}
      <div className="ml-auto">
        <CardChart series={chartData} />
      </div>

      {/* price change  */}
      <div className="flex justify-between">
        <div className="mt-auto h-fit">
          <PriceChange24h changePrice={changeIn24h} />
          <div className="text-white text-xl lg:text-4xl">
            ${currentPrice.toLocaleString()}
          </div>
        </div>
        <Button
          onClick={showDetails}
          variant="bordered"
          color="primary"
          className="mt-auto"
          startContent={<IoPulse />}
        >
          Details
        </Button>
      </div>
    </div>
  )
}

export default MarketCurrencyCard
