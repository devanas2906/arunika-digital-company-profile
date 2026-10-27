import { siteConfig } from "../data/siteData.js";
import Icon from "./Icon.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Contact() {
  const emailLink = `mailto:${siteConfig.contactEmail}`;

  return (
    <section
      className="relative overflow-hidden bg-navy text-white before:absolute before:-right-30 before:-top-62.5 before:size-162.5 before:rounded-full before:border before:border-white/10 before:content-['']"
      id="kontak"
    >
      <div className="relative mx-auto flex min-h-100 w-[min(1160px,calc(100%-64px))] items-center justify-between gap-12.5 py-19.25 max-lg:w-[min(100%-48px,760px)] max-md:w-[calc(100%-40px)] max-md:flex-col max-md:items-start max-md:gap-8.5 max-md:py-17.25 max-[420px]:w-[calc(100%-34px)]">
        <div className="max-w-147.5">
          <SectionEyebrow light>Mari mulai percakapan</SectionEyebrow>
          <h2 className="mb-4 max-w-135 text-[clamp(34px,4vw,45px)] font-semibold leading-[1.15] tracking-[-1.8px] text-white">
            Punya ide yang ingin <span className="text-[#8cb4ff]">diwujudkan?</span>
          </h2>
          <p className="mb-6 max-w-122.5 text-[13px] leading-[1.8] text-[#b7c4d6]">
            Ceritakan kebutuhan Anda. Kita bisa mulai dengan obrolan singkat
            tentang kemungkinan solusi digital yang tepat.
          </p>
          <div className="flex items-center gap-6 max-[420px]:items-start max-[420px]:flex-col max-[420px]:gap-4.25">
            <a
              className="inline-flex min-h-12.5 items-center justify-center gap-2.75 rounded-md bg-white px-5.25 text-[13px] font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-[#eaf0ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              href={emailLink}
            >
              Hubungi Kami <Icon name="arrow" size={17} />
            </a>
            <a className="text-xs font-semibold text-[#e6edf7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber" href="#layanan">
              Jelajahi layanan <span className="ml-1.5 text-[#9bbdff]">→</span>
            </a>
          </div>
          <p className="mb-0 mt-4.25 text-[10px] text-[#9aacc4]">
            Email:{" "}
            <a className="text-[#d5e4ff] underline underline-offset-[3px]" href={emailLink}>
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
        <div className="relative grid size-67.5 shrink-0 place-items-center overflow-hidden rounded-full border border-white/15 bg-linear-to-br from-white/[.07] to-white/1 max-lg:size-55 max-md:-mb-30 max-md:ml-auto max-md:size-45 max-md:opacity-70 max-[420px]:-mb-22 max-[420px]:size-35">
          <div className="absolute top-10.75 size-14.25 rounded-full bg-linear-to-br from-[#f3c16b] to-[#ea984b] shadow-[0_0_45px_rgba(243,168,59,.31)] max-md:top-6.25 max-md:size-11 max-[420px]:top-4.5 max-[420px]:size-8.25" />
          <div className="absolute size-52.5 rounded-full border border-white/15 max-lg:size-43.75 max-md:size-36 max-[420px]:size-27.75" />
          <div className="absolute size-37.75 rounded-full border border-white/15 max-lg:size-31.5 max-md:size-25.5 max-[420px]:size-19.75" />
          <span className="relative z-2 text-center text-[15px] font-medium leading-[1.6] text-white/85 max-md:text-xs max-[420px]:text-[10px]">
            Let’s build<br />something useful.
          </span>
        </div>
      </div>
    </section>
  );
}
