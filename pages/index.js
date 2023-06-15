import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from "@/components/button";
import Trial from "@/components/home";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="mx-20 py-20">
      <h1 className="text-3xl font-bold pb-3">Hello world</h1>
        <Trial/>
        <Button/>
    </main>
  )
}
