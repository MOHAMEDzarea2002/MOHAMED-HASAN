import type { Skill } from '../types/types';
import {
  BriefcaseBusiness,
  Handshake,
  UsersRound,
  ChartNoAxesCombined,
  ShoppingCart,
  Presentation,
  Clock3,
  MessagesSquare,
  FileText,
  UserRoundCheck,
  MessageCircleWarning,
} from 'lucide-react';

export const skills: Skill[] = [
  {
    id: 'skill-1',
    name: 'B2B Sales & Account Management',
    icon: BriefcaseBusiness,
  },
  {
    id: 'skill-2',
    name: 'Prospecting Negotiation & Closing',
    icon: Handshake,
  },
  {
    id: 'skill-3',
    name: 'CRM & Client Retention',
    icon: UsersRound,
  },
  {
    id: 'skill-4',
    name: 'Data Analyzing & Market Awareness',
    icon: ChartNoAxesCombined,
  },
  {
    id: 'skill-5',
    name: 'Upselling & Cross-selling',
    icon: ShoppingCart,
  },
  {
    id: 'skill-6',
    name: 'Presentations & Product Demos',
    icon: Presentation,
  },
  {
    id: 'skill-7',
    name: 'Time Management & Organization',
    icon: Clock3,
  },
  {
    id: 'skill-8',
    name: 'Multichannel Support (Calls, Emails, Chat)',
    icon: MessagesSquare,
  },
  {
    id: 'skill-9',
    name: 'Financial Reporting & Documentation',
    icon: FileText,
  },
  {
    id: 'skill-10',
    name: 'Team Collaboration & Training',
    icon: UserRoundCheck,
  },
  {
    id: 'skill-11',
    name: 'Complaint Handling & Escalations',
    icon: MessageCircleWarning,
  },
];
