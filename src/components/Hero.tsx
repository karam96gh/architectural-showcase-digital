import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-right">
        <div className="max-w-4xl mr-0 ml-auto space-y-6 animate-fade-in">
          {/* Arabic Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl word-like-heading">
            <span className="text-gradient-gold">لومار</span>
            <br />
            <span className="text-black">للتطوير العقاري</span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-black/80 word-like-text max-w-2xl leading-relaxed">
            شركة متخصصة في التطوير العقاري عالي القيمة في سوريا منذ 1986
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-start items-start pt-6">
            <Button
              size="default"
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-gold word-like-heading text-base px-6 py-3 hover:scale-105 transform transition-all duration-300"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              استكشف مشاريعنا
            </Button>
            <Button
              size="default"
              variant="outline"
              className="border-2 border-primary bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground word-like-heading text-base px-6 py-3 hover:scale-105 transform transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              تواصل معنا
            </Button>
          </div>

        </div>
        
        {/* Scroll Indicator - Centered */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
