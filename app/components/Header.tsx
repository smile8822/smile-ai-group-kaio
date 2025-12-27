import Link from "next/link"; import Container from "./Container";
export default function Header(){
 return(
  <header className="sticky top-0 border-b border-white/10 bg-black/60 backdrop-blur">
   <Container>
    <div className="h-14 flex items-center justify-between">
     <div className="font-semibold">SMILE AI GROUP</div>
     <nav className="flex gap-6 text-sm text-white/70">
      <Link href="/ops">OPS</Link>
      <Link href="/transparency">투명성</Link>
      <Link href="/status">상태</Link>
     </nav>
    </div>
   </Container>
  </header>
 );
}
