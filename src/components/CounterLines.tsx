import React, { useEffect, useState } from 'react';
import { Hero } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CounterLinesProps {
  hoveredHero: Hero | null;
  cardElementsRef: React.MutableRefObject<Record<string, HTMLElement>>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

interface LineData {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type: 'positive' | 'negative';
}

export function CounterLines({ hoveredHero, cardElementsRef, containerRef }: CounterLinesProps) {
  const [lines, setLines] = useState<LineData[]>([]);

  useEffect(() => {
    if (!hoveredHero || !containerRef.current) {
      setLines([]);
      return;
    }

    const updateLines = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const sourceEl = cardElementsRef.current[hoveredHero.id];
      
      if (!sourceEl) {
        setLines([]);
        return;
      }

      const sourceRect = sourceEl.getBoundingClientRect();
      const startX = sourceRect.left + sourceRect.width / 2 - containerRect.left;
      const startY = sourceRect.top + sourceRect.height / 2 - containerRect.top;

      const newLines: LineData[] = [];

      // Counters (Green)
      hoveredHero.counters.forEach(rel => {
        const targetHero = (Object.values(cardElementsRef.current) as HTMLElement[]).find(
          el => el.dataset.heroId === rel.heroId
        );
        if (targetHero) {
          const targetRect = targetHero.getBoundingClientRect();
          newLines.push({
            id: `pos-${rel.heroId}`,
            x1: startX,
            y1: startY,
            x2: targetRect.left + targetRect.width / 2 - containerRect.left,
            y2: targetRect.top + targetRect.height / 2 - containerRect.top,
            type: 'positive'
          });
        }
      });

      // Countered By (Red)
      hoveredHero.countered_by.forEach(rel => {
        const targetHero = (Object.values(cardElementsRef.current) as HTMLElement[]).find(
          el => el.dataset.heroId === rel.heroId
        );
        if (targetHero) {
          const targetRect = targetHero.getBoundingClientRect();
          newLines.push({
            id: `neg-${rel.heroId}`,
            x1: startX,
            y1: startY,
            x2: targetRect.left + targetRect.width / 2 - containerRect.left,
            y2: targetRect.top + targetRect.height / 2 - containerRect.top,
            type: 'negative'
          });
        }
      });

      setLines(newLines);
    };

    updateLines();
    
    // Update lines on scroll or resize
    const container = containerRef.current;
    container.addEventListener('scroll', updateLines);
    window.addEventListener('resize', updateLines);
    
    return () => {
      container.removeEventListener('scroll', updateLines);
      window.removeEventListener('resize', updateLines);
    };
  }, [hoveredHero, cardElementsRef, containerRef]);

  return (
    <svg 
      className="absolute inset-0 pointer-events-none z-20" 
      style={{ width: '100%', height: '100%', minHeight: '100%' }}
    >
      <defs>
        <filter id="glow-positive" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="glow-negative" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <AnimatePresence>
        {lines.map((line) => {
          const isPositive = line.type === 'positive';
          const color = isPositive ? '#3ddc97' : '#ff5f6d';
          const filter = isPositive ? 'url(#glow-positive)' : 'url(#glow-negative)';
          
          return (
            <motion.line
              key={line.id}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={color}
              strokeWidth="2"
              strokeDasharray="6 6"
              filter={filter}
            />
          );
        })}
      </AnimatePresence>
    </svg>
  );
}
