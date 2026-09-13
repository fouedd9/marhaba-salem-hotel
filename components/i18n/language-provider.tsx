/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { createContext,useContext,useEffect,useState } from "react"; import { dictionaries,type TranslationKey } from "@/lib/i18n/dictionaries";
type Language="fr"|"en";const Context=createContext<{language:Language;setLanguage:(value:Language)=>void;t:(key:TranslationKey)=>string}>({language:"fr",setLanguage:(value)=>void value,t:(key)=>dictionaries.fr[key]});
export function LanguageProvider({children}:{children:React.ReactNode}){const [language,setLanguageState]=useState<Language>("fr");useEffect(()=>{const saved=localStorage.getItem("marhaba-language");if(saved==="en")setLanguageState("en")},[]);const setLanguage=(value:Language)=>{setLanguageState(value);localStorage.setItem("marhaba-language",value);document.documentElement.lang=value};const t=(key:TranslationKey)=>dictionaries[language][key]??dictionaries.fr[key];return <Context.Provider value={{language,setLanguage,t}}>{children}</Context.Provider>}
export const useLanguage=()=>useContext(Context);
export function T({k}:{k:TranslationKey}){return <>{useLanguage().t(k)}</>}
