import { useState, useEffect } from 'react';
import logoWhite from '@/assets/logo-rpbg-white.png';

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
        {/* Logo image */}
        <img 
          src={logoWhite} 
          alt="RPBG - Rosheuvel & Partners Business Group" 
          className="h-32 md:h-48 w-auto"
        />

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
