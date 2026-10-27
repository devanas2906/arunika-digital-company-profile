import { processSteps } from "../data/siteData.js";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Process() {
  return (
    <section className="bg-pale py-28 max-md:py-19">
      <div className="mx-auto w-[min(1160px,calc(100%-64px))] max-lg:w-[min(100%-48px,760px)] max-md:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-34px)]">
        <div className="mb-10.5 flex items-end justify-between gap-12.5 max-md:mb-7.75 max-md:flex-col max-md:items-start max-md:gap-4.25">
          <div>
            <SectionEyebrow>Alur kolaborasi</SectionEyebrow>
            <h2 className="mb-0 max-w-152.5 text-[clamp(32px,4vw,43px)] font-semibold leading-[1.17] tracking-[-1.8px] text-navy max-md:text-[clamp(31px,7vw,40px)]">
              Jelas dari awal,<br />
              <span className="text-blue">hingga siap digunakan.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-91.25 text-[13px] leading-[1.85] text-muted max-md:mb-0 max-md:max-w-125">
            Proses yang transparan membantu setiap keputusan tetap terarah dan
            setiap tahap terasa lebih terukur.
          </p>
        </div>
        <ol className="m-0 grid list-none grid-cols-4 p-0 max-md:grid-cols-2 max-md:gap-x-5 max-md:gap-y-7 max-[420px]:grid-cols-1">
          {processSteps.map((step) => (
            <li
              className="relative border-t border-[#dfe5ec] pr-6.75 pt-5.75 before:absolute before:-top-1 before:left-0 before:size-1.75 before:rounded-full before:border-2 before:border-pale before:bg-blue before:content-[''] max-md:min-h-31.5 max-md:pr-2.25 max-[420px]:min-h-0 max-[420px]:pt-5"
              key={step.number}
            >
              <span className="text-[10px] tracking-wide text-[#9ba7b6]">
                {step.number}
              </span>
              <h3 className="mb-2 mt-3.75 text-[15px] font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mb-0 max-w-56.25 text-[11px] leading-[1.7] text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
