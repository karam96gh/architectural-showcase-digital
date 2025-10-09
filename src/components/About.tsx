import { Card, CardContent } from './ui/card';
import adnanImg from '@/assets/adnan-lutfi.png';
import husamImg from '@/assets/husam-lutfi.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold font-tajawal text-gradient-gold">
            من نحن
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-inter text-secondary">
            About Us
          </h3>
          
          <div className="space-y-6">
            <p className="text-foreground font-tajawal text-right leading-loose text-xl">
              تُعد لومار من الشركات المتخصصة في التطوير العقاري، وتركز على تطوير واستثمار الأصول العقارية ذات القيمة العالية في سوريا، خاصة في ظل التعافي الاقتصادي المتسارع بعد الحرب. تهدف الشركة إلى خلق فرص استثمارية مجدية وآمنة للمستثمرين الأفراد والمؤسسات، بما يحقق عوائد مستدامة من خلال أدوات حديثة ومنهجية احترافية.
            </p>
          </div>

          {/* Founded Year */}
          <div className="inline-block bg-primary/10 border-2 border-primary rounded-lg px-8 py-4 mt-8">
            <p className="text-3xl font-bold text-primary font-tajawal">
              سنة التأسيس: <span className="text-4xl">1986</span>
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl sm:text-4xl font-bold font-tajawal text-center mb-12 text-gradient-gold">
            فريق العمل
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Adnan Lutfi */}
            <Card className="overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={adnanImg} 
                    alt="Arch. Adnan Lutfi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 text-center">
                  <h4 className="text-2xl font-bold font-tajawal text-primary">
                    المهندس عدنان لطفي
                  </h4>
                  <p className="text-xl font-inter text-secondary">
                    Arch. Adnan Lutfi
                  </p>
                  <p className="text-lg font-tajawal text-accent">
                    المؤسس ورئيس الشركة
                  </p>
                  <p className="text-md font-inter text-muted-foreground">
                    Founder & Company Manager
                  </p>
                  <div className="pt-4 space-y-2 text-foreground/80">
                    <p className="font-tajawal text-right">
                      مع أكثر من 50 عاماً من الخبرة، جمع بين العمق الهندسي والحنكة التجارية
                    </p>
                    <p className="font-inter text-sm text-left">
                      Co-founder of the Syrian Businessmen Association in Turkey (SURYAD) and member of the Turkish Businessmen Association. With over 50 years of experience, he has combined engineering depth with business acumen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Husam Lutfi */}
            <Card className="overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={husamImg} 
                    alt="Arch. Husam Lutfi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 text-center">
                  <h4 className="text-2xl font-bold font-tajawal text-primary">
                    المهندس حسام لطفي
                  </h4>
                  <p className="text-xl font-inter text-secondary">
                    Arch. Husam Lutfi
                  </p>
                  <p className="text-lg font-tajawal text-accent">
                    المدير التنفيذي
                  </p>
                  <p className="text-md font-inter text-muted-foreground">
                    CEO
                  </p>
                  <div className="pt-4 space-y-2 text-foreground/80">
                    <p className="font-tajawal text-right">
                      بكالوريوس هندسة معمارية - ماجستير تخطيط حضري
                    </p>
                    <p className="font-tajawal text-right text-sm">
                      تخرّج عام 1974 من كلية الهندسة المعمارية - جامعة حلب
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20">
          {/* Vision */}
          <Card className="shadow-elegant hover:shadow-gold transition-all duration-300 border-2 border-primary/20">
            <CardContent className="p-8 space-y-4">
              <h4 className="text-3xl font-bold font-tajawal text-gradient-gold text-center">
                الرؤيا
              </h4>
              <p className="text-xl font-inter text-secondary text-center">Vision</p>
              <div className="space-y-3 pt-4">
                <p className="text-foreground font-tajawal text-right leading-relaxed">
                  أن نكون الشركة الرائدة في التطوير العقاري في سوريا، ومرجعًا موثوقًا للمستثمرين الباحثين عن فرص نمو حقيقية ضمن بيئة آمنة ومحفزة.
                </p>
                <p className="text-foreground/80 font-inter text-left text-sm leading-relaxed">
                  To be the leading real estate development in Syria, and the trusted reference for investors seeking real growth opportunities in a safe and promising environment.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="shadow-elegant hover:shadow-gold transition-all duration-300 border-2 border-primary/20">
            <CardContent className="p-8 space-y-4">
              <h4 className="text-3xl font-bold font-tajawal text-gradient-gold text-center">
                الرسالة
              </h4>
              <p className="text-xl font-inter text-secondary text-center">Mission</p>
              <div className="space-y-3 pt-4">
                <p className="text-foreground font-tajawal text-right leading-relaxed">
                  تقديم حلول استثمارية عقارية مبنية على تحليل دقيق للسوق، وتطوير الأصول العقارية بأسلوب احترافي، وتحقيق عوائد مستدامة من خلال الحوكمة والشفافية وكفاءة التشغيل.
                </p>
                <p className="text-foreground/80 font-inter text-left text-sm leading-relaxed">
                  To deliver real estate investment solutions based on deep market analysis, develop assets professionally, and generate sustainable returns through governance, transparency, and operational excellence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
