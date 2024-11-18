'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import ProductDetailSection from '@/app/components/ProductDetailSection'


const product = async() => {
    const params = useParams<{ id: string; }>()
    console.log(params.id)

    const productData = await fetch("https://dummyjson.com/products/"+params.id)
    const product = await productData.json()

    console.log(product)
  return (
    <div className='p-8 border border-gray-200 rounded-lg shadow-md'>
      <div className='flex flex-col gap-8'>
        <div className="relative w-full">
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center justify-center w-full h-full">
              <button
                type="button"
                className="absolute z-10 left-0 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <span className="sr-only">Previous</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                type="button"
                className="absolute z-10 right-0 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <span className="sr-only">Next</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              <div className="relative w-full h-full">
                <img className="w-full h-full object-cover" src="https://picsum.photos/500/300" alt="product 1" />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>Product Title</h1>
          <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas.</p>
          <p className='text-2xl font-bold'>$19.99</p>
          <span className='bg-green-500 text-white px-4 py-1 rounded-full'>In Stock</span>
        </div>
      </div>
    </div>
  )
}

export default product
