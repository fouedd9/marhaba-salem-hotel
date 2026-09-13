/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { createContext,useContext,useEffect,useState } from "react"; import { useSearchParams } from "next/navigation"; import { normalizeLocation,withLocationParam } from "@/lib/location-url";
const LocationContext=createContext({slug:"reception",withLocation:(href:string)=>href});
export function LocationProvider({children}:{children:React.ReactNode}){const params=useSearchParams(),queryLocation=params.get("location"),[slug,setSlug]=useState("reception");useEffect(()=>{const next=normalizeLocation(queryLocation??sessionStorage.getItem("marhaba-current-location"));setSlug(next);sessionStorage.setItem("marhaba-current-location",next)},[queryLocation]);const withLocation=(href:string)=>withLocationParam(href,slug);return <LocationContext.Provider value={{slug,withLocation}}>{children}</LocationContext.Provider>}
export const useHotelLocation=()=>useContext(LocationContext);
