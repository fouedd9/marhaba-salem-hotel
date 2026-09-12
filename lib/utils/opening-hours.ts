export type DaySchedule={open:string;close:string;closed?:boolean};
export type WeeklySchedule=Partial<Record<"mon"|"tue"|"wed"|"thu"|"fri"|"sat"|"sun",DaySchedule[]>>;
const days=["sun","mon","tue","wed","thu","fri","sat"] as const;
const minutes=(value:string)=>{const [h,m]=value.split(":").map(Number);return h*60+m};
export function getOpeningState(schedule:unknown,now=new Date()){
  if(!schedule||typeof schedule!=="object") return {kind:"unknown" as const,label:"Horaires non renseignés"};
  const periods=(schedule as WeeklySchedule)[days[now.getDay()]]??[];
  if(!periods.length||periods.every(p=>p.closed)) return {kind:"closed" as const,label:"Fermé aujourd’hui"};
  const current=now.getHours()*60+now.getMinutes();
  for(const period of periods){const open=minutes(period.open),close=minutes(period.close);if(current<open)return{kind:"closed" as const,label:`Ouvre à ${period.open}`};if(current>=open&&current<close)return{kind:"open" as const,label:`Ouvert · ferme à ${period.close}`};}
  return {kind:"closed" as const,label:"Fermé"};
}
export function formatSchedule(schedule:unknown){if(!schedule||typeof schedule!=="object")return[];return Object.entries(schedule as WeeklySchedule).map(([day,periods])=>({day,periods:periods??[]}));}
