import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
type Announcement = { title: string; content: string; type: string; priority: string };
export function AnnouncementCard({ announcement }: { announcement?: Announcement }) {
  if (!announcement) return null;
  return <article className="relative overflow-hidden rounded-[1.75rem] bg-[#e56f51] p-6 text-white md:p-8"><div className="relative z-10 max-w-lg"><span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider"><Sparkles size={14}/>{announcement.type} · {announcement.priority}</span><h2 className="font-display text-3xl md:text-4xl">{announcement.title}</h2><p className="mt-3 max-w-md text-white/85">{announcement.content}</p><Link href="/news" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-[#a64531]">Toutes les actualités <ArrowRight size={16}/></Link></div><div className="absolute -right-12 -top-16 size-56 rounded-full border-[45px] border-white/10"/></article>;
}
