import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNavBar'
import Image from 'next/image'
import { FaHome } from 'react-icons/fa'

export default function Home() {
  return (
  <main className='relative bg-black-100 flex justify-center flex-col items-center overflow-hidden
  sm:px-10 px-5'>

      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home' , link : '/' , icon: <FaHome/>}
        ]} />
        
        <Hero />
      </div>
      
  </main>
  )
}
