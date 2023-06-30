import { GetInTouchButton, NewsletterButton } from '@/components/buttons'
import Ribbon from '@/components/ribbon'
import TechStack from '@/components/techStack'

import Image from 'next/image'


export default function Home() {
  return (

    <main className='container'>
      <div className="flex flex-row">
        <div className='place-self-center w-1/2 h-96'>
          <h1 className='
            text-7xl font-bold leading-snug
            bg-gradient-to-r from-fuchsia-400 via-red-500 to-orange-400 bg-clip-text text-transparent
            '>Hello, I&#39;m Ashutosh,</h1>
          <p className='text-7xl font-bold leading-snug'>DevOps Engineer based in India.</p>
          <p className='text-[18px] text-justify pt-10 pb-10'>I enjoy creating things that live on the internet, whether
            that be websites, applications, or anything in between. My goal is to always build
            products that provide pixel-perfect, performant experiences.</p>
          <div className='flex flex-row place-self-center space-x-9'>
            <GetInTouchButton />
            <NewsletterButton />
          </div>
        </div>
        <div className='w-1/2 pt-[100px] pl-60'>
          <Image src="/myself.jpg" alt='' width={400} height={400} />
        </div>
      </div>
      <Ribbon />
      <div className='pt-[100px] pb-[100px]'>
        <h1 className='pb-[100px] text-4xl font-bold leading-snug'>Tech that I use</h1>
        <TechStack />
      </div>
    </main >

  )
}
