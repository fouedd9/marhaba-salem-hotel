import { Binoculars, CalendarDays, ConciergeBell, Info, Map, Newspaper, Utensils } from "lucide-react";
import type { ActivityPreview, QuickAction } from "@/types/hotel";

export const quickActions: QuickAction[] = [
  { href: "/map", title: "Explorer l’hôtel", description: "Où voulez-vous aller ?", icon: Map, featured: true },
  { href: "/dining", title: "Menu du jour", description: "Le menu démo de ce soir", icon: Utensils },
  { href: "/activities", title: "Programme du jour", description: "Animations et divertissements", icon: CalendarDays },
  { href: "/map?category=water", title: "Piscines & Plage", description: "Bassins, toboggans et sable fin", icon: Binoculars },
  { href: "/dining#venues", title: "Restaurants & Bars", description: "Découvrez les établissements", icon: ConciergeBell },
  { href: "/news", title: "Actualités", description: "Les nouvelles de l’hôtel", icon: Newspaper },
  { href: "/info", title: "Informations pratiques", description: "Les essentiels de votre séjour", icon: Info },
];

export const todayActivities: ActivityPreview[] = [
  { time: "10:00", title: "Aqua Gym", location: "Piscine extérieure", tone: "teal" },
  { time: "15:00", title: "Beach-volley", location: "Plage de l’hôtel", tone: "sand" },
  { time: "20:30", title: "Musique live", location: "Lobby Bar Obsolut", tone: "coral" },
];
