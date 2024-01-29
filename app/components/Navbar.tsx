// 'use client'

// import { Button } from '@/components/ui/button'
// import { ShoppingBag } from 'lucide-react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React from 'react'
// import { client, urlFor } from '../lib/sanity';
// import Image from 'next/image';
// const links = [
//   {name: "Home", href: "/"},
//   {name: "Laptops", href: "/Laptops"},
//   {name: "TVs", href: "/TVs"},
//   {name: "Gadgets", href: "/Gadgets"},

// ]




// // async function getData() {
// //     const query = "*[_type == 'heroImage'][0]"

// //     const data = await client.fetch(query);
    
// //     return data;
   
// // }

// async function getData() {
//     const query = "*[_type == 'logoImage'][0]"

//     const data = await client.fetch(query);
    
//     return data;
   
// }

// const Navbar = async () => {
//   const pathname = usePathname()
//   const data = await getData()
//   return (
//    <header className='mb-8 border-b'>
   
//     <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
//     <div className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24'>
//     <Image src={urlFor(data.imageField).url()} 
//                    alt={'Hero Tech Photo'}
//                    className='w-full h-full object-cover object-center'
//                    width={500}
//                    height={500}
//                    />
//     </div>
//     <Link href='/'>
//       <h1 className='text-2xl md:text-4xl font-bold'>TechCommerce</h1>
//     </Link>
//     <nav className='hidden gap-12  lg:flex 2xl:ml-16'>
//       {links.map((link, idx)=> ( 
//         <div key={idx}>
//           {pathname === link.href ? (
//             <Link className='text-lg font-semibold text-primary' href={link.href}>
//               {link.name}
//             </Link>

//           ) : (
//             <Link className='text-lg font-semibold text-primary transition duration-100 hover:text-red-700' href={link.href}>
//               {link.name}
//             </Link>
//           ) }
//         </div>
//        ))}

//     </nav>
//     <div className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-700'>
//       <Button variant={'outline'} className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24'><ShoppingBag />
//       <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
//         Chart
//       </span>
//       </Button>
//     </div>
//     </div>

//    </header>
//   )
// }

// export default Navbar



'use client'

// Import necessary modules
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/sanity';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart'


const links = [
  {name: "Home", href: "/"},
  {name: "Laptops", href: "/Laptops"},
  {name: "TVs", href: "/TVs"},
  {name: "Gadgets", href: "/Gadgets"},
]

// Define the type for the data you're fetching
interface Data {
  imageField: string;
}

// Refactor the getData function to use traditional Promises
function getData(): Promise<Data> {
  const query = "*[_type == 'logoImage'][0]"

  return client.fetch(query)
    .then(data => data as Data)
    .catch(error => {
      console.error('Error:', error);
      // Return a default Data object in case of error
      return { imageField: '' } as Data;
    });
}

const Navbar: React.FC = () => {
  const {handleCartClick} = useShoppingCart()
  const pathname = usePathname()
  const [data, setData] = useState<Data | null>(null);

  // Use React's useEffect hook to fetch data when the component mounts
  useEffect(() => {
    getData().then(fetchedData => {
      setData(fetchedData);
    });
  }, []); // Pass an empty array as the second argument to useEffect to mimic componentDidMount

  return (
    <header className='mb-8 border-b'>
      <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
        <div className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24'>
          {data && <Image src={urlFor(data.imageField).url()} 
            alt={'Hero Tech Photo'}
            className='w-full h-full object-cover object-center'
            width={500}
            height={500}
          />}
        </div>
        <Link href='/'>
          <h1 className='text-2xl md:text-4xl font-bold'>Tech<span className='text-blue-700'>Commerce</span></h1>
        </Link>
        <nav className='hidden gap-12  lg:flex 2xl:ml-16'>
          {links.map((link, idx)=> ( 
            <div key={idx}>
              {pathname === link.href ? (
                <Link className='text-lg font-semibold text-blue-700' href={link.href}>
                  {link.name}
                </Link>

              ) : (
                <Link   className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary" href={link.href}>
                  {link.name}
                </Link>
              ) }
            </div>
          ))}
        </nav>
        <div className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-700'>
          <Button 
          variant={'outline'}
          onClick={() => handleCartClick()}
          className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24'>
            <ShoppingBag />
            <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
              Chart
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar


// components/Navbar.tsx
// components/Navbar.tsx
// components/Navbar.tsx


// 'use client'
// import React from 'react';
// import { useShoppingCart } from 'use-shopping-cart';
// import { client, urlFor } from '../lib/sanity';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ShoppingBag } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// // import { useRouter } from 'next/router';
// import { usePathname, useRouter } from 'next/navigation';

// interface NavbarProps {
//   data: Data;
// }

// interface Data {
//   imageField: string;
// }

// const links = [
//   { name: "Home", href: "/" },
//   { name: "Laptops", href: "/Laptops" },
//   { name: "TVs", href: "/TVs" },
//   { name: "Gadgets", href: "/Gadgets" },
// ];

// const Navbar: React.FC<NavbarProps> = ({ data }) => {
//   const { handleCartClick } = useShoppingCart();
//   const router = useRouter();
//  const pathname = usePathname()

//   return (
//     <header className="mb-8 border-b">
//       <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
//         <div className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24">
//           {data && (
//             <Image
//               src={urlFor(data.imageField).url()}
//               alt={'Hero Tech Photo'}
//               className="w-full h-full object-cover object-center"
//               width={500}
//               height={500}
//             />
//           )}
//         </div>
//         <Link href="/">
//           <h1 className="text-2xl md:text-4xl font-bold">TechCommerce</h1>
//         </Link>
//         <nav className="hidden gap-12 lg:flex 2xl:ml-16">
//           {links.map((link, idx) => (
//             <div key={idx}>
//               {pathname === link.href ? (
//                 <Link className="text-lg font-semibold text-primary" href={link.href}>
//                   {link.name}
//                 </Link>
//               ) : (
//                 <Link className="text-lg font-semibold text-primary transition duration-100 hover:text-red-700" href={link.href}>
//                   {link.name}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </nav>
//         <div className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-red-700">
//           <Button
//             variant={'outline'}
//             onClick={() => handleCartClick()}
//             className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24"
//           >
//             <ShoppingBag />
//             <span className="hidden text-xs font-semibold text-gray-500 sm:block">Chart</span>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export async function getServerSideProps() {
//   const query = "*[_type == 'logoImage'][0]";
//   const data = await client.fetch(query).catch((error) => {
//     console.error('Error:', error);
//     return { imageField: '' };
//   });

//   return {
//     props: {
//       data,
//     },
//   };
// }

// export default Navbar;

