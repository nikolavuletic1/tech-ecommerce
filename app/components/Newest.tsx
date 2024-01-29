
// import React from 'react'
// import { client } from '../lib/sanity';
// import { simplifiedProduct } from '../interface';
// import Image from 'next/image';
// import Link from 'next/link';

// async function getData() {
//     const query = `*[_type == "product"][0...4] | order(releaseDate desc) {
//         _id,
//         price,
//         name,
//         "slug": slug.current,
//         "categoryName": category->name,
//         "imageUrl": images[0].asset->url
//     }`

//     const data = await client.fetch(query);
    
//     return data;

// }
// const Newest = async () => {
//     const data: simplifiedProduct[] = await getData()
//   return (
//     <div className='bg-white'>
//     <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
//         <div className='flex justify-between items-center'>
//             <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Newest Products</h2>
//         </div>
//         <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
//             {data.map((product)=> ( 
//                 <div key={product._id} className='group relative'> 
//                 <div className='aspect-squere w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
//                     <Image src={product.imageUrl} 
//                      loading="lazy"
//                     alt='Product image' 
//                     height={300}
//                     width={300}
//                     className='w-full h-full object-contain object-center lg:h-full lg:w-full' />
//                 </div>
//                 <div className='mt-4 flex justify-between'>
//                      <div>
//                         <h3 className='text-sm '> 
//                         <Link href={`/product/${product.slug}`} >
//                         {product.name}
//                         </Link>
//                         </h3>
//                         <p className='mt-1 text-sm text-gray-700'>
//                         {product.categoryName}
//                         </p>
//                     </div>
//                     <div>
//                         <p className='text-sm font-medium'>
//                             ${product.price}
//                         </p>
//                     </div> 
                
//                 </div>

//                 </div>
             
//              ))}

//         </div>

//     </div>

//     </div>
//   )
// }

// export default Newest


'use client'

import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import { simplifiedProduct } from '../interface';
import Image from 'next/image';
import Link from 'next/link';

function getData() {
    const query = `*[_type == "product"][0...4] | order(releaseDate desc) {
        _id,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url
    }`;

    return client.fetch(query);
}

const Newest = () => {
    const [data, setData] = useState<simplifiedProduct[]>([]);

    useEffect(() => {
        const fetchData = () => {
            getData().then((result) => {
                setData(result);
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        };

        fetchData();
    }, []);

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Newest Products</h2>
                </div>
                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                    {data.map((product) => (
                        <div key={product._id} className='group relative'>
                            <div className='aspect-squere w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                                <Image
                                    src={product.imageUrl}
                                    loading="lazy"
                                    alt='Product image'
                                    height={300}
                                    width={300}
                                    className='w-full h-full object-contain object-center lg:h-full lg:w-full'
                                />
                            </div>
                            <div className='mt-4 flex justify-between'>
                                <div>
                                    <h3 className='text-sm '>
                                        <Link href={`/product/${product.slug}`} >
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-700'>
                                        {product.categoryName}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-sm font-medium'>
                                        ${product.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Newest;
