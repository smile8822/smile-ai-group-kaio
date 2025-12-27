import Container from "./components/Container";
import ServiceCard from "./components/ServiceCard";
import StatusBadge from "./components/StatusBadge";
import { services } from "./components/data";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <Container className="py-24">
          <StatusBadge status="LIVE · VERIFIED · TRANSPARENT" />

          <h1 className="mt-6 max-w-3xl text-4xl md:text-5xl font-bold tracking-tight text-white">
            AI가 운영하고,
            <br className="hidden md:block" />
            사람은 판단에 집중합니다.
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
            SMILE AI GROUP은 모든 시스템을 <b>검증 → 기록 → 반복</b> 구조로 운영합니다.
            <br />
            추정·약속·마케팅을 배제하고 실제 운영 상태만 공개합니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <StatusBadge status="FACTS ONLY" />
            <StatusBadge status="LOGS OPEN" />
            <StatusBadge status="SNAPSHOT READY" />
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <Container>
          <h2 className="mb-12 text-xl font-semibold tracking-wide text-white">
            Core Systems
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                desc={s.desc}
                status={s.status}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* FOOTNOTE */}
      <section className="border-t border-white/10 py-16">
        <Container>
          <p className="max-w-3xl text-sm text-white/50 leading-relaxed">
            모든 정보는 실시간 운영 상태를 기준으로 공개됩니다.
            <br />
            SMILE AI GROUP은 결과가 아닌 <b>운영 구조</b>로 신뢰를 증명합니다.
          </p>
        </Container>
      </section>
    </main>
  );
}
