import Gallery from '../components/Gallery';

const createShootItems = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, offset) => {
    const index = start + offset;
    return {
      src: `/shots/shoot (${index}).jpg`,
      alt: `Breadwinner shoot ${index}`,
    };
  });

const lookbookDaytime = createShootItems(1, 5);
const lookbookNight = createShootItems(6, 9);

const whatsappLookbook = Array.from({ length: 21 }, (_, idx) => {
  const number = String(idx + 1).padStart(2, '0');
  return {
    src: `/shots/lookbook-whatsapp/lookbook-whatsapp-${number}.webp`,
    alt: `Street archive ${idx + 1}`,
  };
});

const whatsappLatest = whatsappLookbook.slice(0, 9);
const whatsappArchive = whatsappLookbook.slice(9);

export default function Lookbook() {
  return (
    <div className="space-y-16">
      <section className="bg-brand-beige px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl space-y-6">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.6rem] text-brand-green/60">Lookbook</p>
            <h1 className="text-4xl font-bold uppercase text-brand-green">Street frames</h1>
            <p className="text-sm text-brand-black/70 md:text-base">
              Dakar vibes, silhouettes audacieuses et la détermination des breadwinners.
            </p>
          </header>
          <Gallery items={lookbookDaytime} min={300} />
        </div>
      </section>

      <section className="bg-brand-green px-5 py-12 text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.6rem] text-white/50">Night Shift Energy</p>
            <h2 className="text-3xl font-semibold uppercase md:text-4xl">
              Les nuits où tout se joue.
            </h2>
            <p className="text-sm text-white/80 md:text-base">
              Lumières de la ville, ambiance lowlight et signatures Breadwinner pour une allure premium.
            </p>
          </header>
          <Gallery items={lookbookNight} min={300} />
        </div>
      </section>

      <section className="bg-brand-black px-5 py-12 text-white md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.6rem] text-white/50">Shots du crew</p>
            <h2 className="text-3xl font-semibold uppercase md:text-4xl">Derniers clichés</h2>
          </header>
          <Gallery items={whatsappLatest} min={240} className="md:gap-5" />
        </div>
      </section>

      <section className="bg-brand-beige px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.6rem] text-brand-green/60">Archives Mbouro</p>
            <h2 className="text-3xl font-semibold uppercase text-brand-green md:text-4xl">
              Réserves visuelles
            </h2>
            <p className="text-sm text-brand-black/70 md:text-base">
              Un flow d’images plus brutes, équilibrées comme les sections précédentes pour garder le rythme.
            </p>
          </header>
          <Gallery items={whatsappArchive} min={220} className="md:gap-5" />
        </div>
      </section>
    </div>
  );
}
