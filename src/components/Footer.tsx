import logoLight from '@/assets/logo-light.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img src={logoLight} alt="ATHAR Developments" className="h-16 w-auto" />

          {/* Company Name */}
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold font-tajawal">أثر للتطوير العقاري</h3>
            <p className="text-xl font-inter text-primary-foreground/80">ATHAR Developments</p>
          </div>

          {/* Tagline */}
          <p className="text-center text-primary-foreground/70 font-tajawal max-w-2xl">
            شركة متخصصة في التطوير العقاري عالي القيمة في سوريا منذ 1986
          </p>

          {/* Divider */}
          <div className="w-32 h-0.5 bg-primary/50" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-primary-foreground/60 font-inter">
              © {currentYear} ATHAR Developments. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60 font-tajawal">
              جميع الحقوق محفوظة © {currentYear} أثر للتطوير العقاري
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
