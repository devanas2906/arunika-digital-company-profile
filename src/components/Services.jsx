import { services } from "../data/siteData.js";
import Icon from "./Icon.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Services() {
  return (
    <section className="scroll-mt-20.5 bg-pale py-28 max-md:scroll-mt-18 max-md:py-19" id="layanan">
      <div className="mx-auto w-[min(1160px,calc(100%-64px))] max-lg:w-[min(100%-48px,760px)] max-md:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-34px)]">
        <div className="mb-10.5 flex items-end justify-between gap-12.5 max-md:mb-7.75 max-md:flex-col max-md:items-start max-md:gap-4.25">
          <div>
            <SectionEyebrow>Apa yang kami lakukan</SectionEyebrow>
            <h2 className="mb-0 max-w-152.5 text-[clamp(32px,4vw,43px)] font-semibold leading-[1.17] tracking-[-1.8px] text-navy max-md:text-[clamp(31px,7vw,40px)]">
              Solusi yang tepat,<br />
              <span className="text-blue">untuk langkah berikutnya.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-91.25 text-[13px] leading-[1.85] text-muted max-md:mb-0 max-md:max-w-125">
            Kami menggabungkan keahlian desain dan pengembangan untuk membantu
            bisnis bergerak lebih percaya diri di ranah digital.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4.5 max-md:grid-cols-1 max-md:gap-3">
          {services.map((service) => (
            <article
              className="flex min-h-67 flex-col rounded-md border border-[#e7ebf1] bg-white p-6 transition hover:-translate-y-0.75 hover:border-[#d6e1f3] hover:shadow-[0_12px_30px_rgba(20,43,74,.06)] max-md:min-h-60"
              key={service.number}
            >
              <div className="flex items-start justify-between">
                <div className="grid size-10.75 place-items-center rounded-md bg-[#eff4ff] text-blue">
                  <Icon name={service.icon} size={23} />
                </div>
                <span className="text-[10px] tracking-wide text-[#a4afbe]">
                  {service.number}
                </span>
              </div>
              <h3 className="mb-2.25 mt-5.5 text-[17px] font-semibold tracking-[-.3px] text-navy">
                {service.title}
              </h3>
              <p className="mb-4 text-xs leading-[1.7] text-muted">
                {service.description}
              </p>
              <div className="mt-auto flex items-center gap-2 text-[10px] font-semibold text-[#526078]">
                <span className="size-1.25 shrink-0 rounded-full bg-amber" />
                {service.value}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
