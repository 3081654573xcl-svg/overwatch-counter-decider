import { Hero, HeroBase, HeroRelationship, Role } from '../types';

export const heroesBase: HeroBase[] = [
  { id: 'ana', name: 'Ana', role: 'Support', difficulty: 3, tier: 'S', aliases: ['ana', 'grandma'], image: '/heroes/ana.png' },
  { id: 'anran', name: 'Anran', role: 'Damage', difficulty: 2, tier: 'B', image: '/heroes/anran.png' },
  { id: 'ashe', name: 'Ashe', role: 'Damage', difficulty: 2, tier: 'A', aliases: ['ashe', 'bob'], image: '/heroes/ashe.png' },
  { id: 'baptiste', name: 'Baptiste', role: 'Support', difficulty: 3, tier: 'A', aliases: ['bap'], image: '/heroes/baptiste.png' },
  { id: 'bastion', name: 'Bastion', role: 'Damage', difficulty: 1, tier: 'C', image: '/heroes/bastion.png' },
  { id: 'brigitte', name: 'Brigitte', role: 'Support', difficulty: 1, tier: 'B', aliases: ['brig'], image: '/heroes/brigitte.png' },
  { id: 'cassidy', name: 'Cassidy', role: 'Damage', difficulty: 2, tier: 'B', aliases: ['cass', 'mccree', 'cree'], image: '/heroes/cassidy.png' },
  { id: 'domina', name: 'Domina', role: 'Damage', difficulty: 2, tier: 'B', image: '/heroes/domina.png' },
  { id: 'doomfist', name: 'Doomfist', role: 'Tank', difficulty: 3, tier: 'B', aliases: ['doom'], image: '/heroes/doomfist.png' },
  { id: 'dva', name: 'D.Va', role: 'Tank', difficulty: 2, tier: 'A', aliases: ['dva', 'hana', 'mech'], image: '/heroes/dva.png' },
  { id: 'echo', name: 'Echo', role: 'Damage', difficulty: 3, tier: 'S', aliases: ['echo'], image: '/heroes/echo.png' },
  { id: 'emre', name: 'Emre', role: 'Damage', difficulty: 2, tier: 'B', image: '/heroes/emre.png' },
  { id: 'freja', name: 'Freja', role: 'Damage', difficulty: 2, tier: 'B', image: '/heroes/freja.png' },
  { id: 'genji', name: 'Genji', role: 'Damage', difficulty: 3, tier: 'B', aliases: ['genji', 'ninja'], image: '/heroes/genji.png' },
  { id: 'hanzo', name: 'Hanzo', role: 'Damage', difficulty: 3, tier: 'B', image: '/heroes/hanzo.png' },
  { id: 'hazard', name: 'Hazard', role: 'Tank', difficulty: 2, tier: 'B', image: '/heroes/hazard.png' },
  { id: 'illari', name: 'Illari', role: 'Support', difficulty: 2, tier: 'B', image: '/heroes/illari.png' },
  { id: 'jetpackcat', name: 'Jetpack Cat', role: 'Damage', difficulty: 2, tier: 'B', image: '/heroes/jetpackcat.png' },
  { id: 'junkerqueen', name: 'Junker Queen', role: 'Tank', difficulty: 2, tier: 'B', aliases: ['jq', 'queen'], image: '/heroes/junkerqueen.png' },
  { id: 'junkrat', name: 'Junkrat', role: 'Damage', difficulty: 1, tier: 'C', aliases: ['junk'], image: '/heroes/junkrat.png' },
  { id: 'juno', name: 'Juno', role: 'Support', difficulty: 2, tier: 'B', image: '/heroes/juno.png' },
  { id: 'kiriko', name: 'Kiriko', role: 'Support', difficulty: 3, tier: 'S', aliases: ['kiri'], image: '/heroes/kiriko.png' },
  { id: 'lifeweaver', name: 'Lifeweaver', role: 'Support', difficulty: 2, tier: 'C', aliases: ['lw', 'wifeleaver'], image: '/heroes/lifeweaver.png' },
  { id: 'lucio', name: 'Lúcio', role: 'Support', difficulty: 2, tier: 'A', aliases: ['lucio', 'frog'], image: '/heroes/lucio.png' },
  { id: 'mauga', name: 'Mauga', role: 'Tank', difficulty: 1, tier: 'S', image: '/heroes/mauga.png' },
  { id: 'mei', name: 'Mei', role: 'Damage', difficulty: 2, tier: 'B', aliases: ['mei'], image: '/heroes/mei.png' },
  { id: 'mercy', name: 'Mercy', role: 'Support', difficulty: 1, tier: 'B', aliases: ['mercy'], image: '/heroes/mercy.png' },
  { id: 'mizuki', name: 'Mizuki', role: 'Damage', difficulty: 2, tier: 'B', image: '/heroes/mizuki.png' },
  { id: 'moira', name: 'Moira', role: 'Support', difficulty: 1, tier: 'B', aliases: ['moira'], image: '/heroes/moira.png' },
  { id: 'orisa', name: 'Orisa', role: 'Tank', difficulty: 2, tier: 'A', aliases: ['horse'], image: '/heroes/orisa.png' },
  { id: 'pharah', name: 'Pharah', role: 'Damage', difficulty: 2, tier: 'A', aliases: ['pharah'], image: '/heroes/pharah.png' },
  { id: 'ramattra', name: 'Ramattra', role: 'Tank', difficulty: 2, tier: 'A', aliases: ['ram'], image: '/heroes/ramattra.png' },
  { id: 'reaper', name: 'Reaper', role: 'Damage', difficulty: 1, tier: 'B', aliases: ['reaper'], image: '/heroes/reaper.png' },
  { id: 'reinhardt', name: 'Reinhardt', role: 'Tank', difficulty: 1, tier: 'B', aliases: ['rein'], image: '/heroes/reinhardt.png' },
  { id: 'roadhog', name: 'Roadhog', role: 'Tank', difficulty: 1, tier: 'C', aliases: ['hog'], image: '/heroes/roadhog.png' },
  { id: 'sigma', name: 'Sigma', role: 'Tank', difficulty: 3, tier: 'S', aliases: ['sig'], image: '/heroes/sigma.png' },
  { id: 'sojourn', name: 'Sojourn', role: 'Damage', difficulty: 2, tier: 'S', aliases: ['sojourn'], image: '/heroes/sojourn.png' },
  { id: 'soldier76', name: 'Soldier: 76', role: 'Damage', difficulty: 1, tier: 'A', aliases: ['soldier', '76', 'legs'], image: '/heroes/soldier76.png' },
  { id: 'sombra', name: 'Sombra', role: 'Damage', difficulty: 2, tier: 'A', aliases: ['sombra'], image: '/heroes/sombra.png' },
  { id: 'symmetra', name: 'Symmetra', role: 'Damage', difficulty: 2, tier: 'C', aliases: ['sym'], image: '/heroes/symmetra.png' },
  { id: 'torbjorn', name: 'Torbjörn', role: 'Damage', difficulty: 1, tier: 'B', aliases: ['torb'], image: '/heroes/torbjorn.png' },
  { id: 'tracer', name: 'Tracer', role: 'Damage', difficulty: 3, tier: 'S', aliases: ['tracer'], image: '/heroes/tracer.png' },
  { id: 'vendetta', name: 'Vendetta', role: 'Damage', difficulty: 2, tier: 'B', image: '/heroes/vendetta.png' },
  { id: 'venture', name: 'Venture', role: 'Damage', difficulty: 2, tier: 'A', image: '/heroes/venture.png' },
  { id: 'widowmaker', name: 'Widowmaker', role: 'Damage', difficulty: 3, tier: 'A', aliases: ['widow'], image: '/heroes/widowmaker.png' },
  { id: 'winston', name: 'Winston', role: 'Tank', difficulty: 2, tier: 'S', aliases: ['winton', 'monkey'], image: '/heroes/winston.png' },
  { id: 'wreckingball', name: 'Wrecking Ball', role: 'Tank', difficulty: 3, tier: 'B', aliases: ['ball', 'hammond'], image: '/heroes/wreckingball.png' },
  { id: 'wuyang', name: 'Wuyang', role: 'Damage', difficulty: 2, tier: 'B', image: '/heroes/wuyang.png' },
  { id: 'zarya', name: 'Zarya', role: 'Tank', difficulty: 2, tier: 'A', aliases: ['zarya'], image: '/heroes/zarya.png' },
  { id: 'zenyatta', name: 'Zenyatta', role: 'Support', difficulty: 3, tier: 'A', aliases: ['zen'], image: '/heroes/zenyatta.png' }
];

