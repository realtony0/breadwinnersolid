export default function About() {
  return (
    <div className="bg-brand-beige px-5 py-16 text-brand-green md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl space-y-10 text-justify text-[1.1rem] leading-[1.8]">
        <header className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.6rem] text-brand-green/60">À propos</p>
          <h1 className="text-4xl font-bold uppercase">BreadwinnerSolid</h1>
        </header>
        <p>
          Créée en 2023, la marque de streetwear 100% sénégalaise a su s’imposer durablement sur le marché local. Elle incarne à la fois le hustling mentality — cette idée de se démener pour construire quelque chose de concret — et la culture du “bread”, qui se traduit humblement par l’argent.
        </p>
        <p>
          Un vrai breadwinner, c’est celui qui ne se laisse pas abattre par la pression sociale et qui cherche à gagner sa vie en donnant tout, chaque jour.
        </p>
        <p>
          BreadwinnerSolid s’adresse à celles et ceux qui veulent afficher fièrement leurs valeurs : résilience, ambition et élégance. Chaque pièce raconte une histoire de grind, de détermination et de réussite durable.
        </p>
        <div className="mx-auto h-px w-32 bg-brand-green/40"></div>
      </div>
    </div>
  );
}
