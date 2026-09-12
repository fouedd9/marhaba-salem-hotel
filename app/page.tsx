import Image from "next/image";
import { MapPin, Sun } from "lucide-react";
import { GuestHeader } from "@/components/layout/guest-header";
import { MobileBottomNav } from "@/components/navigation/mobile-bottom-nav";
import { QuickActionCard } from "@/components/guest/quick-action-card";
import { ActivityTimeline } from "@/components/guest/activity-timeline";
import { GlobalSearch } from "@/components/guest/global-search";
import { AnnouncementCard } from "@/components/guest/announcement-card";
import { SectionHeader } from "@/components/guest/section-header";
import { quickActions } from "@/lib/demo-data";
import { getCurrentHotelLocation } from "@/lib/hotel-location";
import { getAnnouncements, getTodayActivities } from "@/lib/services/hotel-service";

export default async function Home({ searchParams }: { searchParams: Promise<{ location?: string }> }) {
  const location = getCurrentHotelLocation((await searchParams).location);
  const [activities, announcements] = await Promise.all([getTodayActivities(), getAnnouncements()]);
  return <main className="min-h-screen bg-[#f7f4ee] pb-24 md:pb-0">
    <section className="relative min-h-[610px] overflow-hidden bg-[#123f3e] text-white md:min-h-[650px]">
      <Image src="/images/marhaba-beach.webp" alt="Plage de sable fin du Marhaba Salem Resort" fill priority className="object-cover object-center"/>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,45,44,.86)_0%,rgba(8,45,44,.52)_45%,rgba(8,45,44,.08)_100%)]"/>
      <GuestHeader location={location.name} transparent/>
      <div className="relative z-10 mx-auto flex min-h-[610px] max-w-7xl items-end px-5 pb-24 pt-32 md:min-h-[650px] md:px-8"><div className="max-w-xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/10 px-4 py-2 text-sm backdrop-blur"><MapPin size={16}/><span className="text-white/65">Vous êtes ici :</span><strong>{location.name}</strong></div>
        <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[#ffd3b8]"><Sun size={16}/>Bonjour</p>
        <h1 className="font-display text-5xl leading-[.98] tracking-[-.03em] sm:text-6xl md:text-7xl">Bienvenue au<br/>Marhaba Salem</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/78">Tout votre séjour, directement depuis votre téléphone.</p><div className="mt-7 max-w-lg"><GlobalSearch/></div>
      </div></div>
    </section>
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <section><SectionHeader eyebrow="Votre séjour, simplifié" title="Que souhaitez-vous faire ?"/><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">{quickActions.map(a=><QuickActionCard key={a.title} action={a}/>)}</div></section>
      <section className="mt-16 grid overflow-hidden rounded-[1.75rem] bg-[#173d3c] text-white md:grid-cols-2"><div className="relative min-h-64"><Image src="/images/marhaba-pool.webp" alt="Piscine extérieure et architecture blanche du Marhaba Salem" fill className="object-cover"/></div><div className="p-7 md:p-10"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#f4ad99]">Piscines & plage</p><h2 className="font-display mt-3 text-3xl">À chacun son moment de détente.</h2><p className="mt-4 text-sm leading-relaxed text-white/70">Deux piscines d’eau douce, une grande piscine d’eau de mer avec toboggans, une piscine enfants et une piscine couverte chauffée en hiver avec jacuzzi.</p></div></section>
      <section className="mt-16"><SectionHeader eyebrow={new Intl.DateTimeFormat("fr-FR",{dateStyle:"full"}).format(new Date())} title="Aujourd’hui à l’hôtel" href="/activities"/><ActivityTimeline items={activities} compact/></section>
      <section className="mt-16"><AnnouncementCard announcement={announcements[0]}/></section>
    </div><MobileBottomNav/>
  </main>;
}
