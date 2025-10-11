import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      country: 'سوريا',
      branches: [
        { city: 'حلب', location: 'الفرقان - أمام الحرم الجامعي' },
        { city: 'دمشق', location: 'طريق المزة' },
      ],
    },
  ];

  const contacts = [
    {
      type: 'email',
      icon: Mail,
      value: 'info@lumardevelop.com',
      link: 'mailto:info@lumardevelop.com',
    },
    {
      type: 'email',
      icon: Mail,
      value: 'hussam@lumardevelop.com',
      link: 'mailto:hussam@lumardevelop.com',
    },
    {
      type: 'phone',
      icon: Phone,
      value: '+963 949 500 002',
      link: 'tel:+963949500002',
    },
    {
      type: 'phone',
      icon: Phone,
      value: '+90 553 463 1977',
      link: 'tel:+905534631977',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-tajawal text-gradient-gold mb-2">
            تواصل معنا
          </h2>
          <p className="text-3xl font-inter text-secondary">Contact Us</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Office Locations */}
          <Card className="shadow-elegant">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-tajawal text-foreground">الفروع</h3>
                </div>
              </div>

              {offices.map((office, index) => (
                <div key={index} className="space-y-3 flex-grow">
                  <h4 className="text-xl font-bold font-tajawal text-primary border-b-2 border-primary/20 pb-2">
                    الدولة: {office.country}
                  </h4>
                  {office.branches.map((branch, branchIndex) => (
                    <div key={branchIndex} className="pr-4 space-y-1">
                      <p className="text-lg font-tajawal text-foreground">
                        <span className="font-bold text-accent">فرع {branch.city}:</span>
                      </p>
                      <p className="text-foreground/80 font-tajawal pr-4">
                        {branch.location}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-elegant">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-tajawal text-foreground">التواصل</h3>
                </div>
              </div>

              <div className="space-y-2 flex-grow">
                {contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-lg font-inter text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-6">
                <Button
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-gold font-tajawal text-xl py-7 hover:scale-105 transform transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:info@lumardevelop.com'}
                >
                  أرسل لنا رسالة
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
