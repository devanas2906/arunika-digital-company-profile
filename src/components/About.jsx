import { principles } from "../data/siteData.js";
import Icon from "./Icon.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function About() {
  return (
    <section className="bg-white py-28 max-md:py-19" id="tentang">
      <div className="mx-auto w-[min(1160px,calc(100%-64px))] max-lg:w-[min(100%-48px,760px)] max-md:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-34px)]">
        <div className="grid grid-cols-[1fr_.8fr] items-end gap-25 max-lg:gap-11.25 max-md:grid-cols-1 max-md:gap-5.5">
          <div>
            <SectionEyebrow>Tentang Arunika</SectionEyebrow>
            <h2 className="mb-0 max-w-152.5 text-[clamp(32px,4vw,43px)] font-semibold leading-[1.17] tracking-[-1.8px] text-navy max-md:text-[clamp(31px,7vw,40px)]">
              Membangun solusi digital yang{" "}
              <span className="text-blue">bermakna.</span>
            </h2>
          </div>
          <div className="pb-1 text-[13px] leading-[1.85] text-muted">
            <p className="mb-2.75">
              Setiap bisnis punya cerita dan tantangan yang berbeda. Kami
              memadukan desain, teknologi, dan pemahaman bisnis untuk merancang
              pengalaman digital yang terasa relevan.
            </p>
            <p className="mb-0">
              Bukan sekadar hadir secara online—tetapi hadir dengan tujuan yang
              jelas dan fondasi yang siap dikembangkan.
            </p>
          </div>
        </div>
        <div className="mt-15 grid grid-cols-3 gap-9.25 border-t border-line pt-7.25 max-md:mt-9.5 max-md:grid-cols-1 max-md:gap-5.75 max-md:pt-6.25">
          {principles.map((item) => (
            <article className="flex gap-3.5" key={item.title}>
              <div className="grid size-9.75 shrink-0 place-items-center rounded-md border border-[#e2eaf7] bg-[#f6f9ff] text-blue">
                <Icon name={item.icon} size={21} />
              </div>
              <div>
                <h3 className="mb-1.5 mt-0 text-[13px] font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mb-0 max-w-62.5 text-[11px] leading-[1.65] text-muted max-md:max-w-102.5">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
