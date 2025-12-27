import Container from "./components/Container";
import ServiceCard from "./components/ServiceCard";
import {services} from "./components/data";
export default function Home(){
 return(
  <main>
   <section className="py-20 border-b border-white/10">
    <Container>
     <h1 className="text-5xl font-bold">AI는 실행하고, 사람은 판단합니다.</h1>
     <p className="mt-6 text-white/70 max-w-2xl">
      실제 운영 상태를 그대로 공개합니다.
     </p>
    </Container>
   </section>
   <section className="py-20">
    <Container>
     <div className="grid md:grid-cols-3 gap-8">
      {services.map(s=>(
        <ServiceCard key={s.title} {...s}/>
      ))}
     </div>
    </Container>
   </section>
  </main>
 );
}
