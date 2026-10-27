import Icon from "./Icon.jsx";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_86%_37%,rgba(37,99,235,.05),transparent_34%),linear-gradient(180deg,#fbfcfe_0%,#fff_100%)]"
      id="beranda"
    >
      <div className="mx-auto grid min-h-148.5 w-[min(1160px,calc(100%-64px))] grid-cols-[.94fr_1.06fr] items-center gap-11.25 py-16.5 pb-18 max-lg:min-h-132.5 max-lg:w-[min(100%-48px,760px)] max-lg:grid-cols-[1fr_.9fr] max-lg:gap-4.5 max-md:min-h-0 max-md:w-[calc(100%-40px)] max-md:grid-cols-1 max-md:gap-0.75 max-md:py-16.25 max-md:pb-11.5 max-[420px]:w-[calc(100%-34px)] max-[420px]:pt-13.25">
        <div className="relative z-2 pb-2">
          <SectionEyebrow>Partner digital untuk bisnis bertumbuh</SectionEyebrow>
          <h1 className="mb-5.25 max-w-150 text-[clamp(42px,5.1vw,61px)] font-bold leading-[1.09] tracking-[-3.4px] text-navy max-lg:text-[clamp(42px,5.7vw,54px)] max-md:max-w-145 max-md:text-[clamp(42px,9.5vw,58px)] max-md:tracking-[-2.7px] max-[420px]:text-[42px]">
            Solusi digital untuk membawa bisnis Anda{" "}
            <span className="text-blue">lebih maju.</span>
          </h1>
          <p className="mb-7 max-w-122.5 text-[15px] leading-[1.8] text-muted max-md:max-w-132.5 max-md:text-sm">
            Kami membantu bisnis membangun kehadiran digital melalui desain
            yang thoughtful dan pengembangan web yang andal.
          </p>
          <div className="flex items-center gap-6.5 max-[420px]:items-start max-[420px]:flex-col max-[420px]:gap-4.5">
            <a
              className="inline-flex min-h-12.5 items-center justify-center gap-2.75 rounded-md bg-blue px-5.25 text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(37,99,235,.17)] transition hover:-translate-y-0.5 hover:bg-[#1e50bd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              href="#kontak"
            >
              Mulai Proyek <Icon name="arrow" size={17} />
            </a>
            <a className="inline-flex items-center gap-2.25 text-[13px] font-semibold text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber" href="#layanan">
              Lihat Layanan <span className="text-[17px] text-blue">↓</span>
            </a>
          </div>
          <div className="mt-9.25 flex items-center gap-2.75 text-[11px] text-[#7d899a] max-md:mt-6.25">
            <span className="h-px w-6.25 bg-[#c8d1de]" />
            Strategi, desain, dan teknologi dalam satu alur.
          </div>
        </div>
        <img
          alt="Pratinjau website konsep untuk bisnis konsultasi dan layanan profesional"
          className="h-105 w-full rounded-lg border border-[#e6ebf2] object-cover shadow-[0_30px_70px_rgba(20,43,74,.14),0_4px_12px_rgba(20,43,74,.05)] max-lg:h-90 max-md:mt-1 max-md:h-87.5 max-[420px]:h-75"
          decoding="async"
          fetchPriority="high"
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
        />
      </div>
      <div className="h-px bg-linear-to-r from-transparent via-[#e8edf3] to-transparent" />
    </section>
  );
}
