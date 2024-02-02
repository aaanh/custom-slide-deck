import Image from "next/image";
import { Inter } from "next/font/google";
import { ReactNode, useState, useEffect } from "react";
import slides from "../slides";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export interface ISlide {
  children: ReactNode
  id?: string
  date?: string
  setCurrentSlide?: React.Dispatch<React.SetStateAction<number>>
  currentSlide?: number
  totalSlides?: number
}

export const Slide = ({ children, id, date, setCurrentSlide, currentSlide, totalSlides }: ISlide) => {

  return <section id={id} className="text-2xl border-4 border-black min-h-[98vh] rounded-lg m-2 p-8 flex flex-col justify-center relative">

    {/* Navigators */}

    {
      setCurrentSlide !== undefined && currentSlide !== undefined && totalSlides !== undefined ? <>

        <button onClick={() => { setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1) }} className="text-6xl font-mono text-white/0 hover:text-blue-500 font-bold top-0 bottom-0 left-0 w-32 absolute bg-black/0 hover:bg-black/15 hover:cursor-pointer rounded-xl m-4 transition-all ease-in duration-75">
          &lt;
        </button>

        <button onClick={() => { setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1) }} className="text-6xl font-bold font-mono text-white/0 hover:text-blue-500 top-0 bottom-0 right-0 w-32 absolute bg-black/0 hover:bg-black/15 hover:cursor-pointer rounded-xl m-4 transition-all ease-in duration-75">
          &gt;
        </button>

      </>
        : null
    }



    {/* ---------- */}


    {children}
    <span className="text-lg absolute bottom-2 right-2">page {id ? Number(id) + 1 : null} | {date}</span>
    <span className="text-lg absolute bottom-2 left-2">&copy; <a className="underline underline-offset-2" href="https://aaanh.com">Anh H. Nguyen</a>, {date?.substring(date?.length - 4)}</span>
    <span className="text-lg absolute top-2 left-2 text-rose-500">Confidentiality: 🥷🥷🥷🥷🥷</span>
    <Link href="/script" className="text-lg absolute bottom-2 left-1/2 rounded-full bg-black/0 h-8 w-8 hover:bg-black/25 flex justify-center items-center hover:no-underline">📜</Link>
  </section>
}

export default function Home() {
  const date = new Date;
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : slides.length - 1));
        break;
      case 'ArrowRight':
        setCurrentSlide((prevSlide) => (prevSlide < slides.length - 1 ? prevSlide + 1 : 0));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [])



  return (
    <>
      <Head>
        <title>UpStart 2024 | UI/UX Workshop</title>
      </Head>
      <main
        className={`flex flex-col ${inter.className}`}
      >
        {slides.map((slide: ISlide, idx: number) => currentSlide == idx ? <Slide totalSlides={totalSlides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} date={date.toDateString()} key={idx} id={idx.toString()}>{slide.children}</Slide> : null)}
      </main>
    </>
  );
}
