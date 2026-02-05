'use client';

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Core from 'smooothy';
import gsap from 'gsap';

/** Reusable SmoothySlider component */
const SmoothySlider = forwardRef(function SmoothySlider(
  { children, className = '', config = {} },
  ref
) {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !sliderRef.current) {
      const instance = new Core(containerRef.current, config);
      sliderRef.current = instance;
      
      const update = () => {
        if (sliderRef.current) {
          sliderRef.current.update();
        }
      };
      
      gsap.ticker.add(update);

      return () => {
        gsap.ticker.remove(update);
        if (sliderRef.current) {
          sliderRef.current.destroy();
          sliderRef.current = null;
        }
      };
    }
  }, []);

  useImperativeHandle(ref, () => ({
    goToNext: () => sliderRef.current?.goToNext(),
    goToPrev: () => sliderRef.current?.goToPrev(),
    goToIndex: (index) => sliderRef.current?.goToIndex(index),
    getProgress: () => {
      if (!sliderRef.current) return 0;
      return sliderRef.current.progress ?? 0;
    },
  }), []);

  return (
    <div
      ref={containerRef}
      className={`flex focus:outline-none ${className}`}
    >
      {children}
    </div>
  );
});

export default SmoothySlider;

/** Slide wrapper component */
export function Slide({ children, className = '' }) {
  return <div className={`shrink-0 ${className}`}>{children}</div>;
}

/** Reusable hook for smooothy slider (standalone usage) */
export function useSmooothy(config = {}) {
  const sliderRef = useRef(null);
  const instanceRef = useRef(null);

  const refCallback = (node) => {
    if (node && !instanceRef.current) {
      const instance = new Core(node, config);
      
      const update = () => {
        if (instanceRef.current) {
          instanceRef.current.update();
        }
      };
      
      gsap.ticker.add(update);
      instanceRef.current = instance;
    }
    sliderRef.current = node;
  };

  useEffect(() => {
    return () => {
      if (instanceRef.current) {
        gsap.ticker.remove(instanceRef.current.update.bind(instanceRef.current));
        instanceRef.current.destroy();
      }
    };
  }, []);

  return { ref: refCallback, slider: instanceRef };
}