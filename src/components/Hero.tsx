import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import logoMark from '@/assets/logo-dark.png';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: brand beige base, soft earthy glows, logo watermark, fine grain */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            'radial-gradient(ellipse 55% 65% at 18% 30%, hsl(29 47% 37% / 0.35), transparent 70%)',
            'radial-gradient(ellipse 45% 50% at 30% 75%, hsl(33 29% 61% / 0.55), transparent 70%)',
            'radial-gradient(ellipse 60% 60% at 85% 10%, hsl(0 0% 100% / 0.7), transparent 70%)',
            'linear-gradient(135deg, #efe6da 0%, #e2d3c0 55%, #d6c2a8 100%)',
          ].join(','),
        }}
      />
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="absolute left-[-6%] bottom-[-4%] w-[70%] max-w-[900px] opacity-[0.12] pointer-events-none select-none"
      />
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-right">
        <div className="max-w-4xl mr-0 ml-auto space-y-6 animate-fade-in">
          {/* Arabic Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl word-like-heading">
            <span className="text-primary-dark">أثر</span>
            <br />
            <span className="text-secondary">للتطوير العقاري</span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-secondary/80 word-like-text max-w-2xl leading-relaxed">
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
