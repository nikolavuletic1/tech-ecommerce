// 'use client'
// import Image from 'next/image'
// import { useState } from 'react'
// import { urlFor } from '../lib/sanity'
// interface iAppProps {
//     images: any
// }
// const ImageGallery = ({images}: iAppProps) => {
//     const [bigImage, setBigImage] = useState(images[0])
//     const handleSmallImageClick = (image:any) => {
//         setBigImage(image)
//     }
//   return (
//     <div className='grid gap-8 lg:grid-cols-5'>
//         <div className='order-last flex gap-3 lg:order-none lg:flex-col'>
//             {images.map((image: any, idx: any) => (
//                 <div key={idx} className='overflow-hidden rounded-lg bg-gray-100 h-48 w-48 flex items-center justify-center '> 
//                 <Image
//                 src={urlFor(image).url()}
//                 alt='photo'
//                 width={400}
//                 height={400}
//                 className='h-full w-full object-contain object-center cursor-pointer'
//                 onClick={() => handleSmallImageClick (image)}
//                 />
//                 </div>

//              ))}  

//         </div>
//         <div className='relative overflow-hidden rounded-lg bg-gray-100 ml-24 lg:col-span-4 border-4'>
//             <Image src={urlFor(bigImage).url()} 
//             alt={'photo'} 
//             width={500} 
//             height={500} 
//             className='h-full w-full object-contain object-center'
//             />
//             <span className='absolute left-0 top-0 rounded-br-lg bg-red-600 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>
//                 SALE
//             </span>

//         </div>




//     </div>
//   )
// }

// export default ImageGallery


// 'use client'
// import Image from 'next/image'
// import { useState } from 'react'
// import { urlFor } from '../lib/sanity'

// interface iAppProps {
//     images: any
// }

// const ImageGallery = ({images}: iAppProps) => {
//     const [bigImage, setBigImage] = useState(images[0])
//     const handleSmallImageClick = (image:any) => {
//         setBigImage(image)
//     }

//     return (
//         <div className="grid gap-4 lg:grid-cols-5">
//           <div className="order-last flex gap-4 lg:order-none lg:flex-col">
//             {images.map((image: any, idx: any) => (
//               <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
//                 <Image
//                   src={urlFor(image).url()}
//                   width={200}
//                   height={200}
//                   alt="photo"
//                   className="h-full w-full object-cover object-center cursor-pointer"
//                   onClick={() => handleSmallImageClick(image)}
//                 />
//               </div>
//             ))}
//           </div>
    
//           <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
//             <Image
//               src={urlFor(bigImage).url()}
//               alt="Photo"
//               width={500}
//               height={500}
//               className="h-full w-full object-cover object-center"
//             />
    
//             <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
//               Sale
//             </span>
//           </div>
//         </div>
//       );
//     }

//     export default ImageGallery

 'use client'
 import Image from 'next/image'
 import { useState } from 'react'
 import { urlFor } from '../lib/sanity'
 
 interface iAppProps {
     images: any
 }
 
 const ImageGallery = ({images}: iAppProps) => {
     const [bigImage, setBigImage] = useState(images[0])
     const handleSmallImageClick = (image:any) => {
         setBigImage(image)
     }
 
     return (
         <div className="grid gap-4 lg:grid-cols-5">
           <div className="order-last flex gap-4 lg:order-none lg:flex-col">
             {images.map((image: any, idx: any) => (
               <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                 <Image
                   src={urlFor(image).url()}
                   width={200}
                   height={200}
                   alt="photo"
                   className="aspect-square h-full w-full object-contain object-center cursor-pointer"
                   onClick={() => handleSmallImageClick(image)}
                 />
               </div>
             ))}
           </div>
     
           <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
             <Image
               src={urlFor(bigImage).url()}
               alt="Photo"
               width={500}
               height={500}
               className="h-full w-full object-cover object-center lg:object-contain"
             />
     
             <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
               Sale
             </span>
           </div>
         </div>
       );
     }
 
 export default ImageGallery
 
