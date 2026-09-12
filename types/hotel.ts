import type { LucideIcon } from "lucide-react";

export type ActivityPreview = { time: string; title: string; location: string; tone?: "coral" | "teal" | "sand" };
export type QuickAction = { href: string; title: string; description: string; icon: LucideIcon; featured?: boolean };
