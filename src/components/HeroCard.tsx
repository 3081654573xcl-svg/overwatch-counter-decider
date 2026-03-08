import React, { forwardRef } from 'react';
import { motion } from 'motion/react';
import { Shield, Crosshair, Plus, Check } from 'lucide-react';
import { Hero } from '../types';

interface HeroCardProps {
  hero: Hero;
  onClick: () => void;
  onAdd: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  isSelected: boolean;
  isInEnemyTeam: boolean;
}

export const HeroCard = forwardRef<HTMLDivElement, HeroCardProps>(
  ({ hero, onClick, onAdd, onHoverStart, onHoverEnd, isSelected, isInEnemyTeam }, ref) => {
    const roleColors = {
      Tank: 'from-[#3ea6ff]/20 to-[#3ea6ff]/5 text-[#3ea6ff] border-[#3ea6ff]/30',
      Damage: 'from-[#ff5f6d]/20 to-[#ff5f6d]/5 text-[#ff5f6d] border-[#ff5f6d]/30',
      Support: 'from-[#3ddc97]/20 to-[#3ddc97]/5 text-[#3ddc97] border-[#3ddc97]/30',
    };

    const RoleIcon = hero.role === 'Tank' ? Shield : hero.role === 'Damage' ? Crosshair : Plus;

    return (
      <motion.div
        ref={ref}
        data-hero-id={hero.id}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -4, scale: 1.02 }}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        className={`relative group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 ${
          isSelected ? 'border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'border-white/5 hover:border-white/20'
        } bg-[#141a22]`}
        onClick={onClick}
      >
        {/* Background Gradient based on role */}
        <div className={`absolute inset-0 bg-gradient-to-b ${roleColors[hero.role].split(' ')[0]} ${roleColors[hero.role].split(' ')[1]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="p-4 flex flex-col items-center gap-3 relative z-10">
          {/* Avatar Placeholder or Image */}
          <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-[#0b0f14] border ${roleColors[hero.role].split(' ')[3]} shadow-inner overflow-hidden`}>
            {hero.image ? (
              <img 
                src={hero.image} 
                alt={hero.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-2xl font-display font-bold text-white/80">
                {hero.name.substring(0, 2).toUpperCase()}
              </span>
            )}
          </div>

          <div className="text-center">
            <h3 className="font-display font-semibold text-sm text-white/90">{hero.name}</h3>
            <div className="flex items-center justify-center gap-1 mt-1">
              <RoleIcon className={`w-3 h-3 ${roleColors[hero.role].split(' ')[2]}`} />
              <span className="text-[10px] uppercase tracking-wider text-white/40">{hero.role}</span>
            </div>
          </div>
        </div>

        {/* Add to enemy team button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!isInEnemyTeam) onAdd();
          }}
          className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center transition-all z-20 ${
            isInEnemyTeam
              ? 'bg-[#3ddc97]/20 text-[#3ddc97]'
              : 'bg-black/40 text-white/50 hover:bg-white/20 hover:text-white opacity-0 group-hover:opacity-100'
          }`}
        >
          {isInEnemyTeam ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </button>
        
        {/* Tier Badge */}
        <div className="absolute top-2 left-2 w-5 h-5 rounded flex items-center justify-center bg-black/40 border border-white/10">
          <span className="text-[10px] font-mono font-bold text-white/70">{hero.tier}</span>
        </div>
      </motion.div>
    );
  }
);
