import Image from "next/image";
import { Inter } from "next/font/google";
import { ReactNode, useState, useEffect } from "react";
import slides from "./slides";

const inter = Inter({ subsets: ["latin"] });

export interface ISlide {
  children: ReactNode
  id?: string
  date?: string
  setCurrentSlide?: React.Dispatch<React.SetStateAction<number>>
  currentSlide?: number
  totalSlides?: number
}

const Slide = ({ children, id, date, setCurrentSlide, currentSlide, totalSlides }: ISlide) => {

  return <section id={id} className="text-2xl border-4 border-black min-h-[98vh] rounded-lg m-2 p-8 flex flex-col justify-center relative">

    {/* Navigators */}

    {
      setCurrentSlide !== undefined && currentSlide !== undefined && totalSlides !== undefined ? <>

      <button onClick={() => { setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1) }} className="text-4xl font-mono text-white/0 hover:text-white/25 top-0 bottom-0 left-0 w-32 absolute bg-black/0 hover:bg-black/15 hover:cursor-pointer rounded-xl m-4 transition-all ease-in duration-75">
        &lt;
      </button>

      <button onClick={() => { setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1) }} className="text-4xl font-mono text-white/0 hover:text-white/25 top-0 bottom-0 right-0 w-32 absolute bg-black/0 hover:bg-black/15 hover:cursor-pointer rounded-xl m-4 transition-all ease-in duration-75">
        &gt;
      </button>

      </>
      : null
    }



    {/* ---------- */}


    { children }
    <span className="text-lg absolute bottom-2 right-2">page {id ? Number(id) + 1 : null} | { date }</span>
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
    <main
      className={`flex flex-col ${inter.className}`}
    >
      {slides.map((slide: ISlide, idx: number) => currentSlide == idx ? <Slide totalSlides={totalSlides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} date={date.toDateString()} key={idx} id={idx.toString()}>{slide.children}</Slide> : null)}
    </main>
  );
}
