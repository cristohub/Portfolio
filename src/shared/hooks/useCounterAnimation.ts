import { useEffect, useRef, useState } from 'react';

interface CounterOptions {
  targetValue: number;
  duration?: number;
  easing?: (t: number) => number;
}

// Easing function - suave y elegante similar a Apple/Whoop
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export const useCounterAnimation = ({
  targetValue,
  duration = 2000,
  easing = easeOutCubic,
}: CounterOptions) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const startTimeRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }

          // Cuando el elemento entra en pantalla y aún no se ha iniciado la animación
          if (entry.isIntersecting && !hasStartedRef.current) {
            hasStartedRef.current = true;
            setIsVisible(true);
            startTimeRef.current = performance.now();
            
            const animate = (currentTime: number) => {
              if (!startTimeRef.current) return;
              const elapsed = currentTime - startTimeRef.current;
              const progress = Math.min(elapsed / duration, 1);
              const easedProgress = easing(progress);
              const currentValue = Math.floor(easedProgress * targetValue);

              setCount(currentValue);

              if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
              }
            };

            animationRef.current = requestAnimationFrame(animate);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, [targetValue, duration, easing]);

  return { count, elementRef, isVisible };
};
