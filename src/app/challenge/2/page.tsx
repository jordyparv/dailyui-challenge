'use client'
import Screen from '@/components/Screen'
import React, { useState } from 'react'
import { getCardPattern } from '@/helpers'

export default function page() {
  const [cardDetails, setCardDetails] = useState({})
  const [isClicked, setIsClicked] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }))
  }


  return (
    <Screen>
      <div className='p-2 flex flex-col gap-2 '>
        <div
          className='flip-card h-52'>
          <div className='flip-card-inner'
            style={isClicked ? { transform: 'rotateY(180deg)' } : {}}>
            <CardFront cardDetails={cardDetails} />
            <CardBack cardDetails={cardDetails} />
          </div>

        </div>
        <div>
          <div className='flex flex-col gap-3'>

            <div className='space-y-2'>
              <label className='font-medium'>Enter Card Number</label>
              <div className='bg-slate-200 flex items-center'>
                <input className='bg-transparent px-6 py-2 w-full rounded-md outline-none'
                  name='card_no'
                  type='text'
                  maxLength={19}
                  onChange={(e) => {
                    const { name, value } = e.target
                    setCardDetails(prev => ({ ...prev, [name]: value.replaceAll(' ', '') }))
                  }}
                  value={getCardPattern(cardDetails?.card_no)}
                  placeholder='****     ****     ****     ****' />
                <div className='text-gray-400 italic font-bold  px-2'>VISA</div>
              </div>
            </div>
            <div className='space-y-2'>
              <label className='font-medium'>Card Holder Name</label>
              <input className='bg-slate-200 px-6 py-2 w-full rounded-md outline-none'
                type='text'
                name='card_holder_name'
                maxLength={20}
                onChange={handleChange}
                placeholder='Enter Names'
              />
            </div>
            <div className='flex justify-between'>
              <div className='space-y-2 flex flex-col'>
                <label className='font-medium'>Expiry Date</label>
                <input
                  type='text'
                  placeholder='05/24'
                  name='expiry'
                  maxLength={5}
                  onChange={(e) => {
                    const { name, value } = e.target

                    setCardDetails(prev => ({ ...prev, [name]: value.replaceAll('/', '') }))
                  }}
                  value={(function () {
                    const month = cardDetails?.expiry?.slice(0, 2)
                    const year = cardDetails?.expiry?.slice(2, 5)
                    console.log(month)
                    return month?.concat('/', year)
                  })()}
                  className='bg-slate-200 px-2 py-2 w-1/2 rounded-md outline-none' />
              </div>
              <div className='space-y-2 flex flex-col'>
                <label className='font-medium'>CVV</label>
                <input
                  maxLength={3}
                  onBlur={() => setIsClicked(false)}
                  onFocus={() => setIsClicked(true)}
                  onChange={handleChange}
                  name='cvv'
                  placeholder='123'
                  className='bg-slate-200 px-2 py-2 w-1/2 rounded-md outline-none' type='text' name='cvv' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  )
}



const CardFront = ({ cardDetails }: CardDetailsProps) => {
  return <div className='flip-card-front transition-all shadow rounded-lg bg-gradient-to-r from-red-500 to-blue-500'
  >
    <div className='flex flex-col h-full justify-between text-white py-4 px-6'>
      <div className='flex justify-between'>
        <span className='text-md'>DailyUI</span>
        <span className='font-bold italic text-md'>VISA</span>
      </div>
      <p className='py-2 text-2xl'>{cardDetails?.card_no && getCardPattern(cardDetails.card_no)} {cardDetails?.card_no === undefined && '**** **** **** 1234'}</p>
      <div className='flex justify-between'>
        <div className=''>
          <p className='text-xs'>Card Holder Name</p>
          <p>{cardDetails?.card_holder_name || 'Stylish Jordan'}</p>
        </div>
        <div className=''>
          <p className='text-xs'>Expiry Date</p>
          <p>{cardDetails?.expiry && cardDetails.expiry}</p>
        </div>
      </div>
    </div>
  </div>
}
const CardBack = ({ cardDetails }: CardDetailsProps) => {

  return <div className='flip-card-back transition-all shadow rounded-lg bg-gradient-to-r from-red-500 to-blue-500 h-52'
  >
    <div className='flex flex-col h-full text-white py-4'>
      <div className=''>
        <div className='bg-black h-10 w-full'></div>
      </div>
      <p className='py-1 min-h-10 my-4 mx-4 text-xl px-6 text-black bg-white text-right'>{cardDetails?.cvv && cardDetails?.cvv || ''} {cardDetails?.cvv == undefined && '123'} </p>
      <p className='text-xs px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, adipisci ex voluptatem ea ipsam quo labore quis tempora magni?</p>
    </div>
  </div>
}




type CardDetailsProps = {
  cardDetails: {}
}