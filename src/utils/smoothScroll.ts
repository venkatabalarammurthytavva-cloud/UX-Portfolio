import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function initSmoothScroll(): () => void {
  if (typeof window === 'undefined') return () => {};

  // Respect accessibility preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return () => {};
  }

  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fluid exponential decay
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.5,
    infinite: false,
  });

  lenisInstance = lenis;

  let rafId: number;
  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    if (lenisInstance === lenis) {
      lenisInstance = null;
    }
  };
}

export function scrollToTop(immediate: boolean = false): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate, duration: immediate ? 0 : 1.15 });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
  }
}

export function scrollToElement(elementOrSelector: HTMLElement | string, offset: number = -80): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(elementOrSelector, { offset, duration: 1.2 });
  } else {
    const el = typeof elementOrSelector === 'string' 
      ? document.querySelector(elementOrSelector) 
      : elementOrSelector;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export function pauseSmoothScroll(): void {
  if (lenisInstance) {
    lenisInstance.stop();
  }
}

export function resumeSmoothScroll(): void {
  if (lenisInstance) {
    lenisInstance.start();
  }
}
