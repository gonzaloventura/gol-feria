'use client'
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.png"

export default function Home() {

  return (
    <>
      <main
        className="flex flex-col text-4xl gap-40 items-center fondo-cielo"
      >
        <div className="mt-[30vh]">
          <Image
            width={800}
            height={800}
            src={logo}
          />
          <div className="flex justify-center  mt-[30vh]">
            <Link
              href={"/game"}
              className="transition-all duration-500 border border-orange-500 bg-orange-500 bg-opacity-50 text-white rounded-full shadow px-16 py-4 animate-pulse scale-125 focus:shadow focus:shadow-orange-500"
            >
              Comenzar
            </Link>
          </div>
        </div>
        <video muted autoPlay loop className='video'>
          <source src="./fondo.mp4" type="video/mp4" />
        </video>
      </main>
    </>
  )
}