export const counterMatrix: Record<string, Record<string, number>> = {
  ana: { roadhog: 9, mauga: 9, doomfist: 8, zenyatta: 7, lucio: 7, hazard: 8, moira: 7, ramattra: 8 },
  anran: { tracer: 8, genji: 7, sombra: 7 },
  ashe: { pharah: 8, echo: 8, mercy: 7, junkrat: 7, mei: 6, emre: 7, wuyang: 7 },
  baptiste: { pharah: 7, echo: 7, winston: 6, reinhardt: 6, roadhog: 6 },
  bastion: { winston: 9, reinhardt: 9, wreckingball: 8, doomfist: 8, roadhog: 7, brigitte: 8 },
  brigitte: { tracer: 9, genji: 8, sombra: 8, winston: 7, wreckingball: 7 },
  cassidy: { pharah: 8, echo: 8, tracer: 7, sombra: 7, doomfist: 7, jetpackcat: 8 },
  domina: { reinhardt: 8, winston: 7, orisa: 7 },
  doomfist: { zenyatta: 9, widowmaker: 8, soldier76: 8, ashe: 8, baptiste: 7 },
  dva: { pharah: 9, echo: 8, winston: 8, widowmaker: 7, soldier76: 7, juno: 8, moira: 8, sojourn: 8, mizuki: 8 },
  echo: { pharah: 7, reaper: 8, zenyatta: 8, junkrat: 8, symmetra: 8, brigitte: 7, anran: 8, junkerqueen: 8, vendetta: 8, venture: 8, wuyang: 8 },
  emre: { pharah: 8, echo: 7, mercy: 7 },
  freja: { roadhog: 8, mauga: 7, doomfist: 7 },
  genji: { widowmaker: 9, zenyatta: 8, ana: 8, ashe: 7, bastion: 9, domina: 8, freja: 7 },
  hanzo: { bastion: 8, torbjorn: 8, cassidy: 7, mei: 7, zenyatta: 7, emre: 8 },
  hazard: { winston: 8, reinhardt: 8, sigma: 7, zarya: 7, ramattra: 7 },
  illari: { pharah: 8, echo: 7, mercy: 7 },
  jetpackcat: { widowmaker: 8, hanzo: 7, ashe: 7 },
  junkerqueen: { sigma: 8, reinhardt: 7, winston: 7 },
  junkrat: { reinhardt: 8, sigma: 8, orisa: 7 },
  juno: { tracer: 8, genji: 8, sombra: 8, reaper: 7, doomfist: 7 },
  kiriko: { ana: 9, roadhog: 8, ashe: 7, widowmaker: 7, mei: 7 },
  lifeweaver: { orisa: 8, roadhog: 8, mei: 7, zarya: 7, doomfist: 7 },
  lucio: { widowmaker: 7, ana: 7, zenyatta: 7, ashe: 6, hanzo: 6 },
  mauga: { reinhardt: 8, winston: 8, roadhog: 7 },
  mei: { wreckingball: 9, genji: 8, doomfist: 8, dva: 8, sigma: 7 },
  mercy: { pharah: 8, echo: 8, ashe: 7, soldier76: 7, sojourn: 7 },
  mizuki: { zenyatta: 8, ana: 7, widowmaker: 7 },
  moira: { genji: 8, tracer: 7, lucio: 7, sombra: 7, zenyatta: 6 },
  orisa: { doomfist: 9, reinhardt: 8, roadhog: 8, winston: 7, wreckingball: 7 },
  pharah: { junkrat: 9, reaper: 9, symmetra: 9, mei: 8, brigitte: 8, reinhardt: 9, doomfist: 9, hazard: 7, lifeweaver: 8, anran: 8, junkerqueen: 8, vendetta: 8, venture: 8, wuyang: 8 },
  ramattra: { reinhardt: 8, sigma: 8, dva: 7, genji: 7, mei: 7 },
  reaper: { winston: 9, roadhog: 9, reinhardt: 8, sigma: 8, wreckingball: 8 },
  reinhardt: { zarya: 7, sigma: 7, widowmaker: 6 },
  roadhog: { doomfist: 8, winston: 8, wreckingball: 8, reinhardt: 7, sigma: 7 },
  sigma: { widowmaker: 8, cassidy: 8, ashe: 7, bastion: 7, soldier76: 7 },
  sojourn: { roadhog: 8, mauga: 8, orisa: 7, reinhardt: 7, bastion: 7 },
  soldier76: { pharah: 8, echo: 8, mercy: 7, roadhog: 7, torbjorn: 6, jetpackcat: 8 },
  sombra: { doomfist: 10, wreckingball: 9, zenyatta: 9, widowmaker: 8, bastion: 8, baptiste: 8, juno: 8, kiriko: 8, lifeweaver: 8, domina: 7, freja: 8, illari: 8 },
  symmetra: { genji: 8, dva: 8, sigma: 8, orisa: 8, reinhardt: 7 },
  torbjorn: { tracer: 8, genji: 8, sombra: 7, lucio: 7, wreckingball: 7, jetpackcat: 7 },
  tracer: { zenyatta: 9, widowmaker: 8, ana: 8, hanzo: 8, bastion: 7, baptiste: 7, kiriko: 7, lifeweaver: 8, domina: 8, freja: 8, illari: 8, mizuki: 7 },
  vendetta: { tracer: 8, genji: 8, sombra: 7 },
  venture: { sigma: 8, reinhardt: 7, bastion: 7 },
  widowmaker: { pharah: 9, echo: 8, zenyatta: 8, torbjorn: 8, soldier76: 9, cassidy: 8, mercy: 9, moira: 8, anran: 7, emre: 8, junkerqueen: 7, vendetta: 7, venture: 7 },
  winston: { widowmaker: 9, genji: 8, zenyatta: 8, hanzo: 9, ana: 8, juno: 8, kiriko: 7, sojourn: 8, symmetra: 8, illari: 7, mizuki: 8 },
  wreckingball: { widowmaker: 9, zenyatta: 8, ashe: 8, hanzo: 7, ana: 7 },
  wuyang: { doomfist: 8, wreckingball: 7, winston: 7 },
  zarya: { dva: 9, orisa: 9, sigma: 9, genji: 8, junkrat: 8 },
  zenyatta: { roadhog: 9, mauga: 9, orisa: 8, ramattra: 8, bastion: 8, hazard: 8 }
};

