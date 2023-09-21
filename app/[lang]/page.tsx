import { GetInTouchButton, NewsletterButton } from '@/app/components/buttons';
import TechStack from '@/app/components/techStack';
import PageHeader from '@/app/components/pageHeader';

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className='m-2 pr-24'>
          <PageHeader style="text-9xl font-bold" heading='/home' />
        </div>
        <div className='m-9 text-center h-96'>
          <div className='flex flex-col'>
            <h1 className='
            text-7xl font-bold leading-snug
            bg-gradient-to-r from-fuchsia-400 via-red-500 to-orange-400 bg-clip-text text-transparent
            '>Hello, I&#39;m Ashutosh,</h1>
            <p className='text-7xl font-bold leading-snug'>DevOps Engineer based in India.</p>
            <p className='text-[18px] text-justify pt-10 pb-10'>I enjoy creating things that live on the internet, whether
              that be websites, applications, or anything in between. My goal is to always build
              products that provide pixel-perfect, performant experiences.</p>
          </div>
        </div>
        <div className='pt-[100px] pb-[100px] text-center'>
          <h1 className='pb-[100px] text-4xl font-bold leading-snug'>Tech that I use</h1>
          <TechStack />
        </div>
      </div>
      <div className='flex flex-row justify-center space-x-9'>
        <GetInTouchButton />
        <NewsletterButton />
      </div>
    </>
  )
}
