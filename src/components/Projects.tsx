import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import projectBg from '@/assets/project-bg.jpg';

const Projects = () => {
  const projects = [
    {
      nameAr: null,
      nameTr: 'Yaşım Evleri',
      area: '21,200',
      location: 'Istanbul',
      videoLink: 'https://youtu.be/qDQO0gcKy9Y?si=HDzpxVoVOonJ0SEy',
    },
    {
      nameAr: null,
      nameTr: 'Bizim Konaklar',
      area: '14,300',
      location: 'Istanbul',
      videoLink: null,
    },
    {
      nameAr: null,
      nameTr: 'Zümrüd-ü Anka Evleri',
      area: '29,600',
      location: 'Istanbul',
      videoLink: null,
    },
    {
      nameAr: null,
      nameTr: 'Bilsa Bilgin Sitesi',
      area: '11,500',
      location: 'Istanbul',
      videoLink: null,
    },
    {
      nameAr: 'مجمع قرطبة',
      nameTr: null,
      area: '29,250',
      location: 'Aleppo',
      driveLink: 'https://drive.google.com/drive/folders/1GL2elTVpDhz4lfPOSzt1a3v0F-JSbB7R?usp=drive_link',
    },
    {
      nameAr: 'مجمع قرطبة',
      nameTr: null,
      area: '16,250',
      location: 'Aleppo',
      driveLink: 'https://drive.google.com/drive/folders/1GL2elTVpDhz4lfPOSzt1a3v0F-JSbB7R?usp=drive_link',
    },
    {
      nameAr: 'مجمع الاتحاد النسائي',
      nameTr: null,
      area: '61,200',
      location: 'Aleppo',
      driveLink: 'https://drive.google.com/drive/folders/1vzUS7UJcY6Hr0ubGET95E6-D6YrMJBN8?usp=drive_link',
    },
    {
      nameAr: 'مجمع الضباط المتقاعدين',
      nameTr: null,
      area: '6,930',
      location: 'Aleppo',
      driveLink: null,
    },
  ];

  const stats = [
    {
      labelAr: 'المشاريع المطورة',
      labelEn: 'Developed Projects',
      value: '8+',
    },
    {
      labelAr: 'المساحة الإجمالية',
      labelEn: 'Total Area',
      value: '477,200 m²',
    },
    {
      labelAr: 'مشاريع اسطنبول',
      labelEn: 'Istanbul Projects',
      value: '153,200 m²',
    },
    {
      labelAr: 'مشاريع حلب',
      labelEn: 'Aleppo Projects',
      value: '324,000 m²',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${projectBg})` }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-tajawal text-gradient-gold mb-2">
            مشاريعنا
          </h2>
          <p className="text-3xl font-inter text-secondary">Our Projects</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300 border-2 border-primary/20">
              <CardContent className="p-6 text-center space-y-3">
                <p className="text-4xl font-bold text-primary font-inter">{stat.value}</p>
                <h3 className="text-lg font-bold font-tajawal text-foreground">{stat.labelAr}</h3>
                <p className="text-sm font-inter text-muted-foreground">{stat.labelEn}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 group">
              <CardContent className="p-0">
                {/* Project Image Placeholder */}
                <div className="h-56 bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                  <div className="relative z-10 text-center p-6">
                    <Badge className="mb-4 bg-primary text-primary-foreground">
                      {project.location}
                    </Badge>
                    <h3 className={`text-2xl font-bold ${project.nameAr ? 'font-tajawal' : 'font-inter'} text-white`}>
                      {project.nameAr || project.nameTr}
                    </h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-tajawal text-muted-foreground">المساحة</p>
                      <p className="text-xl font-bold text-primary font-inter">
                        {project.area} m²
                      </p>
                    </div>
                    {(project.videoLink || project.driveLink) && (
                      <a
                        href={project.videoLink || project.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors group-hover:translate-x-1 transform duration-300"
                      >
                        <span className="text-sm font-inter">
                          {project.videoLink ? 'Video' : 'Details'}
                        </span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Badge variant="outline" className="font-tajawal">
                      {project.location === 'Istanbul' ? 'اسطنبول' : 'حلب'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