export const synergyMatrix: Record<string, Record<string, number>> = {
  ana: { reinhardt: 10, genji: 9, winston: 9, cassidy: 8, soldier76: 8 },
  anran: { mercy: 8, ana: 7, reinhardt: 7 },
  ashe: { mercy: 10, sigma: 8, baptiste: 8, wreckingball: 7, tracer: 7 },
  baptiste: { sigma: 9, reinhardt: 9, bastion: 9, mei: 8, orisa: 9 },
  bastion: { baptiste: 9, reinhardt: 8, mercy: 8, sigma: 7, orisa: 7 },
  brigitte: { ana: 9, baptiste: 8, reinhardt: 8, cassidy: 7, mei: 7 },
  cassidy: { ana: 8, reinhardt: 8, mercy: 7, baptiste: 7, zarya: 7 },
  domina: { lucio: 8, baptiste: 7, zarya: 7 },
  doomfist: { tracer: 9, genji: 8, sombra: 8, kiriko: 7, ana: 7 },
  dva: { winston: 9, tracer: 8, sombra: 8, genji: 8, mercy: 7 },
  echo: { mercy: 9, winston: 7, ana: 7, tracer: 7, dva: 7 },
  emre: { ana: 8, winston: 7, tracer: 7 },
  freja: { brigitte: 8, reinhardt: 7, lucio: 7 },
  genji: { ana: 10, winston: 9, tracer: 8, zarya: 8, doomfist: 8 },
  hanzo: { zarya: 10, sigma: 8, mercy: 8, kiriko: 7, baptiste: 7 },
  hazard: { lucio: 8, moira: 8, mei: 7 },
  illari: { sigma: 8, baptiste: 7, ashe: 7 },
  jetpackcat: { winston: 8, tracer: 7, genji: 7 },
  junkerqueen: { lucio: 8, brigitte: 7, genji: 7 },
  junkrat: { roadhog: 8, mercy: 7, baptiste: 7 },
  juno: { winston: 8, tracer: 8, dva: 7 },
  kiriko: { roadhog: 9, winston: 8, genji: 8, tracer: 8, sojourn: 8 },
  lifeweaver: { bastion: 8, sigma: 8, cassidy: 7 },
  lucio: { reinhardt: 10, ramattra: 9, mei: 8, reaper: 8, winston: 7 },
  mauga: { kiriko: 8, ana: 7, lucio: 7 },
  mei: { reinhardt: 9, ramattra: 8, lucio: 8, baptiste: 8, orisa: 7 },
  mercy: { pharah: 10, ashe: 10, echo: 9, soldier76: 9, sojourn: 8 },
  mizuki: { sombra: 8, doomfist: 7, genji: 7 },
  moira: { reinhardt: 9, lucio: 8, ramattra: 8, reaper: 8, mei: 7 },
  orisa: { baptiste: 9, ana: 8, bastion: 8, mei: 7, torbjorn: 7 },
  pharah: { mercy: 10, echo: 8, ana: 7, winston: 7, wreckingball: 7 },
  ramattra: { lucio: 9, ana: 8, mei: 8, reaper: 7, baptiste: 7 },
  reaper: { lucio: 9, moira: 8, reinhardt: 8, ramattra: 7, zarya: 7 },
  reinhardt: { lucio: 10, ana: 10, baptiste: 9, mei: 9, zarya: 9 },
  roadhog: { kiriko: 9, ana: 8, mei: 7, junkrat: 7, torbjorn: 7 },
  sigma: { baptiste: 9, zenyatta: 8, widowmaker: 8, ashe: 7, hanzo: 7 },
  sojourn: { mercy: 8, kiriko: 8, winston: 7, sigma: 7, baptiste: 7 },
  soldier76: { mercy: 9, ana: 8, reinhardt: 8, baptiste: 8, sigma: 7 },
  sombra: { tracer: 9, winston: 9, doomfist: 8, wreckingball: 8, dva: 8 },
  symmetra: { reinhardt: 8, mei: 8, lucio: 8, baptiste: 7, sigma: 7 },
  torbjorn: { orisa: 8, sigma: 8, baptiste: 7, mercy: 7, symmetra: 7 },
  tracer: { winston: 9, sombra: 9, doomfist: 9, dva: 8, zenyatta: 8 },
  vendetta: { ana: 8, reinhardt: 7, cassidy: 7 },
  venture: { zarya: 8, lucio: 7, moira: 7 },
  widowmaker: { sigma: 8, mercy: 8, zenyatta: 7, baptiste: 7, tracer: 6 },
  winston: { tracer: 9, genji: 9, ana: 9, dva: 9, sombra: 9 },
  wreckingball: { tracer: 9, sombra: 8, pharah: 7, echo: 7, zenyatta: 7 },
  wuyang: { baptiste: 8, sigma: 7, mei: 7 },
  zarya: { reinhardt: 9, hanzo: 10, genji: 8, reaper: 7, moira: 7 },
  zenyatta: { tracer: 8, winston: 8, wreckingball: 7, sigma: 8, baptiste: 7 }
};

