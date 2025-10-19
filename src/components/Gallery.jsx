export default function Gallery({ items, min = 250, className = '' }) {
  return (
    <div
      className={`grid gap-4 md:gap-6 ${className}`}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))` }}
    >
      {items.map((item) => (
        <div key={item.src} className="group relative overflow-hidden rounded-md shadow-soft">
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
          {item.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black/80 via-brand-black/40 to-transparent p-4 text-sm uppercase tracking-[0.2rem] text-white transition-opacity duration-500 group-hover:opacity-100 md:text-xs">
              {item.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
