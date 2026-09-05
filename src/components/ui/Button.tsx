import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Internal route — renders a router Link. */
  to?: string;
  /** External URL — renders an anchor with safe rel attributes. */
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  id?: string;
  'aria-label'?: string;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/25 hover:shadow-brand-500/35 border border-transparent',
  secondary:
    'bg-surface text-ink border border-line-strong hover:border-accent hover:text-accent',
  ghost:
    'bg-transparent text-ink border border-transparent hover:bg-surface-3',
  onDark:
    'bg-white/10 text-white border border-white/25 backdrop-blur-sm hover:bg-white/20 hover:border-white/40',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight ' +
  'transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ' +
  'active:scale-[0.98] group';

export const Button: React.FC<BaseProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  id,
  'aria-label': ariaLabel,
}) => {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} id={id} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cls}
        id={id}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
