import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Show logo
    const timer1 = setTimeout(() => setPhase(1), 300);
    // Phase 2: Expand animation
    const timer2 = setTimeout(() => setPhase(2), 1200);
    // Phase 3: Fade out
    const timer3 = setTimeout(() => setPhase(3), 2000);
    // Complete
    const timer4 = setTimeout(() => onComplete(), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-primary transition-opacity duration-500 ${
        phase >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/5 transition-all duration-1000 ease-out ${
            phase >= 2 ? 'w-[200vmax] h-[200vmax]' : 'w-0 h-0'
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/5 transition-all duration-1000 ease-out delay-100 ${
            phase >= 2 ? 'w-[150vmax] h-[150vmax]' : 'w-0 h-0'
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/10 transition-all duration-1000 ease-out delay-200 ${
            phase >= 2 ? 'w-[100vmax] h-[100vmax]' : 'w-0 h-0'
          }`}
        />
      </div>

      {/* RPBG Logo */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-700 ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        } ${phase >= 2 ? 'scale-110' : ''}`}
      >
        {/* Logo text with animation */}
        <div className="relative">
          <h1 className="font-heading font-bold text-6xl md:text-8xl text-primary-foreground tracking-wider">
            RPBG
          </h1>
          
          {/* Animated underline */}
          <div
            className={`absolute -bottom-2 left-0 h-1 bg-primary-foreground transition-all duration-700 ease-out ${
              phase >= 1 ? 'w-full' : 'w-0'
            }`}
          />
        </div>

        {/* Tagline */}
        <p
          className={`mt-6 text-primary-foreground/80 text-lg tracking-widest uppercase transition-all duration-500 delay-300 ${
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          ICT Group
        </p>

        {/* Loading dots */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary-foreground/60 animate-pulse"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
