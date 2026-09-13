export function normalizeLocation(value?:string|null){const cleaned=(value??"reception").trim().toLowerCase().replace(/^location=/,"");return cleaned||"reception"}
export function withLocationParam(href:string,location:string){const [path,query=""]=href.split("?");const params=new URLSearchParams(query);params.set("location",normalizeLocation(location));return `${path}?${params.toString()}`}
