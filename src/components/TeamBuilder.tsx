import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { X, Cpu } from 'lucide-react';
import { Hero } from '../types';
import { getRecommendedTeam, heroesBase, counterMatrix } from '../data/heroRelationships';

interface TeamBuilderProps {
  enemyTeam: Hero[];
  onRemoveHero: (id: string) => void;
  onClearTeam: () => void;
  allHeroes: Hero[];
}

export function TeamBuilder({ enemyTeam, onRemoveHero, onClearTeam, allHeroes }: TeamBuilderProps) {
  
  // Calculate recommended team
  const recommendation = useMemo(() => {
    const enemyIds = enemyTeam.map(h => h.id);
    return getRecommendedTeam(enemyIds, heroesBase, counterMatrix, { tank: 1, damage: 2, support: 2 });
  }, [enemyTeam]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0b0f14]/90 backdrop-blur-xl border-t border-white/10 z-40 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        
        {/* Enemy Team Input */}
        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5f6d]" />
              Enemy Team
            </h3>
            <div className="flex items-center gap-4">
              {enemyTeam.length > 0 && (
                <button 
                  onClick={onClearTeam}
                  className="text-[10px] text-white/30 hover:text-[#ff5f6d] uppercase tracking-widest transition-colors"
                >
                  Clear All
                </button>
              )}
              <span className="text-xs text-white/40 font-mono">{enemyTeam.length}/5 Selected</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            {[0, 1, 2, 3, 4].map((index) => {
              const hero = enemyTeam[index];
              return (
                <div 
                  key={index}
                  className={`flex-1 h-16 rounded-lg border border-dashed flex items-center justify-center relative transition-all ${
                    hero ? 'bg-[#141a22] border-white/20 border-solid' : 'border-white/10 bg-white/5'
                  }`}
                >
                  {hero ? (
                    <>
                      <div className="flex items-center gap-3 px-3 w-full">
                        {hero.image ? (
                          <img 
                            src={hero.image} 
                            alt={hero.name} 
                            className="w-10 h-10 rounded-md object-cover border border-white/10"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-md bg-[#0b0f14] border border-white/10 flex items-center justify-center">
                            <span className="text-xs font-bold text-white/40">{hero.name.substring(0, 2).toUpperCase()}</span>
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="text-xs font-display font-bold text-white/90 truncate max-w-[80px]">{hero.name}</span>
                          <span className="text-[10px] text-white/40 uppercase">{hero.role}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveHero(hero.id)}
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#ff5f6d] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </>
                  ) : (
                    <span className="text-white/20 text-xs">Empty</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommended Team */}
        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#3ea6ff]" />
              AI Counter Recommendation
            </h3>
            {recommendation && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/40">Confidence</span>
                <span className="text-xs font-mono font-bold text-[#3ddc97]">{recommendation.confidence}%</span>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            {enemyTeam.length === 0 ? (
              <div className="w-full h-16 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center">
                <span className="text-sm text-white/40">Select enemy heroes to generate counter team</span>
              </div>
            ) : (
              [0, 1, 2, 3, 4].map((index) => {
                const hero = recommendation?.team[index];
                return (
                  <motion.div 
                    key={`rec-${index}-${hero?.id || 'empty'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex-1 h-16 rounded-lg border flex items-center justify-center relative ${
                      hero ? 'bg-[#141a22] border-[#3ea6ff]/30 shadow-[0_0_15px_rgba(62,166,255,0.1)]' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    {hero && (
                      <div className="flex items-center gap-3 px-3 w-full">
                        {hero.image ? (
                          <img 
                            src={hero.image} 
                            alt={hero.name} 
                            className="w-10 h-10 rounded-md object-cover border border-[#3ea6ff]/30"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-md bg-[#0b0f14] border border-[#3ea6ff]/30 flex items-center justify-center">
                            <span className="text-xs font-bold text-[#3ea6ff]/40">{hero.name.substring(0, 2).toUpperCase()}</span>
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="text-xs font-display font-bold text-[#3ea6ff] truncate max-w-[80px]">{hero.name}</span>
                          <span className="text-[10px] text-white/40 uppercase">{hero.role}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
