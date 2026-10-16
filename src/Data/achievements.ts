import { TrendingUp, HeartHandshake, Target, Rocket } from 'lucide-react';
import type { Achievement } from '../types/types';

export const achievements: Achievement[] = [
  {
    icon: TrendingUp as Achievement['icon'],
    description:
      'Provided business solutions that were the main factors in increasing revenue by 450%.',
  },
  {
    icon: HeartHandshake as Achievement['icon'],
    description:
      'Consistently maintained 92%+ customer satisfaction scores through effective problem resolution.',
  },
  {
    icon: Target as Achievement['icon'],
    description: 'Achieved personal targets by a ratio of 10 months a year.',
  },
  {
    icon: Rocket as Achievement['icon'],
    description:
      'Successfully launched new fragrance products to the local Egyptian market, driving adoption and brand visibility.',
  },
];
