const mmbWhatsappLink = 'https://wa.me/221774992742';

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center">
        <div className="h-px w-24 bg-white/30" />
        <p className="text-lg font-semibold tracking-[0.3rem] uppercase">
          BREADWINNER — All Day, Every Day.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-widest">
          <a href="https://instagram.com/breadwinner.solid" target="_blank" rel="noreferrer" className="transition-opacity duration-300 hover:opacity-80">
            Instagram
          </a>
          <span className="text-white/50">|</span>
          <a href="https://wa.me/221785392407" target="_blank" rel="noreferrer" className="transition-opacity duration-300 hover:opacity-80">
            WhatsApp
          </a>
          <span className="text-white/50">|</span>
          <a href="/shop" className="transition-opacity duration-300 hover:opacity-80">
            Shop
          </a>
        </div>
        <p className="text-xs uppercase tracking-[0.4rem] text-white/70">Made in Dakar 🇸🇳</p>
        <p className="text-xs uppercase tracking-[0.2rem] text-white/60">
          Site conçu par{' '}
          <a
            href={mmbWhatsappLink}
            target="_blank"
            rel="noreferrer"
            className="text-white underline hover:opacity-80"
          >
            MMb
          </a>
          — contact direct.
        </p>
      </div>
    </footer>
  );
}
