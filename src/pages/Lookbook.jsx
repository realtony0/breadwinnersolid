import Gallery from '../components/Gallery';

const lookbookOne = [1, 2, 3, 4, 5].map((index) => ({
  src: `/shots/shoot (${index}).jpg`,
  alt: `Breadwinner lookbook ${index}`,
}));

const lookbookTwo = [6, 7, 8, 9].map((index) => ({
  src: `/shots/shoot (${index}).jpg`,
  alt: `Breadwinner lookbook ${index}`,
}));

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
          <Gallery items={lookbookOne} min={300} />
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
          <Gallery items={lookbookTwo} min={300} />
        </div>
      </section>
    </div>
  );
}
