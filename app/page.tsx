import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import dynamic from 'next/dynamic'
// const Hero = dynamic(() => import('./components/Hero'), { ssr: false })

export default function Home() {
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <Hero />
      <Newest />
    </div>
  );
}
