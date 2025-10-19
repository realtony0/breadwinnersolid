const baseClasses =
  'inline-flex items-center justify-center rounded-md border-2 border-brand-green bg-transparent text-brand-green font-semibold tracking-wide px-5 py-2.5 text-[0.9rem] md:px-6 md:py-3 md:text-base transition-all duration-300 ease-in-out';

const hoverClasses = 'hover:bg-brand-green hover:text-white hover:shadow-soft hover:-translate-y-0.5';

export default function Button(props) {
  const { as, className, children, ...rest } = props;
  const Component = as ?? (rest.href ? 'a' : 'button');

  const classes = [baseClasses, hoverClasses, 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      className={classes}
      {...rest}
    >
      {children}
    </Component>
  );
}
