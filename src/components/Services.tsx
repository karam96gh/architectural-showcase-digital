import { Card, CardContent } from './ui/card';
import { Building2, TrendingUp, Users, Shield, Lightbulb, Target } from 'lucide-react';

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
      titleEn: 'Project Concept Development',
    },
    {
      titleAr: 'إجراء دراسات الجدوى',
      titleEn: 'Feasibility Studies',
    },
    {
      titleAr: 'تأمين مصادر التمويل',
      titleEn: 'Funding Solutions',
    },
    {
      titleAr: 'اختيار الاستشاريين والمقاولين',
      titleEn: 'Consultant and Contractor Selection',
    },
    {
      titleAr: 'دراسة السوق',
      titleEn: 'Market Research',
    },
    {
      titleAr: 'إعداد استراتيجية تسويق ومبيعات',
      titleEn: 'Sales and Marketing Strategy',
    },
    {
      titleAr: 'تطوير وإعادة تأهيل العقارات',
      titleEn: 'Property Redevelopment',
    },
    {
      titleAr: 'إدارة المشروع',
      titleEn: 'Project Management',
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
      titleEn: 'Acquisition and development of strategic lands',
    },
    {
      titleAr: 'بناء مشاريع عمرانية متكاملة',
      titleEn: 'Construction of integrated urban projects',
    },
    {
      titleAr: 'تأسيس وإدارة صناديق عقارية خاصة أو جماعية',
      titleEn: 'Establishment and management of private or public real estate funds',
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Objectives */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-tajawal text-gradient-gold mb-2">
              الأهداف الاستراتيجية
            </h2>
            <p className="text-3xl font-inter text-secondary">Strategic Objectives</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300 group">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-tajawal text-foreground text-right leading-relaxed">
                      {objective.titleAr}
                    </h3>
                    <p className="text-foreground/80 font-tajawal text-right leading-relaxed text-lg">
                      {objective.descAr}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-tajawal text-gradient-gold mb-2">
              الخدمات
            </h2>
            <p className="text-3xl font-inter text-secondary">Services</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold font-tajawal text-foreground leading-relaxed">
                    {service.titleAr}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scope of Work */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-tajawal text-gradient-gold mb-2">
              مجالات العمل
            </h2>
            <p className="text-3xl font-inter text-secondary">Scope of Work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {scope.map((item, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300 border-2 border-primary/20">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-lg font-tajawal text-foreground leading-relaxed text-right">
                    {item.titleAr}
                  </p>
                  <p className="text-sm font-inter text-muted-foreground text-left">
                    {item.titleEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold font-tajawal text-gradient-gold mb-2">
              القيم
            </h2>
            <p className="text-3xl font-inter text-secondary">Values</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300 group">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-tajawal text-foreground">
                      {value.titleAr}
                    </h3>
                    <p className="text-sm font-inter text-muted-foreground">
                      {value.titleEn}
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
