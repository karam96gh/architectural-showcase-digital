import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import CountUp from './CountUp';

// Import project images
import yasimEvleriImg from '@/assets/projects/yasim-evleri.jpg';
import bizimKonaklarImg from '@/assets/projects/bizim-konaklar.jpg';
import zumrudAnka1Img from '@/assets/projects/زمرد.webp';
import bilsa1Img from '@/assets/projects/bilsa.jpg';
import cordobaImg from '@/assets/projects/qur1.webp';
import cordobaImg2 from '@/assets/projects/qur2.webp';



import womenUnionImg from '@/assets/projects/women.jpg';
import officersImg from '@/assets/projects/officerss.webp';


const Projects = () => {
  const projects = [
    {
      nameAr: null,
      nameTr: 'Yaşım Evleri',
      area: '21,200',
      location: 'Istanbul',
      locationAr: 'اسطنبول',
      image: yasimEvleriImg,
      videoLink: 'https://youtu.be/qDQO0gcKy9Y?si=HDzpxVoVOonJ0SEy',
    },
    {
      nameAr: null,
      nameTr: 'Bizim Konaklar',
      area: '14,300',
      location: 'Istanbul',
      locationAr: 'اسطنبول',
      image: bizimKonaklarImg,
      videoLink: null,
    },
    {
      nameAr: null,
      nameTr: 'Zümrüd-ü Anka Evleri',
      area: '29,600',
      location: 'Istanbul',
      locationAr: 'اسطنبول',
      image: zumrudAnka1Img,
      videoLink: null,
    },
    {
      nameAr: null,
      nameTr: 'Bilsa Bilgin Sitesi',
      area: '11,500',
      location: 'Istanbul',
      locationAr: 'اسطنبول',
      image: bilsa1Img,
      videoLink: null,
    },
    {
      nameAr: '1مجمع قرطبة',
      nameTr: null,
      area: '29,250',
      location: 'Aleppo',
      locationAr: 'حلب',
      image: cordobaImg,
      driveLink: 'https://drive.google.com/drive/folders/1GL2elTVpDhz4lfPOSzt1a3v0F-JSbB7R?usp=drive_link',
    },
    {
      nameAr: '2مجمع قرطبة',
      nameTr: null,
      area: '16,250',
      location: 'Aleppo',
      locationAr: 'حلب',
      image: cordobaImg2,
      driveLink: 'https://drive.google.com/drive/folders/1GL2elTVpDhz4lfPOSzt1a3v0F-JSbB7R?usp=drive_link',
    },
    {
      nameAr: 'مجمع الاتحاد النسائي',
      nameTr: null,
      area: '61,200',
      location: 'Aleppo',
      locationAr: 'حلب',
      image: womenUnionImg,
      driveLink: 'https://drive.google.com/drive/folders/1vzUS7UJcY6Hr0ubGET95E6-D6YrMJBN8?usp=drive_link',
    },
    {
      nameAr: 'مجمع الضباط المتقاعدين',
      nameTr: null,
      area: '6,930',
      location: 'Aleppo',
      locationAr: 'حلب',
      image: officersImg,
      driveLink: null,
    },
  ];

  const stats = [
    {
      labelAr: 'المشاريع المطورة',
      labelEn: 'Developed Projects',
      value: 8,
      suffix: '+',
    },
    {
      labelAr: 'المساحة الإجمالية',
      labelEn: 'Total Area',
      value: 477200,
      suffix: ' m²',
    },
    {
      labelAr: 'مشاريع اسطنبول',
      labelEn: 'Istanbul Projects',
      value: 153200,
      suffix: ' m²',
    },
    {
      labelAr: 'مشاريع حلب',
      labelEn: 'Aleppo Projects',
      value: 324000,
      suffix: ' m²',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-tajawal text-gradient-gold">
            مشاريعنا
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 group hover:-translate-y-1 transform">
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.nameAr || project.nameTr || ''} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                  <div className="absolute bottom-4 right-4 left-4 z-10">
                    <Badge className="mb-2 bg-primary text-primary-foreground shadow-gold font-tajawal text-xs">
                      {project.locationAr}
                    </Badge>
                    <h3 className={`text-xl sm:text-2xl font-bold ${project.nameAr ? 'font-tajawal text-right' : 'font-inter text-left'} text-white drop-shadow-lg`}>
                      {project.nameAr || project.nameTr}
                    </h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 bg-card text-center">
                  <p className="text-sm font-tajawal text-muted-foreground mb-1">المساحة</p>
                  <p className="text-xl font-bold text-primary font-inter">
                    {project.area} <span className="text-base">m²</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics with CountUp Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300">
              <CardContent className="p-3 text-center space-y-1">
                <p className="text-xl sm:text-2xl font-bold text-primary font-inter">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2500} />
                </p>
                <h3 className="text-xs sm:text-sm font-bold font-tajawal text-foreground">{stat.labelAr}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
