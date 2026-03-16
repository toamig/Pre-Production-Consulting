import { ArrowRight, ChevronDown } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-8 md:pt-24 md:pb-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Start your UE5 project with architecture that scales.
          </h1>
        </FadeIn>
        <FadeIn delay={120}>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            I help teams define gameplay architecture, pipelines, and reference
            implementations in pre-production — so you don't pay for rewrites later.
          </p>
        </FadeIn>
        <FadeIn delay={240}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#contact');
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Book a call
            <ArrowRight size={18} />
          </a>
          <button
            onClick={() => handleScroll('#process')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            How it works
            <ChevronDown size={18} />
          </button>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
