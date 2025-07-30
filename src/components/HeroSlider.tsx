import { useState, useRef } from "react"

type Slide = {
  image: string
  title: string
  subtitle: string
}

const slides: Slide[] = [
  {
    image: "/lovable-uploads/slider-1.png",
    title: "Leading the Wirevolution",
    subtitle: "Where innovation meets metallurgy and define reliability.",
  },
  {
    image: "/lovable-uploads/slider-2.png",
    title: "Leading the Wirevolution",
    subtitle: "Where innovation meets metallurgy and define reliability.",
  },
  {
    image: "/lovable-uploads/slider-3.jpg",
  title: "Leading the Wirevolution",
    subtitle: "Where innovation meets metallurgy and define reliability.",
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
      className="relative w-full sm:h-[80vh] h-[50vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background image */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center pl-24">
        <h1 className="text-4xl sm:text-5xl text-yellow-500 font-bold drop-shadow-lg md:mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white drop-shadow-md">
          {subtitle}
        </p>
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
