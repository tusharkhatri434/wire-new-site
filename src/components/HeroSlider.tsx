import { useState, useRef } from "react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

type Slide = {
  image: string
  title: string
  subtitle: string
}

const slides: Slide[] = [
  {
    image: "/lovable-uploads/slider-1.png",
    title: "Leading the Wirevolution",
    subtitle: "Continuing a 75-year legacy of excellence from Maheshwari Industrial Corporation, we transform non-ferrous metals into premium industrial wires that power defense, aerospace, and engineering sectors across India",
  },
  {
    image: "/lovable-uploads/slider-2.png",
    title: "Leading the Wirevolution",
    subtitle: "Continuing a 75-year legacy of excellence from Maheshwari Industrial Corporation, we transform non-ferrous metals into premium industrial wires that power defense, aerospace, and engineering sectors across India",
  },
  {
    image: "/lovable-uploads/slider-3.jpg",
  title: "Leading the Wirevolution",
    subtitle: "Continuing a 75-year legacy of excellence from Maheshwari Industrial Corporation, we transform non-ferrous metals into premium industrial wires that power defense, aerospace, and engineering sectors across India",
  },
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const touchStartX = useRef<number | null>(null)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const deltaX = touchStartX.current - touchEndX

    if (deltaX > 50) nextSlide()
    else if (deltaX < -50) prevSlide()

    touchStartX.current = null
  }

  const { image, title, subtitle } = slides[currentIndex]

  return (
    <div
      className="relative w-full sm:h-[80vh] h-[70vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background image */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center pl-10 sm:pl-24">
        {/* <h1 className="text-4xl sm:text-5xl text-yellow-500 font-bold drop-shadow-lg md:mb-4">
          {title}
        </h1>
        <p className="text-lg max-w-3xl sm:text-xl text-white drop-shadow-md">
          {subtitle}
        </p> */}
        <div className="max-w-4xl">
          <div className="animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-brand-gold bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
          </div>
            <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl font-montserrat leading-relaxed">
                {subtitle}
              </p>
            </div>
          
            <div className="animate-slide-in-up hidden sm:flex" style={{ animationDelay: '0.4s' }}>
              <Button 
                asChild 
                className="bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold text-brand-blue px-8 py-6 text-base font-semibold font-montserrat hover-lift hover-glow transition-all duration-300 depth-2"
              >
                <Link to="/products">Explore Our Product Range</Link>
              </Button>
            </div>
        </div>

      </div>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex
                ? "bg-yellow-500 scale-125"
                : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black py-2 px-4 rounded-full text-2xl"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black py-2 px-4 rounded-full text-2xl"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  )
}
