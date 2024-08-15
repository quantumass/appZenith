export const metadata = {
  title: 'Home - AppZenith',
  description: 'AppZenith specializes in diverse mobile app solutions, from POS systems to medical and IoT applications. We bring innovation and expertise to every project, delivering tailored apps that drive success.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Faq from '@/components/faq'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Faq />
      <Newsletter />
    </>
  )
}
