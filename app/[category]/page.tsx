// 'use client'
// import React from 'react';
// import { client } from '../lib/sanity';
// import { simplifiedProduct } from '../interface';
// import Link from 'next/link';
// import Image from 'next/image';

// async function getData(category: string) {
//     try {
//       console.log('Fetching data for category:', category);
  
//       const query = `*[_type == "product" && category->name == "${category}"] {
//         _id,
//         "imageUrl": images[0].asset->url,
//         price,
//         name, 
//         "slug": slug.current,
//         "categoryName": category->name,
//       }`;
  
//       const data = await client.fetch(query);
  
//       console.log('Fetched data:', data);
  
//       return data.length > 0 ? data : [];
//     } catch (error) {
//       console.error('Error fetching product data:', error);
//       throw error;
//     }
//   }
  
// const CategoryPage = async ({ params }: { params: { category: string } }) => {
//   const data: simplifiedProduct[] = await getData(params.category);

//   return (
//     <div className='bg-white'>
//       <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
//         <div className='flex justify-between items-center'>
//           <h2 className='text-2xl font-bold tracking-tight text-gray-900'>{params.category}</h2>
//         </div>
//         <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
//           {data && data.map((product) => (
//             <div key={product._id} className='group relative'>
//               <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
//                 <Image
//                   src={product.imageUrl}
//                   alt='Product image'
//                   height={300}
//                   width={300}
//                   className='w-full h-full object-contain object-center lg:h-full lg:w-full'
//                 />
//                 {/* <Image src={product.imageUrl} alt='Product image' width={300} height={300}  className='w-full h-full object-contain object-center lg:h-full lg:w-full' /> */}

//               </div>
//               <div className='mt-4 flex justify-between'>
//                 <div>
//                   <h3 className='text-sm '>
//                     <Link href={`/product/${product.slug}`}>{product.name}</Link>
//                   </h3>
//                   <p className='mt-1 text-sm text-gray-700'>{product.categoryName}</p>
//                 </div>
//                 <div>
//                   <p className='text-sm font-medium'>${product.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
'use client'

import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import { simplifiedProduct } from '../interface';
import Link from 'next/link';
import Image from 'next/image';

function getData(category: string): Promise<simplifiedProduct[]> {
  console.log('Fetching data for category:', category);

  const query = `*[_type == "product" && category->name == "${category}"] {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name, 
    "slug": slug.current,
    "categoryName": category->name,
  }`;

  return client.fetch(query)
    .then((data: simplifiedProduct[]) => {
      console.log('Fetched data:', data);
      return data.length > 0 ? data : [];
    })
    .catch((error) => {
      console.error('Error fetching product data:', error);
      throw error;
    });
}

const CategoryPage: React.FC<{ params: { category: string } }> = ({ params }) => {
  const [data, setData] = useState<simplifiedProduct[]>([]);

  useEffect(() => {
    getData(params.category)
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        // Handle error, if needed
      });
  }, [params.category]);

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>{params.category}</h2>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {data.map((product) => (
            <div key={product._id} className='group relative'>
              <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                <Image
                  src={product.imageUrl}
                  alt='Product image'
                  height={300}
                  width={300}
                  className='w-full h-full object-contain object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-sm '>
                    <Link href={`/product/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className='mt-1 text-sm text-gray-700'>{product.categoryName}</p>
                </div>
                <div>
                  <p className='text-sm font-medium'>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
