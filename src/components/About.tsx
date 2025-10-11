import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import adnanLutfi from '@/assets/adnan-lutfi.png';
import husamLutfi from '@/assets/husam-lutfi.png';

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-tajawal text-gradient-gold mb-4">
            من نحن
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg font-tajawal text-foreground/90 leading-relaxed text-center">
              شركة متخصصة في التطوير العقاري عالي القيمة في سوريا، تركيزنا الأساسي على الاستثمار في الأصول ذات الأداء المرتفع واقتناص الفرص الاستثمارية الأفضل، بالاعتماد على الخبرة الطويلة في مجال التطوير العقاري التي تمتد منذ عام ١٩٨٦
            </p>
          </div>
        </div>

        {/* Team Section - Standalone */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold font-tajawal text-gradient-gold mb-8 text-center">
            فريق العمل
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Adnan Lutfi */}
            <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src={adnanLutfi} 
                      alt="Adnan Lutfi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-tajawal text-foreground mb-1">
                      م. عدنان لطفي
                    </h4>
                    <p className="text-primary font-tajawal font-semibold mb-3">
                      الرئيس التنفيذي ومؤسس مشارك
                    </p>
                    <p className="text-foreground/80 font-tajawal leading-relaxed">
                      مهندس معماري خبرة تمتد لأكثر من ٣٥ عاماً، مع سجل حافل في تطوير مشاريع عقارية متميزة
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Husam Lutfi */}
            <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src={husamLutfi} 
                      alt="Husam Lutfi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-tajawal text-foreground mb-1">
                      م. حسام لطفي
                    </h4>
                    <p className="text-primary font-tajawal font-semibold mb-3">
                      نائب الرئيس التنفيذي ومؤسس مشارك
                    </p>
                    <p className="text-foreground/80 font-tajawal leading-relaxed">
                      مهندس معماري متخصص في إدارة المشاريع الكبرى والتصميم المعماري المعاصر
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision, Mission, Values - Tabs */}
        <Tabs defaultValue="vision" className="max-w-6xl mx-auto" dir="rtl">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto">
            <TabsTrigger value="vision" className="font-tajawal text-base py-3">الرؤية</TabsTrigger>
            <TabsTrigger value="mission" className="font-tajawal text-base py-3">الرسالة</TabsTrigger>
            <TabsTrigger value="values" className="font-tajawal text-base py-3">القيم</TabsTrigger>
          </TabsList>

          {/* Vision */}
          <TabsContent value="vision">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h4 className="text-2xl font-bold font-tajawal text-gradient-gold">
                    رؤيتنا
                  </h4>
                  <p className="text-lg font-tajawal text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                    أن نكون الشركة الرائدة في تطوير المشاريع العقارية الاستثمارية في سوريا والمرجع الموثوق للمستثمرين في تحقيق عوائد آمنة ومستدامة
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mission */}
          <TabsContent value="mission">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h4 className="text-2xl font-bold font-tajawal text-gradient-gold">
                    رسالتنا
                  </h4>
                  <div className="text-right max-w-3xl mx-auto space-y-3">
                    <p className="text-lg font-tajawal text-foreground/90 leading-relaxed">
                      <span className="font-bold">•</span> دراسة السوق بدقة واقتناص الفرص الاستثمارية الواعدة
                    </p>
                    <p className="text-lg font-tajawal text-foreground/90 leading-relaxed">
                      <span className="font-bold">•</span> تطوير فريق محترف قادر على تحقيق أعلى معايير الجودة
                    </p>
                    <p className="text-lg font-tajawal text-foreground/90 leading-relaxed">
                      <span className="font-bold">•</span> تحقيق عوائد مستدامة للمستثمرين والشركاء
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Values */}
          <TabsContent value="values">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <p className="text-lg font-bold font-tajawal text-foreground">الشفافية والمصداقية</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <p className="text-lg font-bold font-tajawal text-foreground">الكفاءة المهنية</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">💡</span>
                    </div>
                    <p className="text-lg font-bold font-tajawal text-foreground">الابتكار العقاري</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <p className="text-lg font-bold font-tajawal text-foreground">حماية حقوق المستثمرين</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <p className="text-lg font-bold font-tajawal text-foreground">المسؤولية الاجتماعية</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">📈</span>
                    </div>
                    <p className="text-lg font-bold font-tajawal text-foreground">تحقيق عوائد مستدامة</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