export const heroById = new Map<string, HeroBase>(
  heroesBase.map(h => [h.id, h])
);

export function getCounters(heroId: string): HeroRelationship[] {
  const counters = counterMatrix[heroId] || {};
  return Object.entries(counters)
    .map(([enemyId, score]) => {
      const enemy = heroById.get(enemyId);
      return { heroId: enemyId, hero: enemy?.name || enemyId, score };
    })
    .sort((a, b) => b.score - a.score);
}

export function getCounteredBy(heroId: string): HeroRelationship[] {
  const counteredBy: HeroRelationship[] = [];
  for (const [enemyId, targets] of Object.entries(counterMatrix)) {
    if (targets[heroId]) {
      const enemy = heroById.get(enemyId);
      counteredBy.push({ heroId: enemyId, hero: enemy?.name || enemyId, score: targets[heroId] });
    }
  }
  return counteredBy.sort((a, b) => b.score - a.score);
}

export function getSynergies(heroId: string): HeroRelationship[] {
  const synergies: HeroRelationship[] = [];
  const mutualSynergies = new Map<string, number>();
  
  if (synergyMatrix[heroId]) {
    for (const [allyId, score] of Object.entries(synergyMatrix[heroId])) {
      mutualSynergies.set(allyId, score);
    }
  }
  
  for (const [allyId, targets] of Object.entries(synergyMatrix)) {
    if (targets[heroId] && !mutualSynergies.has(allyId)) {
      mutualSynergies.set(allyId, targets[heroId]);
    }
  }
  
  for (const [allyId, score] of mutualSynergies.entries()) {
    const ally = heroById.get(allyId);
    synergies.push({ heroId: allyId, hero: ally?.name || allyId, score });
  }
  
  return synergies.sort((a, b) => b.score - a.score);
}

