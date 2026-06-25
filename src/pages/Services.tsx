import { Link } from 'react-router-dom';
import { HeartPulse, Zap, Scan, Shield, Lock, Info, Activity } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { SectionWrapper } from '../components/shared/SectionWrapper';
import { CTABanner } from '../components/shared/CTABanner';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { services, faqItems, remoteTherapyInfo } from '../data/services';
import { formatPrice } from '../utils/currency';

const iconMap: Record<string, React.ElementType> = {
  HeartPulse, Zap, Scan, Activity,
};

export function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-violet-50 to-stone-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 text-center">
            Услуги
          </h1>
          <p className="mt-4 text-stone-500 text-center max-w-2xl mx-auto">
            Холистични терапии и диагностика за подпомагане на вашето физическо,
            емоционално и енергийно благополучие.
          </p>
        </div>
      </section>

      {/* Services */}
      <SectionWrapper>
        <div className="space-y-12">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || HeartPulse;
            return (
              <Card key={service.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  {service.image && (
                    <div className="p-6 flex items-start">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full rounded-xl object-contain"
                      />
                    </div>
                  )}
                  <CardContent className={`py-6 ${service.image ? 'pr-6' : 'px-6 md:col-span-2'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-violet-600" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-stone-800">{service.name}</h3>
                    </div>
                    <p className="text-stone-500 text-sm mb-4">{service.shortDescription}</p>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary">{service.duration}</Badge>
                      {service.price !== undefined && <span className="text-violet-600 font-bold">{formatPrice(service.price)}</span>}
                    </div>
                    <div className="text-stone-600 text-sm leading-relaxed whitespace-pre-line mb-4">
                      {service.description}
                    </div>
                    {service.details && (
                      <ul className="space-y-2 mb-4">
                        {service.details.map((detail, i) => (
                          <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                            <span className="text-violet-600 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link to="/contacts">
                      <Button>Запази час</Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Remote Therapies Info */}
      <SectionWrapper bg="stone-100">
        <div className="max-w-3xl mx-auto">
          <Card className="border-l-4 border-l-violet-600">
            <CardContent className="py-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-violet-600" />
                <h3 className="font-serif text-xl font-semibold text-stone-800">{remoteTherapyInfo.title}</h3>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">
                {remoteTherapyInfo.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <h2 className="font-serif text-3xl font-bold text-stone-800 text-center mb-10">
          Често задавани въпроси
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-2xl border border-stone-200 p-6">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      {/* Trust Badges */}
      <SectionWrapper bg="stone-100">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-stone-600">
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-violet-600" />
            <span className="text-sm font-medium">Поверителна консултация</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-violet-600" />
            <span className="text-sm font-medium">Професионален подход</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-violet-600" />
            <span className="text-sm font-medium">Присъствено и дистанционно</span>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Готови сте да направите първата стъпка?"
        buttonText="Запази час"
        href="/contacts"
      />
    </>
  );
}
