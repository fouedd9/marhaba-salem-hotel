"use client";
import Link from "next/link"; import { useHotelLocation } from "./location-provider";
export function LocationLink({href,className,children}:{href:string;className?:string;children:React.ReactNode}){const {withLocation}=useHotelLocation();return <Link href={withLocation(href)} className={className}>{children}</Link>}
