import { Card, CardContent } from './ui/card';
import { Building2, TrendingUp, Users, Shield, Lightbulb, Target, FileText, DollarSign, UserCheck, BarChart3, TrendingDown, Briefcase, Home } from 'lucide-react';

const Services = () => {
  const objectives = [
    {
      icon: Building2,
      titleAr: 'الاستثمار في الأراضي',
      titleEn: 'Land Investment',
      descAr: 'الاستثمار في الأراضي والمواقع ذات النمو المرتفع',
      descEn: 'Invest in lands and areas with high growth potential',
    },
    {
      icon: Target,
      titleAr: 'مشاريع متكاملة',
      titleEn: 'Integrated Projects',
      descAr: 'تطوير مشاريع سكنية وتجارية متكاملة',
      descEn: 'Develop integrated residential and commercial projects',
    },
    {
      icon: TrendingUp,
      titleAr: 'عوائد مستقرة',
      titleEn: 'Stable Returns',
      descAr: 'تحقيق عوائد مستقرة ومنتظمة للمستثمرين',
      descEn: 'Achieve stable and consistent investor returns',
    },
    {
      icon: Users,
      titleAr: 'شراكات استثمارية',
      titleEn: 'Investment Partnerships',
      descAr: 'بناء شراكات مع صناديق استثمارية',
      descEn: 'Building partnerships with investment funds',
    },
    {
      icon: Lightbulb,
      titleAr: 'تطوير السوق',
      titleEn: 'Market Development',
      descAr: 'المساهمة في تنظيم وتطوير السوق العقاري السوري',
      descEn: 'Contribute to the organization and growth of Syria\'s real estate market',
    },
  ];

  const services = [
    {
      titleAr: 'وضع فكرة المشروع',
      icon: Lightbulb,
    },
    {
      titleAr: 'إجراء دراسات الجدوى',
      icon: FileText,
    },
    {
      titleAr: 'تأمين مصادر التمويل',
      icon: DollarSign,
    },
    {
      titleAr: 'اختيار الاستشاريين والمقاولين',
      icon: UserCheck,
    },
    {
      titleAr: 'دراسة السوق',
      icon: BarChart3,
    },
    {
      titleAr: 'إعداد استراتيجية تسويق ومبيعات',
      icon: TrendingUp,
    },
    {
      titleAr: 'تطوير وإعادة تأهيل العقارات',
      icon: Home,
    },
    {
      titleAr: 'إدارة المشروع',
      icon: Briefcase,
    },
  ];

  const values = [
    { titleAr: 'الشفافية والمصداقية', titleEn: 'Transparency and credibility', icon: Shield },
    { titleAr: 'الكفاءة المهنية', titleEn: 'Professional efficiency', icon: Target },
    { titleAr: 'الابتكار العقاري', titleEn: 'Real estate innovation', icon: Lightbulb },
    { titleAr: 'حماية حقوق المستثمرين', titleEn: 'Investor rights protection', icon: Users },
    { titleAr: 'المسؤولية الاجتماعية', titleEn: 'Social responsibility', icon: Building2 },
    { titleAr: 'تحقيق عوائد مستدامة', titleEn: 'Achieving sustainable returns', icon: TrendingUp },
  ];

  const scope = [
    {
      titleAr: 'الاستحواذ على الأراضي الاستراتيجية وتطويرها',
      icon: Target,
    },
    {
      titleAr: 'بناء مشاريع عمرانية متكاملة',
      icon: Building2,
    },
    {
      titleAr: 'تأسيس وإدارة صناديق عقارية خاصة أو جماعية',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Objectives */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-tajawal text-gradient-gold">
              الأهداف الاستراتيجية
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300 group">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 text-right">
                        <h3 className="text-lg font-bold font-tajawal text-foreground leading-relaxed mb-2">
                          {objective.titleAr}
                        </h3>
                        <p className="text-foreground/80 font-tajawal leading-relaxed text-base">
                          {objective.descAr}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-tajawal text-gradient-gold">
              الخدمات
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-5 space-y-3 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-base font-bold font-tajawal text-foreground leading-relaxed">
                      {service.titleAr}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Scope of Work */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-tajawal text-gradient-gold">
              مجالات العمل
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {scope.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300 border-2 border-primary/20">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <p className="text-base font-bold font-tajawal text-foreground leading-relaxed">
                      {item.titleAr}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
