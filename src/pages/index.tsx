import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>Intro</div>
        <div>Experience</div>
        <div>Education</div>
        <div>Skills</div>
        <div>Languages</div>
        <div>Contact</div>

    </main>
  )
}
