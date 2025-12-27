export default function ServiceCard({title,desc,status}:{title:string;desc:string;status:string}) {
 return(
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
   <div className="flex justify-between">
    <h3 className="font-semibold">{title}</h3>
    <span className="text-xs">{status}</span>
   </div>
   <p className="mt-3 text-sm text-white/70">{desc}</p>
  </div>
 );
}
