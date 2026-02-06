import { cn } from '@/lib/utils';

interface ScribbleProps {
  className?: string;
  variant?: 'circle' | 'underline' | 'arrow' | 'star' | 'spiral' | 'dots' | 'wave';
  color?: 'primary' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const Scribble = ({ 
  className, 
  variant = 'circle', 
  color = 'primary',
  size = 'md',
  animated = true
}: ScribbleProps) => {
  const colorClasses = {
    primary: 'stroke-primary',
    accent: 'stroke-primary/50',
    muted: 'stroke-muted-foreground/30',
  };

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  const animationClass = animated ? 'animate-scribble-draw' : '';

  const scribbles = {
    circle: (
      <svg viewBox="0 0 100 100" fill="none" className={cn(sizeClasses[size], colorClasses[color], animationClass, className)}>
        <path 
          d="M50 10C70 10 85 25 88 45C91 65 78 82 58 88C38 94 18 82 12 62C6 42 18 22 38 14C48 10 50 10 50 10" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="scribble-path"
        />
      </svg>
    ),
    underline: (
      <svg viewBox="0 0 200 30" fill="none" className={cn('w-full h-6', colorClasses[color], animationClass, className)}>
        <path 
          d="M5 20C30 18 60 22 90 18C120 14 150 20 180 16C190 15 195 18 195 18" 
          strokeWidth="3" 
          strokeLinecap="round"
          fill="none"
          className="scribble-path"
        />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 80 40" fill="none" className={cn(sizeClasses[size], colorClasses[color], animationClass, className)}>
        <path 
          d="M5 20C15 18 35 22 55 20L75 20M65 12L75 20L65 28" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="scribble-path"
        />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 60 60" fill="none" className={cn(sizeClasses[size], colorClasses[color], animationClass, className)}>
        <path 
          d="M30 5L33 25L55 22L38 32L48 52L30 40L12 52L22 32L5 22L27 25Z" 
          strokeWidth="2" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="scribble-path"
        />
      </svg>
    ),
    spiral: (
      <svg viewBox="0 0 80 80" fill="none" className={cn(sizeClasses[size], colorClasses[color], animationClass, className)}>
        <path 
          d="M40 40C40 35 45 32 50 35C55 38 55 48 48 52C41 56 30 52 28 43C26 34 32 24 43 22C54 20 66 28 68 42C70 56 58 70 42 72C26 74 12 60 10 42" 
          strokeWidth="2" 
          strokeLinecap="round"
          fill="none"
          className="scribble-path"
        />
      </svg>
    ),
    dots: (
      <svg viewBox="0 0 100 20" fill="none" className={cn('w-24 h-5', colorClasses[color], className)}>
        <circle cx="10" cy="10" r="4" className="fill-current animate-bounce-dot" style={{ animationDelay: '0s' }} />
        <circle cx="30" cy="10" r="4" className="fill-current animate-bounce-dot" style={{ animationDelay: '0.1s' }} />
        <circle cx="50" cy="10" r="4" className="fill-current animate-bounce-dot" style={{ animationDelay: '0.2s' }} />
        <circle cx="70" cy="10" r="4" className="fill-current animate-bounce-dot" style={{ animationDelay: '0.3s' }} />
        <circle cx="90" cy="10" r="4" className="fill-current animate-bounce-dot" style={{ animationDelay: '0.4s' }} />
      </svg>
    ),
    wave: (
      <svg viewBox="0 0 200 50" fill="none" className={cn('w-48 h-12', colorClasses[color], animationClass, className)}>
        <path 
          d="M0 25C20 10 40 40 60 25C80 10 100 40 120 25C140 10 160 40 180 25C190 18 200 25 200 25" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          fill="none"
          className="scribble-path"
        />
      </svg>
    ),
  };

  return scribbles[variant];
};

// Floating decorative elements
interface FloatingElementProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const FloatingElement = ({ className, children, style }: FloatingElementProps) => {
  return (
    <div className={cn('absolute pointer-events-none animate-float-slow', className)} style={style}>
      {children}
    </div>
  );
};

// Decorative Plus Icon
export const DecorativePlus = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn('w-6 h-6 text-primary/20', className)}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Decorative Diamond
export const DecorativeDiamond = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn('w-4 h-4 text-primary/30', className)}>
    <path d="M12 2L22 12L12 22L2 12Z" fill="currentColor" />
  </svg>
);

// Spark/Shine effect
export const Sparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn('w-5 h-5 text-primary animate-pulse-slow', className)}>
    <path 
      d="M12 2L13.5 9L20 12L13.5 15L12 22L10.5 15L4 12L10.5 9Z" 
      fill="currentColor"
    />
  </svg>
);
