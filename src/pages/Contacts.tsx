import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ImagePlaceholder } from '../components/ui/image-placeholder';
import { SectionWrapper } from '../components/shared/SectionWrapper';
import { offices } from '../data/team';

export function Contacts() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-violet-50 to-stone-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 text-center">Контакти</h1>
          <p className="mt-4 text-stone-500 text-center max-w-2xl mx-auto">
            Свържете се с нас за запазване на час, въпроси или допълнителна информация.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-stone-800 mb-6">Изпратете съобщение</h2>
            {submitted ? (
              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-8 text-center">
                <p className="text-violet-700 font-medium text-lg mb-2">Благодарим ви!</p>
                <p className="text-violet-600 text-sm">Ще се свържем с вас в рамките на 24 часа.</p>
                <Button className="mt-4" onClick={() => setSubmitted(false)}>Изпрати ново съобщение</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Три имена *" required />
                <Input type="email" placeholder="Email адрес *" required />
                <Input type="tel" placeholder="Телефонен номер *" required />
                <Textarea placeholder="Вашето съобщение *" required />
                <Button type="submit" size="lg" className="w-full">Изпрати</Button>
              </form>
            )}
          </div>

          {/* Office Cards */}
          <div className="space-y-6">
            {offices.map((office) => (
              <Card key={office.id}>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-lg font-semibold text-stone-800 mb-3">{office.city}</h3>
                  <div className="space-y-2 text-sm text-stone-500 mb-4">
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-violet-600" />{office.address}</p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-violet-600" />{office.phone}</p>
                    <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-violet-600" />{office.email}</p>
                    <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-violet-600" />{office.workingHours}</p>
                  </div>
                  <ImagePlaceholder aspect="landscape" className="w-full rounded-xl h-48" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-stone-600">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-5 w-5 text-violet-600" />
            <span className="font-medium">Отговаряме до 24 часа</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-5 w-5 text-violet-600" />
            <span className="font-medium">Дистанционни терапии достъпни</span>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