export function buildHeroWithRelationships(heroBase: HeroBase): Hero {
  return {
    ...heroBase,
    counters: getCounters(heroBase.id),
    countered_by: getCounteredBy(heroBase.id),
    synergies: getSynergies(heroBase.id)
  };
}

export function buildAllHeroes(): Hero[] {
  return heroesBase.map(buildHeroWithRelationships);
}

export function getCounterScore(
  candidateHeroId: string, 
  enemyHeroId: string, 
  matrix: Record<string, Record<string, number>>
): number {
  let score = 0;
  if (matrix[candidateHeroId]?.[enemyHeroId]) {
    score += matrix[candidateHeroId][enemyHeroId];
  }
  if (matrix[enemyHeroId]?.[candidateHeroId]) {
    score -= matrix[enemyHeroId][candidateHeroId];
  }
  return score;
}

export function getSynergyScore(h1: string, h2: string): number {
  const s1 = synergyMatrix[h1]?.[h2] || 0;
  const s2 = synergyMatrix[h2]?.[h1] || 0;
  return Math.max(s1, s2);
}

export function getTeamSynergyScore(teamIds: string[]): number {
  let totalSynergy = 0;
  for (let i = 0; i < teamIds.length; i++) {
    for (let j = i + 1; j < teamIds.length; j++) {
      totalSynergy += getSynergyScore(teamIds[i], teamIds[j]);
    }
  }
  return totalSynergy;
}

