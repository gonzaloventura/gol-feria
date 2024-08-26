'use client'
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.png"

export default function Home() {

  return (
    <>
      <main
        className="flex flex-col text-4xl items-center"
      >
        <div className="mt-[100%]">
          {/* <h1 className='animate-fade animate-once animate-delay-500 animate-duration-[500ms] text-6xl drop-shadow-lg text-center mt-20'>Conocé Brasil de la mano de GOL</h1>

          <Image
            width={800}
            height={800}
            src={logo}
            className="animate-jump-in animate-once animate-delay-500 animate-duration-[3500ms] mt-24"
          /> */}
          <div className="flex justify-end mt-[30vh]">
            <Link
              href={"/game"}
              className="animate-fade animate-once animate-delay-1000 transition-all duration-500 border border-gray-500 bg-gray-800 bg-opacity-50 text-white rounded-full shadow px-16 py-4 scale-125 focus:shadow focus:shadow-gray-500"
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
