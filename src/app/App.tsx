import { useState, useEffect } from 'react';
import { Slide1 } from './components/slides/Slide1';
import { Slide2 } from './components/slides/Slide2';
import { Slide3 } from './components/slides/Slide3';
import { Slide4 } from './components/slides/Slide4';
import { Slide5 } from './components/slides/Slide5';
import { Slide6 } from './components/slides/Slide6';
import { Slide7 } from './components/slides/Slide7';
import { Slide8 } from './components/slides/Slide8';
import { SlideInfraestrutura } from './components/slides/SlideInfraestrutura';
import { Slide9 } from './components/slides/Slide9';
import { Slide10 } from './components/slides/Slide10';
import { Slide11 } from './components/slides/Slide11';
import { Slide12 } from './components/slides/Slide12';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    Slide1, Slide2, Slide3, Slide4, Slide5,
    Slide6, Slide7, Slide8, SlideInfraestrutura, Slide9, Slide10, Slide11, Slide12
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-screen h-screen bg-slate-950 flex flex-col overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-hidden"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="bg-slate-900 border-t border-slate-800 p-4 flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-lg bg-blue-600 text-white disabled:bg-slate-700 disabled:text-slate-500 hover:bg-blue-700 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-lg bg-blue-600 text-white disabled:bg-slate-700 disabled:text-slate-500 hover:bg-blue-700 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-20 right-6 text-slate-400 text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}