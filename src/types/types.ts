// Pillars
import type {LucideIcon} from 'lucide-react'
import type React from 'react';
export type PillarsData = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
};
// Experience
export type Experience = {
  title: string;
  company: string;
  industry?: string;
  location: string;
  startDate: string;
  endDate: string;
  skills: string[];
  responsibilities: string[];
};
// Achievement
export  type Achievement = {
  icon: LucideIcon;
  description: string;
};



export type Skill = {
  id: string;
  name: string;
  icon: LucideIcon;
};
