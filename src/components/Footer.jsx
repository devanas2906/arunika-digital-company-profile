import { navigation } from "../data/siteData.js";
import Brand from "./Brand.jsx";

export default function Footer() {
  return (
    <footer className="bg-[#10233d] pt-10.75 text-[#cad3df]">
      <div className="mx-auto w-[min(1160px,calc(100%-64px))] max-lg:w-[min(100%-48px,760px)] max-md:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-34px)]">
        <div className="grid grid-cols-[1fr_1fr_auto] items-start gap-13.75 pb-9.25 max-md:grid-cols-2 max-md:gap-x-5 max-md:gap-y-7 max-[420px]:grid-cols-1">
          <div>
            <Brand light />
            <p className="mb-0 mt-3.75 max-w-67.5 text-[11px] leading-[1.7] text-[#99a9be]">
              Membangun pengalaman digital yang membantu bisnis melangkah lebih jauh.
            </p>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-semibold text-[#f0f3f7]">Jelajahi</p>
            <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-5.5 gap-y-3">
              {navigation.map((item) => (
                <a
                  className="text-[11px] text-[#aab8ca] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <a
            className="text-[11px] text-[#c0cede] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber max-md:col-span-full max-[420px]:col-span-1"
            href="#beranda"
          >
            Kembali ke atas <span className="ml-1 text-[#9bbdff]">↑</span>
          </a>
        </div>
        <div className="gap-5 border-t border-white/10 py-4 text-[10px] text-[#8799b0] max-md:flex-col max-md:gap-2 max-md:leading-normal">
          © {new Date().getFullYear()} Arunika Digital.
        </div>
      </div>
    </footer>
  );
}
