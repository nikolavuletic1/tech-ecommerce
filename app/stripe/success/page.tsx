import { Button } from '@/components/ui/button'
import { CheckCheck } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const SuccessStripe = () => {
  return (
    <div className='h-screen'>
        <div className='mt-32 md:max-w-[50vw] mx-auto'>
           <CheckCheck className='text-blue-600 w-16 h-16 mx-auto my-6'/>
           <div className='text-center'>
            <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center  '>Paymant Done!</h3>
            <p className='text-gray-800 my-2'>Thank You For Your Purchase.</p>
            <Button asChild className='mt-5'>
                <Link href='/'> 
                Go Back
                </Link>
            </Button>
           </div>
        </div>

    </div>
  )
}

export default SuccessStripe