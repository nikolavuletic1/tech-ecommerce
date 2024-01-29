// import ImageGallery from '@/app/components/ImageGallery';
// import { fullProduct } from '@/app/interface';
// import { client } from '@/app/lib/sanity';
// import React from 'react'

// async function getData(slug: string) {
//     const query = `*[_type == "product"] && slug.current == "$slug" {
//         _id,
//         images,
//         price,
//         name,
//         description,
//         "slug": slug.current,
//         "categoryName": category->name,
//     }`

//     const data = await client.fetch(query);
    
//     return data;

// }

// const ProductPage = async ({params,}: {params: {slug: string};}) => {
//     const data: fullProduct = await getData(params.slug) 
//   return (
//     <div className='bg-white'>
//         <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
//             <div className='grid gap-8 md:grid-cols-2'>
//                 <ImageGallery images={data.images} />

//             </div>

//         </div>

//     </div>
//   )
// }

// export default ProductPage


import AddToBag from '@/app/components/AddToBag';
import ImageGallery from '@/app/components/ImageGallery';
import { fullProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity';
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';
import React from 'react';

// Function to fetch product data
async function getData(slug: string) {
  try {
    const query = `*[_type == "product" && slug.current == $slug] {
      _id,
      images,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      price_id, 
      prod_id
    }`;

    const data = await client.fetch(query, { slug });
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
}

// ProductPage component
const ProductPage = async ({ params }: { params: { slug: string } }) => {
  try {
    // Fetch data
    const data: fullProduct | null = await getData(params.slug);

    // Check if data is available
    if (!data) {
      console.error('Product not found for slug:', params.slug);
      return <div>Error loading product data</div>;
    }

    // Log fetched data
    console.log('Fetched product data:', data);

    // Render your component with the fetched data
    return (
      <div className='bg-white'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div className='grid gap-8 md:grid-cols-2'>
            <ImageGallery images={data.images} />
            <div className='md:py-8'>
                <div className='mb-2 md:mb-3'>
                    <span className='mb-0.5 inline-block text-gray-900'>
                        {data.categoryName}
                    </span>
                    <h2 className='text-2xl font-bold  text-gray-900 lg:text-3xl'>
                        {data.name}
                    </h2>
                </div>
                <div className='mb-6 flex items-center gap-3 md:mb-10'>
                    <Button className='rounded-full gap-x-2'>
                        <span className='text-sm'>4.2</span>
                        <Star className='h-5 w-5' />
                    </Button>
                    <span className='text-sm text-gray-900 transtion duration-100'>
                        56 Rattings 
                    </span>
                </div>
                <div className='mb-4'>
                    <div className='flex items-end gap-2'>
                        <span className='text-xl font-bold md:text-2xl'>
                            ${data.price}
                        </span>
                        <span className='mb-0.5 text-red-600 line-through'>
                            ${data.price +30}
                        </span>
                    </div>
                    <span className='text-sm text-gray-900'>
                        Incl. Vat + Shipping
                    </span>
                </div>
                <div className='mb-6 flex items-center gap-2 text-gray-900'>
                    <Truck />
                    <span className='text-sm'>
                        2-4 Days Shipping
                    </span>
                </div>
                <div className='flex gap-2.5'>
                    {/* <Button>
                        Add To Bag
                    </Button> */}
                    <AddToBag name={data.name} 
                    description={data.description} 
                    price={data.price} 
                    currency='USD' 
                    image={data.images[0]} 
                    key={data._id}
                    price_id={data.price_id}
                    />
                    <Button variant={'secondary'}>
                        Check Out Now
                    </Button>
                </div>
                <p className='mt-12 text-base tracking-wide'>
                    {data.description}
                </p>

            </div>
            {/* Render other components with data... */}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering product page:', error);
    return <div>Error loading product page</div>;
  }
};

export default ProductPage;


// import AddToBag from "@/app/components/AddToBag";
// import CheckoutNow from "@/app/components/CheckoutNow";
// import ImageGallery from "@/app/components/ImageGallery";
// import { fullProduct } from "@/app/interface";
// import { client } from "@/app/lib/sanity";
// import { Button } from "@/components/ui/button";
// import { Star, Truck } from "lucide-react";

// async function getData(slug: string) {
//   const query = `*[_type == "product" && slug.current == "${slug}"][0] {
//         _id,
//           images,
//           price,
//           name,
//           description,
//           "slug": slug.current,
//           "categoryName": category->name,
//           price_id
//       }`;

//   const data = await client.fetch(query);

//   return data;
// }

// export const dynamic = "force-dynamic";

// export default async function ProductPge({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const data: fullProduct = await getData(params.slug);

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-screen-xl px-4 md:px-8">
//         <div className="grid gap-8 md:grid-cols-2">
//           <ImageGallery images={data.images} />

//           <div className="md:py-8">
//             <div className="mb-2 md:mb-3">
//               <span className="mb-0.5 inline-block text-gray-500">
//                 {data.categoryName}
//               </span>
//               <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
//                 {data.name}
//               </h2>
//             </div>

//             <div className="mb-6 flex items-center gap-3 md:mb-10">
//               <Button className="rounded-full gap-x-2">
//                 <span className="text-sm">4.2</span>
//                 <Star className="h-5 w-5" />
//               </Button>

//               <span className="text-sm text-gray-500 transition duration-100">
//                 56 Ratings
//               </span>
//             </div>

//             <div className="mb-4">
//               <div className="flex items-end gap-2">
//                 <span className="text-xl font-bold text-gray-800 md:text-2xl">
//                   ${data.price}
//                 </span>
//                 <span className="mb-0.5 text-red-500 line-through">
//                   ${data.price + 30}
//                 </span>
//               </div>

//               <span className="text-sm text-gray-500">
//                 Incl. Vat plus shipping
//               </span>
//             </div>

//             <div className="mb-6 flex items-center gap-2 text-gray-500">
//               <Truck className="w-6 h-6" />
//               <span className="text-sm">2-4 Day Shipping</span>
//             </div>

//             <div className="flex gap-2.5">
//               <AddToBag
//                 currency="USD"
//                 description={data.description}
//                 image={data.images[0]}
//                 name={data.name}
//                 price={data.price}
//                 key={data._id}
//                 price_id={data.price_id}
//               />
//               <CheckoutNow
//                 currency="USD"
//                 description={data.description}
//                 image={data.images[0]}
//                 name={data.name}
//                 price={data.price}
//                 key={data._id}
//                 price_id={data.price_id}
//               />
//             </div>

//             <p className="mt-12 text-base text-gray-500 tracking-wide">
//               {data.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

