import {
  BarChart3, Settings, Boxes, ShoppingBag, Users, Truck, Bot, TrendingUp,
  FileText, Smartphone, Globe, Cloud, Factory, Award, Cpu, Clock,
  HeartHandshake, DollarSign, Layers, CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  BarChart3, Settings, Boxes, ShoppingBag, Users, Truck, Bot, TrendingUp,
  FileText, Smartphone, Globe, Cloud, Factory, Award, Cpu, Clock,
  HeartHandshake, DollarSign, Layers,
};

/** Resolves an icon name from the data layer, falling back to a neutral mark. */
export const getIcon = (name: string): LucideIcon => ICONS[name] ?? CheckCircle2;
