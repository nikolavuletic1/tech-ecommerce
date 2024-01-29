'use client'
import React, { ReactNode } from 'react'
import { CartProvider as USCProvider } from 'use-shopping-cart'

const CartProvider = ({ children }: { children: ReactNode }) => {
    return (
        <USCProvider
            mode='payment'
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
            successUrl='http://localhost:3000/stripe/success'
            cancelUrl='http://localhost:3000/stripe/error'
            currency='USD'
            billingAddressCollection={false}
            shouldPersist={true}
            language='en-US'
        >
            {children}
        </USCProvider>
    )
}

export default CartProvider

// import React, { useState, useEffect, ReactNode } from 'react';
// import { CartProvider as USCProvider } from 'use-shopping-cart'

// const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     // Once the component is mounted, we know we're on the client
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     // If we're not on the client, don't render the CartProvider
//     return <>{children}</>;
//   }

//   return (
//     <USCProvider
//       mode='payment'
//       cartMode='client-only'
//       stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
//       successUrl='http://localhost:3000/sucsess'
//       cancelUrl='http://localhost:3000/error'
//       currency='USD'
//       billingAddressCollection={true}
//       shouldPersist={true}
//       language='en-US'
//     >
//       {children}
//     </USCProvider>
//   );
// }

// export default CartProvider
