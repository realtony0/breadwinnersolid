import { formatPrice } from '../utils/formatPrice';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    itemCount,
    total,
    isOpen,
    closeCart,
    incrementItem,
    decrementItem,
    removeItem,
    clearCart,
  } = useCart();

  const whatsappMessage = encodeURIComponent(
    `Yoo Breadwinner, voici mon panier:\n${items
      .map((item) => `- ${item.name} x${item.quantity}`)
      .join('\n')}\nTotal: ${formatPrice(total)}`,
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-brand-black/40 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-40 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <header className="flex items-center justify-between border-b border-brand-black/10 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.4rem] text-brand-green/70">Panier</p>
            <h2 className="text-2xl font-semibold text-brand-black">Vos pièces ({itemCount})</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="text-sm font-semibold uppercase tracking-wide text-brand-black/60 transition hover:text-brand-black"
          >
            Fermer
          </button>
        </header>

        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="rounded-lg border border-dashed border-brand-black/20 bg-brand-beige/60 p-8 text-center">
              <p className="text-sm uppercase tracking-[0.3rem] text-brand-black/50">Panier vide</p>
              <p className="mt-2 text-base text-brand-black">
                Ajoutez vos pièces favorites pour préparer votre commande WhatsApp.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <article
                key={item.id}
                className="flex gap-4 rounded-xl border border-brand-black/10 bg-white p-4 shadow-soft"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-brand-black">
                        {item.name}
                      </p>
                      <p className="text-xs text-brand-black/60">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-xs uppercase tracking-wide text-brand-black/40 transition hover:text-brand-black"
                    >
                      Retirer
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center rounded-full border border-brand-black/10">
                      <button
                        type="button"
                        onClick={() => decrementItem(item.id)}
                        className="h-8 w-8 text-lg text-brand-black transition hover:text-brand-green"
                        aria-label="Diminuer la quantité"
                      >
                        −
                      </button>
                      <span className="w-10 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => incrementItem(item.id)}
                        className="h-8 w-8 text-lg text-brand-black transition hover:text-brand-green"
                        aria-label="Augmenter la quantité"
                      >
                        +
                      </button>
                    </div>
                    <span className="ml-auto text-sm font-semibold text-brand-green">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        <footer className="space-y-4 border-t border-brand-black/10 px-6 py-6">
          <div className="flex items-center justify-between text-lg font-semibold text-brand-black">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={clearCart}
              className="flex-1 rounded-md border border-brand-black/20 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-brand-black/70 transition hover:text-brand-black"
              disabled={items.length === 0}
            >
              Vider
            </button>
            <a
              href={`https://wa.me/221785392407?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className={`flex-1 rounded-md px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition ${
                items.length === 0
                  ? 'pointer-events-none bg-brand-black/30'
                  : 'bg-brand-green hover:bg-brand-green/90 shadow-soft'
              }`}
            >
              Valider via WhatsApp
            </a>
          </div>
        </footer>
      </aside>
    </>
  );
}
