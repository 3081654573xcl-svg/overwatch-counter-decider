import React, { useState, useMemo, useRef } from 'react';
import { Search, Activity } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { heroes } from './data/heroes';
import { Hero, Role } from './types';

// Components
import { HeroCard } from './components/HeroCard';
import { HeroDetailPanel } from './components/HeroDetailPanel';
import { TeamBuilder } from './components/TeamBuilder';
import { CounterLines } from './components/CounterLines';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<Role | 'All'>('All');
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [hoveredHero, setHoveredHero] = useState<Hero | null>(null);
  const [enemyTeam, setEnemyTeam] = useState<Hero[]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<Record<string, HTMLElement>>({});

  const filteredHeroes = useMemo(() => {
    return heroes.filter((hero) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = hero.name.toLowerCase().includes(searchLower) || 
                            (hero.aliases && hero.aliases.some(alias => alias.toLowerCase().includes(searchLower)));
      const matchesRole = roleFilter === 'All' || hero.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [searchQuery, roleFilter]);

  const handleHeroClick = (hero: Hero) => {
    setSelectedHero(hero);
  };

  const handleAddToEnemyTeam = (hero: Hero) => {
    if (enemyTeam.length < 5 && !enemyTeam.find(h => h.id === hero.id)) {
      setEnemyTeam([...enemyTeam, hero]);
    }
  };

  const handleRemoveFromEnemyTeam = (heroId: string) => {
    setEnemyTeam(enemyTeam.filter(h => h.id !== heroId));
  };

  const handleClearEnemyTeam = () => {
    setEnemyTeam([]);
  };

  const registerCard = (id: string, el: HTMLDivElement | null) => {
    if (el) {
      cardElementsRef.current[id] = el;
    } else {
      delete cardElementsRef.current[id];
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white font-sans flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0b0f14]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#3ea6ff] to-[#8aa4c8] flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-display font-bold tracking-tight">
            Overwatch <span className="text-white/50 font-normal">Counter Intelligence</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search heroes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#141a22] border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#3ea6ff]/50 focus:ring-1 focus:ring-[#3ea6ff]/50 transition-all w-64"
            />
          </div>

          <div className="flex bg-[#141a22] rounded-full p-1 border border-white/5">
            {(['All', 'Tank', 'Damage', 'Support'] as const).map((role) => (
              <button
                key={role}
                onClick={() => setRoleFilter(role)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  roleFilter === role
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden relative">
        <CounterLines 
          hoveredHero={hoveredHero} 
          cardElementsRef={cardElementsRef} 
          containerRef={containerRef} 
        />
        {/* Hero Grid */}
        <div ref={containerRef} className="flex-1 overflow-y-auto p-6 pb-48 relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl mx-auto relative z-10">
            <AnimatePresence>
              {filteredHeroes.map((hero) => (
                <HeroCard
                  key={hero.id}
                  ref={(el) => registerCard(hero.id, el)}
                  hero={hero}
                  onClick={() => handleHeroClick(hero)}
                  onAdd={() => handleAddToEnemyTeam(hero)}
                  onHoverStart={() => setHoveredHero(hero)}
                  onHoverEnd={() => setHoveredHero(null)}
                  isSelected={selectedHero?.id === hero.id}
                  isInEnemyTeam={!!enemyTeam.find(h => h.id === hero.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Panel - Hero Detail */}
        <AnimatePresence>
          {selectedHero && (
            <HeroDetailPanel
              hero={selectedHero}
              onClose={() => setSelectedHero(null)}
              onAdd={() => handleAddToEnemyTeam(selectedHero)}
              isInEnemyTeam={!!enemyTeam.find(h => h.id === selectedHero.id)}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Panel - Team Builder */}
      <TeamBuilder
        enemyTeam={enemyTeam}
        onRemoveHero={handleRemoveFromEnemyTeam}
        onClearTeam={handleClearEnemyTeam}
        allHeroes={heroes}
      />
    </div>
  );
}
