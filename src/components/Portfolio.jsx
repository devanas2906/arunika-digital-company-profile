import { projects } from "../data/siteData.js";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Portfolio() {
  return (
    <section className="bg-white py-28 max-md:py-19" id="portofolio">
      <div className="mx-auto w-[min(1160px,calc(100%-64px))] max-lg:w-[min(100%-48px,760px)] max-md:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-34px)]">
        <div className="mb-9 flex items-end justify-between gap-12.5 max-md:mb-7.75 max-md:flex-col max-md:items-start max-md:gap-4.25">
          <div>
            <SectionEyebrow>Eksplorasi pilihan</SectionEyebrow>
            <h2 className="mb-0 max-w-152.5 text-[clamp(32px,4vw,43px)] font-semibold leading-[1.17] tracking-[-1.8px] text-navy max-md:text-[clamp(31px,7vw,40px)]">
              Ide yang jadi <span className="text-blue">pengalaman.</span>
            </h2>
          </div>
          <p className="mb-1 max-w-91.25 text-[13px] leading-[1.85] text-muted max-md:mb-0 max-md:max-w-125">
            Contoh konsep untuk menunjukkan ragam pengalaman digital yang bisa
            dirancang dan dikembangkan.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5.25 max-md:grid-cols-1 max-md:gap-7.5">
          {projects.map((project) => (
            <article className="min-w-0" key={project.number}>
              <img
                alt={project.imageAlt}
                className="h-55 w-full rounded-md border border-[#e9edf2] object-cover max-md:h-[min(55vw,260px)] max-md:min-h-47.5"
                decoding="async"
                loading="lazy"
                src={project.image}
              />
              <div className="mt-4.5 flex justify-between text-[10px] text-[#8793a4]">
                <span className="font-semibold text-blue">{project.category}</span>
                <span>{project.number}</span>
              </div>
              <h3 className="mb-1.5 mt-2.25 text-[17px] font-semibold text-navy">
                {project.title}
              </h3>
              <p className="mb-0 max-w-82.5 text-[11px] leading-[1.7] text-muted">
                {project.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mb-0 mt-7.75 text-center text-[10px] text-[#8490a0] max-md:text-left">
          Seluruh proyek di atas adalah konsep fiktif untuk demonstrasi portofolio.
        </p>
      </div>
    </section>
  );
}
