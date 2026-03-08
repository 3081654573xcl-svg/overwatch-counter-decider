import React from 'react';
import { motion } from 'motion/react';
import { X, Shield, Crosshair, Plus, Zap, TrendingUp, TrendingDown, Users } from 'lucide-react';
import { Hero, HeroRelationship } from '../types';

interface HeroDetailPanelProps {
  hero: Hero;
  onClose: () => void;
  onAdd: () => void;
  isInEnemyTeam: boolean;
}

export function HeroDetailPanel({ hero, onClose, onAdd, isInEnemyTeam }: HeroDetailPanelProps) {
  const roleColors = {
    Tank: 'text-[#3ea6ff]',
    Damage: 'text-[#ff5f6d]',
    Support: 'text-[#3ddc97]',
  };

  const RoleIcon = hero.role === 'Tank' ? Shield : hero.role === 'Damage' ? Crosshair : Plus;

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="w-96 bg-[#141a22] border-l border-white/5 flex flex-col h-full absolute right-0 top-0 z-30 shadow-2xl"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/5 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#0b0f14] border border-white/10 flex items-center justify-center overflow-hidden">
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
          <div>
            <h2 className="text-2xl font-display font-bold">{hero.name}</h2>
            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center gap-1">
                <RoleIcon className={`w-3.5 h-3.5 ${roleColors[hero.role]}`} />
                <span className="text-xs text-white/60">{hero.role}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-white/40">Tier</span>
                <span className="text-xs font-mono font-bold text-white/80">{hero.tier}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onAdd}
          disabled={isInEnemyTeam}
          className={`w-full mt-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
            isInEnemyTeam
              ? 'bg-white/5 text-white/30 cursor-not-allowed'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {isInEnemyTeam ? 'Added to Enemy Team' : 'Add to Enemy Team'}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-32">
        
        {/* Counters (Strong Against) */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-[#3ddc97]" />
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Strong Against</h3>
          </div>
          <div className="space-y-2">
            {hero.counters.map((rel, i) => (
              <RelationshipRow key={i} rel={rel} type="positive" />
            ))}
            {hero.counters.length === 0 && <p className="text-xs text-white/40">No strong counters data.</p>}
          </div>
        </section>

        {/* Countered By (Weak Against) */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-4 h-4 text-[#ff5f6d]" />
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Weak Against</h3>
          </div>
          <div className="space-y-2">
            {hero.countered_by.map((rel, i) => (
              <RelationshipRow key={i} rel={rel} type="negative" />
            ))}
            {hero.countered_by.length === 0 && <p className="text-xs text-white/40">No major weaknesses data.</p>}
          </div>
        </section>

        {/* Synergies */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-[#3ea6ff]" />
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Synergies</h3>
          </div>
          <div className="space-y-2">
            {hero.synergies.map((rel, i) => (
              <RelationshipRow key={i} rel={rel} type="neutral" />
            ))}
            {hero.synergies.length === 0 && <p className="text-xs text-white/40">No synergy data.</p>}
          </div>
        </section>

      </div>
    </motion.div>
  );
}

function RelationshipRow({ rel, type }: { rel: HeroRelationship, type: 'positive' | 'negative' | 'neutral', key?: React.Key }) {
  const colors = {
    positive: 'bg-[#3ddc97]/10 text-[#3ddc97] border-[#3ddc97]/20',
    negative: 'bg-[#ff5f6d]/10 text-[#ff5f6d] border-[#ff5f6d]/20',
    neutral: 'bg-[#3ea6ff]/10 text-[#3ea6ff] border-[#3ea6ff]/20',
  };

  const barColors = {
    positive: 'bg-[#3ddc97]',
    negative: 'bg-[#ff5f6d]',
    neutral: 'bg-[#3ea6ff]',
  };

  return (
    <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0b0f14] border border-white/5 hover:border-white/10 transition-colors">
      <span className="text-sm font-medium text-white/90">{rel.hero}</span>
      <div className="flex items-center gap-3">
        <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div 
            className={`h-full ${barColors[type]} opacity-80`} 
            style={{ width: `${(rel.score / 10) * 100}%` }}
          />
        </div>
        <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-mono font-bold border ${colors[type]}`}>
          {rel.score}
        </div>
      </div>
    </div>
  );
}
