import Button from '../components/Button';
const formatPrice = (value) => `${value.toLocaleString('fr-FR')} CFA`;

const products = [
  {
    id: 'abricot',
    image: '/shots/OVERSIZED-ABRICOT-ACID-WASHED-TEE.jpg',
    alt: 'Oversized abricot acid washed tee',
    name: 'Oversized Tee — Abricot Acid Wash',
    category: 'T-shirt oversized',
    price: formatPrice(10000),
    inStock: false,
  },
  {
    id: 'black',
    image: '/shots/OVERSIZED-BLACK-ACID-WASHED-TEE.jpg',
    alt: 'Oversized black acid washed tee',
    name: 'Oversized Tee — Black Acid Wash',
    category: 'T-shirt oversized',
    price: formatPrice(10000),
    inStock: false,
  },
  {
    id: 'trucker',
    image: '/shots/THE-455-BREADWINNER-TRUCKER-HAT.jpg',
    alt: 'Breadwinner trucker hat',
    name: 'The 455 Breadwinner Trucker',
    category: 'Trucker hat',
    price: formatPrice(8000),
    inStock: true,
  },
  {
    id: 'midnight',
    image: '/shots/THE-MADEBYBREADWINNER-BLACK-TEE.jpg',
    alt: 'Made by Breadwinner black tee',
    name: 'MadeByBreadwinner.tee',
    category: 'T-shirt oversized',
    price: formatPrice(10000),
    inStock: true,
  },
  {
    id: 'pinky',
    image: '/shots/THE-PINKY-BROWN-TEE.jpg',
    alt: 'Pinky brown tee',
    name: 'Pinky Brown Tee — SS Drop',
    category: 'T-shirt oversized',
    price: formatPrice(10000),
    inStock: false,
  },
  {
    id: 'white',
    image: '/shots/THE PANEMVICTOR SZN WHITE TEE.jpg',
    alt: 'Panemvictor white tee',
    name: 'Panemvictor SZN — White Tee',
    category: 'T-shirt oversized',
    price: formatPrice(10000),
    inStock: false,
  },
];

export default function Shop() {
  return (
    <div className="bg-brand-beige px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.6rem] text-brand-green/60">Shop</p>
          <h1 className="text-4xl font-bold uppercase text-brand-green">Pieces phares</h1>
          <p className="text-sm text-brand-black/70 md:text-base">
            Des essentiels premium pour les hustlers qui veulent performer et se démarquer.
          </p>
        </div>
        <div
          className="grid gap-4 md:gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
        >
          {products.map((product) => (
            <article
              key={product.id || product.name}
              className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-soft transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] ${product.inStock ? '' : 'grayscale opacity-60'}`}
                />
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-black/40 text-xs font-semibold uppercase tracking-[0.4rem] text-white">
                    Out of stock
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 px-5 py-5">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.4rem] text-brand-green/70">{product.category}</p>
                  <h3 className="text-lg font-semibold uppercase text-brand-black">{product.name}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-semibold md:text-base ${product.inStock ? 'text-brand-green' : 'text-brand-black/40'}`}
                  >
                    {product.price}
                  </span>
                  {product.inStock ? (
                    <Button
                      as="a"
                      href={`https://wa.me/221785392407?text=${encodeURIComponent(`Salut Breadwinner, je veux commander: ${product.name}`)}`}
                      className="px-4 py-2 text-xs font-semibold uppercase md:px-5 md:py-2.5 md:text-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Commander
                    </Button>
                  ) : (
                    <span className="inline-flex items-center justify-center rounded-md border-2 border-brand-black/30 px-4 py-2 text-xs font-semibold uppercase text-brand-black/40 md:px-5 md:py-2.5 md:text-sm">
                      Rupture de stock
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
