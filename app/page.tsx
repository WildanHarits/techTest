import Image from "next/image";
import Link from "next/link";
import ProductsSection from "./components/ProductsSection";

export default async function Home() {

  const productsData = await fetch("https://dummyjson.com/products")
  const products = await productsData.json()

  // console.log('products')
  // console.log(products)


  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {products.products.map((item, key) => {

            // console.log(item)
              return (
                <a href={"/product/"+item.id} id={item.id}>
                  <div className='bg-white shadow-md rounded-lg p-4 flex flex-col'>
                  <img src={item.thumbnail} className='w-full h-48 object-contain' alt="" />
                      <div className='flex flex-col p-2'>
                          <h2 className='text-lg font-bold'>{item.title}</h2>
                          <p className='text-sm text-gray-500'>{item.description}</p>
                          <p className='text-lg font-bold'>${item.price}</p>
                      </div>
                  </div>
                </a>
              )
            })}
        </div>  
      </main>
    </div>
  );
}