export function getRecommendedTeam(
  enemyTeamIds: string[],
  heroesBaseList: HeroBase[],
  matrix: Record<string, Record<string, number>>,
  roleConstraints = { tank: 1, damage: 2, support: 2 }
): { team: Hero[], confidence: number } | null {
  if (enemyTeamIds.length === 0) return null;

  const candidates = heroesBaseList.filter(h => !enemyTeamIds.includes(h.id));
  const team: HeroBase[] = [];
  
  // Roles to fill in order: Tank -> Support -> Damage (Tanks and Supports are usually the core of synergy)
  const roles: Role[] = [
    ...Array(roleConstraints.tank).fill('Tank'),
    ...Array(roleConstraints.support).fill('Support'),
    ...Array(roleConstraints.damage).fill('Damage')
  ];

  for (const role of roles) {
    let bestHero: HeroBase | null = null;
    let bestScore = -Infinity;

    for (const candidate of candidates) {
      if (candidate.role !== role || team.find(t => t.id === candidate.id)) continue;

      let counterScore = 0;
      for (const enemyId of enemyTeamIds) {
        counterScore += getCounterScore(candidate.id, enemyId, matrix);
      }

      let synergyBonus = 0;
      for (const teammate of team) {
        synergyBonus += getSynergyScore(candidate.id, teammate.id);
      }

      const totalScore = counterScore + (synergyBonus * 0.8); // Synergy weighting
      if (totalScore > bestScore) {
        bestScore = totalScore;
        bestHero = candidate;
      }
    }

    if (bestHero) team.push(bestHero);
  }

  const totalCounterScore = team.reduce((sum, h) => {
    let s = 0;
    for (const eid of enemyTeamIds) s += getCounterScore(h.id, eid, matrix);
    return sum + s;
  }, 0);
  
  const totalSynergyScore = getTeamSynergyScore(team.map(h => h.id));
  
  const maxCounter = enemyTeamIds.length * 10 * team.length;
  const maxSynergy = (team.length * (team.length - 1) / 2) * 10;
  
  let confidence = 40 + ((totalCounterScore / maxCounter) * 40) + ((totalSynergyScore / maxSynergy) * 20);
  confidence = Math.max(10, Math.min(98, confidence));

  return { 
    team: team.map(h => buildHeroWithRelationships(h)),
    confidence: Math.round(confidence) 
  };
}
