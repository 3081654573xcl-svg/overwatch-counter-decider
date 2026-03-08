export type Role = 'Tank' | 'Damage' | 'Support';
export type Tier = 'S' | 'A' | 'B' | 'C';

export interface HeroRelationship {
  heroId: string;
  hero: string;
  score: number; // 1 to 10
}

export interface HeroBase {
  id: string;
  name: string;
  role: Role;
  difficulty: 1 | 2 | 3;
  tier: Tier;
  image?: string;
  aliases?: string[];
}

export interface Hero extends HeroBase {
  counters: HeroRelationship[];
  countered_by: HeroRelationship[];
  synergies: HeroRelationship[];
}
