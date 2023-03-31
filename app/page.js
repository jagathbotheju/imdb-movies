import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className='bg-red-400 p-5 font-bold'>Hello</h1>
    </main>
  )
}
