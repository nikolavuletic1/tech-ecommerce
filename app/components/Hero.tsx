// 'use client'
// import React from 'react';
// import Image from 'next/image';
// import { client, urlFor } from '../lib/sanity';
// import Link from 'next/link';

// import dynamic from 'next/dynamic'
 


// async function getData() {
//     const query = "*[_type == 'heroImage'][0]"

//     const data = await client.fetch(query);
    
//     return data;

// }

// const Hero = async () => {
//     const data = await getData()
//   return (
//     <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
//         <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
//             <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
//                 <h1 className='mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl'>
//                     Top Tech For A Top Prices!
//                 </h1>

//                 <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>We Sell Only The Best Tech On The Market And Garantie The Best Merch For A Price.</p>
//             </div>

//             <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
//                 <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
//                    <Image src={urlFor(data.image1).url()} 
//                    priority
//                    alt={'Hero Tech Photo'}
//                    className='w-full h-full object-cover object-center'
//                    width={300}
//                    height={300}
//                    />
//                 </div>
//                 <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
//                 <Image src={urlFor(data.image2).url()} 
//                    priority
//                    alt={'Hero Tech Photo'}
//                    className='w-full h-full object-cover object-center'
//                    width={300}
//                    height={300}
//                    />
//                 </div>

//             </div>
//         </div>
//         <div className='flax flex-col items-center justify-between gap-8 md:flex-row'>
//             <div className='flex h-12 w-64 divide-x overflow-hidden rounded-lg border'>
//                 <Link href='/Laptops' className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100  hover:bg-gray-100 active:bg-gray-200'>
//                     Laptops
//                 </Link>
//                 <Link href='/TVs' className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100  hover:bg-gray-100 active:bg-gray-200'>
//                     TVs
//                 </Link>
//                 <Link href='/Gadgets' className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100  hover:bg-gray-100 active:bg-gray-200'>
//                     Gadgets
//                 </Link>

//             </div>
             
//         </div>

//     </section>
//   )
// }

// // export default Hero
// export default dynamic (() => Promise.resolve(Hero), {ssr: false})
'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client, urlFor } from '../lib/sanity';
import Link from 'next/link';

// Define the type for the data you're fetching
interface Data {
  image1: string;
  image2: string;
}

// Refactor the getData function to use traditional Promises
function getData(): Promise<Data> {
  const query = "*[_type == 'heroImage'][0]"

  return client.fetch(query)
    .then(data => data as Data)
    .catch(error => {
      console.error('Error:', error);
      // Return a default Data object in case of error
      return { image1: '', image2: '' } as Data;
    });
}

// Use React's useEffect and useState hooks to fetch data when the component mounts
const Hero: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    getData().then(fetchedData => {
      setData(fetchedData);
    });
  }, []); // Pass an empty array as the second argument to useEffect to mimic componentDidMount

  return (
    <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
        <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
            <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
                <h1 className='mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl'>
                    Top Tech For A Top Prices!
                </h1>

                <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>We Sell Only The Best Tech On The Market And Garantie The Best Merch For A Price.</p>
            </div>

            <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
                {data && (
                  <>
                    <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
                      <Image src={urlFor(data.image1).url()} 
                        priority
                        alt={'Hero Tech Photo'}
                        className='w-full h-full object-cover object-center'
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
                      <Image src={urlFor(data.image2).url()} 
                        priority
                        alt={'Hero Tech Photo'}
                        className='w-full h-full object-cover object-center'
                        width={300}
                        height={300}
                      />
                    </div>
                  </>
                )}
            </div>
        </div>
        <div className='flax flex-col items-center justify-between gap-8 md:flex-row'>
            <div className='flex h-12 w-64 divide-x overflow-hidden rounded-lg border'>
                <Link href='/Laptops' className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100  hover:bg-gray-100 active:bg-gray-200'>
                    Laptops
                </Link>
                <Link href='/TVs' className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100  hover:bg-gray-100 active:bg-gray-200'>
                    TVs
                </Link>
                <Link href='/Gadgets' className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100  hover:bg-gray-100 active:bg-gray-200'>
                    Gadgets
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero


