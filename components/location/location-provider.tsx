/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { createContext,useContext,useEffect,useState } from "react"; import { useSearchParams } from "next/navigation";
const LocationContext=createContext({slug:"reception",withLocation:(href:string)=>href});
export function LocationProvider({children}:{children:React.ReactNode}){const params=useSearchParams(),queryLocation=params.get("location"),[slug,setSlug]=useState("reception");useEffect(()=>{const next=queryLocation??sessionStorage.getItem("marhaba-current-location")??"reception";setSlug(next);sessionStorage.setItem("marhaba-current-location",next)},[queryLocation]);const withLocation=(href:string)=>`${href}${href.includes("?")?"&":"?"}location=${encodeURIComponent(slug)}`;return <LocationContext.Provider value={{slug,withLocation}}>{children}</LocationContext.Provider>}
export const useHotelLocation=()=>useContext(LocationContext);
