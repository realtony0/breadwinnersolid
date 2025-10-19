import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-brand-beige px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.6rem] text-brand-green/60">404</p>
      <h1 className="text-4xl font-bold uppercase text-brand-green">Page introuvable</h1>
      <p className="max-w-md text-sm leading-7 text-brand-black/70 md:text-base">
        Désolé, cette page n&apos;existe pas ou a été déplacée. Revenez vers l&apos;accueil pour continuer votre grind.
      </p>
      <Button as="a" href="/">
        Retour à l&apos;accueil
      </Button>
    </div>
  );
}
