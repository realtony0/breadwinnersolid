import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';

const highlightDrops = [
  {
    src: '/shots/OVERSIZED-ABRICOT-ACID-WASHED-TEE.jpg',
    alt: 'Oversized abricot acid washed tee',
    caption: 'Drop 01 — Acid Dreams',
  },
  {
    src: '/shots/THE-MADEBYBREADWINNER-BLACK-TEE.jpg',
    alt: 'Made by Breadwinner black tee',
    caption: 'Core Line — Midnight Hustle',
  },
  {
    src: '/shots/THE-PINKY-BROWN-TEE.jpg',
    alt: 'Pinky brown tee',
    caption: 'Seasonal Heat — Pinky Brown',
  },
];

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />

      <section className="px-6 md:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 rounded-3xl bg-white/70 p-8 backdrop-blur-sm md:flex-row md:p-12">
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.6rem] text-brand-green/60">The Hustler&apos;s Code</p>
            <h2 className="text-3xl font-bold uppercase text-brand-green md:text-4xl">
              Streetwear taillé pour les breadwinners modernes.
            </h2>
            <p className="text-sm leading-7 text-brand-black/80 md:text-base">
              Chaque drop Breadwinner s&apos;inspire des rues de Dakar et des codes premium des labels internationaux.
              On fusionne silhouettes oversized, matières texturées et détails discrets pour proposer une identité unique, faite pour celles et ceux qui grindent sans relâche.
            </p>
            <Button as={Link} to="/lookbook" className="self-start">
              Voir le lookbook
            </Button>
          </div>
          <div className="flex-1">
            <Gallery items={highlightDrops} min={220} />
          </div>
        </div>
      </section>

      <section className="bg-brand-green text-brand-beige">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:py-20">
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.6rem] text-brand-beige/70">Premium Essentials</p>
            <h3 className="text-3xl font-semibold uppercase text-brand-beige md:text-4xl">
              Conçus pour durer, pensés pour inspirer.
            </h3>
            <p className="text-sm leading-7 text-brand-beige/85 md:text-base">
              Des coupes oversized, une palette signature et des finitions irréprochables. Breadwinner, c&apos;est l&apos;alliance d&apos;une vision street et d&apos;une fabrication soignée. Hustle smart, look sharp.
            </p>
          </div>
          <div className="flex-1 space-y-6 rounded-3xl border border-brand-beige/20 bg-brand-green/70 p-6 text-sm leading-7 text-brand-beige/85 md:text-base">
            <p>
              <span className="font-semibold text-brand-beige">Finitions propres :</span> coutures renforcées, lavages spéciaux, matières respirantes prêtes pour la saison.
            </p>
            <p>
              <span className="font-semibold text-brand-beige">Pensé à Dakar :</span> chaque pièce rend hommage aux hustlers locaux qui transforment leurs rêves en réalité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
