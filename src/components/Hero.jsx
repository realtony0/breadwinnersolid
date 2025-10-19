import Button from './Button';

export default function Hero() {
  return (
    <section className="grid min-h-screen gap-8 bg-brand-beige md:grid-cols-[0.4fr_0.6fr]">
      <div className="flex flex-col items-center justify-center space-y-8 bg-brand-beige px-6 py-16 md:px-[5vw] md:py-0">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-extrabold uppercase tracking-[0.2rem] text-brand-green md:text-5xl md:tracking-[0.4rem]">
            BREADWINNER
          </h1>
          <p className="text-base italic text-brand-black/80 md:text-lg">by hustlers, for hustlers.</p>
        </div>
        <img
          src="/shots/logo3.jpg"
          alt="Breadwinner crest"
          className="w-36 md:w-48"
        />
        <Button as="a" href="/shop">
          Explorer le shop
        </Button>
      </div>
      <div className="relative h-[60vh] w-full overflow-hidden md:h-auto">
        <video
          src="/shots/video.mp4"
          className="h-full w-full object-cover"
          poster="/shots/shoot (1).jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <noscript>
          <img src="/shots/shoot (1).jpg" alt="Silhouette Breadwinner" className="h-full w-full object-cover" />
        </noscript>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black/60 to-transparent p-6 text-right text-white md:p-10">
          <p className="text-xs uppercase tracking-[0.2rem] text-white/70 md:text-sm md:tracking-[0.4rem]">7 days a week grind</p>
        </div>
      </div>
    </section>
  );
}
