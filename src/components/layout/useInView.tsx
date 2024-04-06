import { useState, useEffect, useRef } from 'react';

interface IntersectionObserverHookProps {
  root?: HTMLDivElement | null;
  threshold?: number; // Threshold for intersection (default: 0)
  // Add a flag to disable lazy loading on bottom reach
  disableOnBottom?: boolean;
}

function useInView({ root, threshold = 0, disableOnBottom = false }: IntersectionObserverHookProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isBottomReached, setIsBottomReached] = useState(false);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsBottomReached(true);
    } else {
      setIsBottomReached(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (!disableOnBottom || !isBottomReached) {
        setIsVisible(entries[0].isIntersecting);
      }
    }, { root, threshold });

    window.addEventListener('scroll', handleScroll);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, root, threshold, disableOnBottom, isBottomReached]);

  return { ref, isVisible };
}

export default useInView;