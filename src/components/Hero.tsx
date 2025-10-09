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
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Arabic Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-tajawal">
            <span className="text-gradient-gold">لومار</span>
            <br />
            <span className="text-primary-foreground">للتطوير العقاري</span>
          </h1>

          {/* English Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-primary-foreground/90">
            LUMAR Developments
          </h2>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-primary-foreground/80 font-tajawal max-w-3xl mx-auto leading-relaxed">
            شركة متخصصة في التطوير العقاري عالي القيمة في سوريا منذ 1986
          </p>

          <p className="text-lg sm:text-xl text-primary-foreground/70 font-inter max-w-3xl mx-auto">
            Real Estate Development in the New Syria Since 1986
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-gold font-tajawal text-xl px-10 py-7 hover:scale-105 transform transition-all duration-300"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              استكشف مشاريعنا
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground font-tajawal text-xl px-10 py-7 hover:scale-105 transform transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              تواصل معنا
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce cursor-pointer" onClick={scrollToAbout}>
            <ArrowDown className="h-8 w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
