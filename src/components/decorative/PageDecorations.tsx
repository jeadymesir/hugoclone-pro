import { Scribble, FloatingElement, Sparkle, DecorativePlus, DecorativeDiamond } from '@/components/decorative/Scribbles';

interface PageDecorationsProps {
  variant?: 'default' | 'primary' | 'minimal';
}

export const PageDecorations = ({ variant = 'default' }: PageDecorationsProps) => {
  if (variant === 'primary') {
    return (
      <>
        <FloatingElement className="top-32 right-16 hidden lg:block opacity-30">
          <Scribble variant="spiral" className="stroke-primary-foreground/30" size="lg" />
        </FloatingElement>
        <FloatingElement className="bottom-20 left-20 hidden lg:block opacity-40" style={{ animationDelay: '1s' }}>
          <Sparkle className="w-8 h-8 text-primary-foreground/40" />
        </FloatingElement>
        <FloatingElement className="top-1/2 left-12 hidden xl:block opacity-30" style={{ animationDelay: '2s' }}>
          <DecorativeDiamond className="w-6 h-6 text-primary-foreground/30" />
        </FloatingElement>
      </>
    );
  }

  if (variant === 'minimal') {
    return (
      <>
        <FloatingElement className="top-24 right-20 hidden lg:block">
          <Scribble variant="circle" color="muted" size="md" />
        </FloatingElement>
        <FloatingElement className="bottom-24 left-16 hidden lg:block" style={{ animationDelay: '1.5s' }}>
          <Sparkle className="w-6 h-6" />
        </FloatingElement>
      </>
    );
  }

  return (
    <>
      <FloatingElement className="top-32 right-20 hidden lg:block">
        <Scribble variant="spiral" color="muted" size="lg" />
      </FloatingElement>
      <FloatingElement className="top-1/3 left-12 hidden xl:block" style={{ animationDelay: '1s' }}>
        <Sparkle className="w-8 h-8" />
      </FloatingElement>
      <FloatingElement className="bottom-40 right-16 hidden lg:block" style={{ animationDelay: '2s' }}>
        <DecorativePlus className="w-10 h-10" />
      </FloatingElement>
      <FloatingElement className="bottom-1/4 left-20 hidden lg:block" style={{ animationDelay: '0.5s' }}>
        <Scribble variant="star" color="muted" size="sm" />
      </FloatingElement>
      <FloatingElement className="top-1/2 right-1/4 hidden xl:block" style={{ animationDelay: '1.5s' }}>
        <DecorativeDiamond className="w-6 h-6" />
      </FloatingElement>
    </>
  );
};

// Section-specific decorations
export const SectionDecorations = ({ position = 'left' }: { position?: 'left' | 'right' | 'both' }) => {
  if (position === 'left') {
    return (
      <>
        <FloatingElement className="top-16 left-8 hidden lg:block">
          <Scribble variant="circle" color="muted" size="md" />
        </FloatingElement>
        <FloatingElement className="bottom-16 left-20 hidden lg:block" style={{ animationDelay: '1s' }}>
          <DecorativeDiamond className="w-5 h-5" />
        </FloatingElement>
      </>
    );
  }

  if (position === 'right') {
    return (
      <>
        <FloatingElement className="top-20 right-12 hidden lg:block">
          <Sparkle className="w-6 h-6" />
        </FloatingElement>
        <FloatingElement className="bottom-24 right-20 hidden lg:block" style={{ animationDelay: '1.5s' }}>
          <Scribble variant="star" color="muted" size="sm" />
        </FloatingElement>
      </>
    );
  }

  return (
    <>
      <FloatingElement className="top-16 left-8 hidden lg:block">
        <Scribble variant="circle" color="muted" size="md" />
      </FloatingElement>
      <FloatingElement className="top-20 right-12 hidden lg:block" style={{ animationDelay: '0.5s' }}>
        <Sparkle className="w-6 h-6" />
      </FloatingElement>
      <FloatingElement className="bottom-16 left-20 hidden lg:block" style={{ animationDelay: '1s' }}>
        <DecorativeDiamond className="w-5 h-5" />
      </FloatingElement>
      <FloatingElement className="bottom-24 right-20 hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <Scribble variant="star" color="muted" size="sm" />
      </FloatingElement>
    </>
  );
};
