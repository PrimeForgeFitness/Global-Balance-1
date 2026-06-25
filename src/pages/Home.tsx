import { Link } from 'react-router-dom';
import { Scan, Zap, HeartPulse, Star, Activity } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { ImagePlaceholder } from '../components/ui/image-placeholder';
import { SectionWrapper } from '../components/shared/SectionWrapper';
import { CTABanner } from '../components/shared/CTABanner';
import { testimonials } from '../data/testimonials';
import { services } from '../data/services';
import { formatPrice } from '../utils/currency';

const iconMap: Record<string, React.ElementType> = {
  HeartPulse, Zap, Scan, Activity,
};

const whyCards = [
  { icon: Scan, title: 'Точна диагностика', text: 'Биорезонансен анализ с 4D торсионен скенер Биофилия за детайлна информация за вашето състояние.' },
  { icon: Zap, title: 'Холистични терапии', text: 'Райф терапия и физиотерапия за подпомагане на физическото и енергийно благополучие.' },
  { icon: HeartPulse, title: 'Цялостен подход', text: 'Работим едновременно на физическо, емоционално и енергийно ниво, защото всичко е свързано.' },
];

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf8f5] min-h-[88vh] flex items-center">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, #c4b5fd 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        {/* Ambient glow blobs */}
        <div className="absolute top-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-violet-200/30 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] right-[20%] w-[400px] h-[400px] rounded-full bg-teal-200/30 blur-[100px] pointer-events-none" />

        {/* Animated rings — positioned right-center */}
        <div className="absolute right-[4%] md:right-[8%] top-1/2 -translate-y-1/2 pointer-events-none select-none">
          <div className="relative w-[420px] h-[420px] md:w-[560px] md:h-[560px]">
            {/* Static outer ring */}
            <div className="absolute inset-0 rounded-full border border-violet-300/30" />
            {/* Expanding rings */}
            <div className="absolute inset-0 rounded-full border border-violet-300/40 animate-ring" />
            <div className="absolute inset-0 rounded-full border border-teal-300/30 animate-ring-2" />
            <div className="absolute inset-0 rounded-full border border-violet-200/30 animate-ring-3" />
            {/* Inner core glow */}
            <div className="absolute inset-[20%] rounded-full bg-violet-200/20 blur-2xl" />
            <div className="absolute inset-[32%] rounded-full bg-teal-200/20 blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
            {/* Center dot */}
            <div className="absolute inset-[46%] rounded-full bg-violet-400/50 animate-float shadow-[0_0_30px_10px_rgba(139,92,246,0.25)]" />
          </div>
        </div>

        {/* Left gradient fade so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-violet-100 text-violet-700 border border-violet-200/60 mb-6">
              Биорезонансен център
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight">
              Холистичен подход. Индивидуално отношение.
            </h1>
            <p className="mt-6 text-lg text-stone-500 leading-relaxed">
              Съчетаваме професионален опит, специализирани знания и съвременни технологии,
              за да подпомогнем постигането на по-добър баланс, хармония и цялостно благополучие.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" onClick={() => window.location.href = '/contacts'}>
                Запази час
              </Button>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-stone-300 text-stone-700 bg-white/60 hover:bg-white hover:border-stone-400"
                >
                  Разгледай услугите
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Global Balance */}
      <SectionWrapper bg="stone-100">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 text-center mb-12">
          Защо Глобъл Баланс
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whyCards.map((card) => (
            <div key={card.title} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-4">
                <card.icon className="h-7 w-7 text-violet-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-800 mb-2">{card.title}</h3>
              <p className="text-stone-500 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 text-center mb-12">
          Нашите услуги
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || HeartPulse;
            return (
              <Card key={service.id} className="border-t-4 border-t-violet-600 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-violet-600" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-stone-800">{service.name}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-500 text-sm mb-3">{service.shortDescription}</p>
                  {service.price !== undefined && <p className="text-violet-600 font-semibold mb-4">от {formatPrice(service.price)}</p>}
                  <Link to="/services">
                    <Button variant="outline" size="sm">Научи повече</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper bg="stone-100">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 text-center mb-12">
          Какво казват нашите клиенти
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card key={t.id}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  {t.image ? (
                    <img src={t.image} alt={t.author} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                  ) : (
                    <ImagePlaceholder className="w-16 h-16 rounded-full flex-shrink-0" aspect="square" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-stone-800">{t.author}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-violet-600 text-violet-600" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed italic">"{t.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <CTABanner
        title="Готови сте да направите първата стъпка?"
        buttonText="Запази своя час сега"
        href="/contacts"
      />

      {/* Disclaimer */}
      <SectionWrapper bg="stone-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-xl font-semibold text-stone-800 mb-4">
            Важно уточнение
          </h3>
          <div className="text-stone-600 text-sm leading-relaxed space-y-3">
            <p>
              Предлаганите в нашия център услуги са насочени към подпомагане на общото благосъстояние и поддържането на балансиран начин на живот.
            </p>
            <p>
              Използваните методи и апаратура имат допълващ характер и са предназначени да подкрепят естествените процеси в организма.
            </p>
            <p>
              Нашият център не е лечебно заведение и не извършва медицинска дейност. Не поставяме медински диагнози, не предписваме медикаменти и не провеждаме лечение по смисъла на традиционната медицина.
            </p>
            <p>
              Предлаганите услуги не заместват професионалната медицинска консултация или лечение.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
