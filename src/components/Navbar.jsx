import { useState } from "react";
import { navigation } from "../data/siteData.js";
import Brand from "./Brand.jsx";
import Icon from "./Icon.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 h-19.5 border-b border-navy/10 bg-white/95 backdrop-blur md:h-19.5 max-md:h-17">
      <div className="mx-auto flex h-full w-[min(1160px,calc(100%-64px))] items-center justify-between max-md:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-34px)]">
        <Brand onClick={closeMenu} />
        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
          className="hidden size-11 items-center justify-center rounded-md border border-line bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber max-md:flex"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} size={23} />
        </button>
        <nav
          aria-label="Navigasi utama"
          className={`flex items-center gap-8.75 max-md:absolute max-md:left-0 max-md:right-0 max-md:top-16.75 max-md:items-stretch max-md:flex-col max-md:gap-4 max-md:border-b max-md:border-line max-md:bg-white max-md:px-5 max-md:py-4.25 max-md:shadow-lg ${menuOpen ? "max-md:flex" : "hidden md:flex"}`}
          id="primary-navigation"
        >
          <div className="flex items-center gap-7.5 max-md:items-stretch max-md:flex-col max-md:gap-0">
            {navigation.map((item) => (
              <a
                className="text-[13px] font-semibold text-[#526078] transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber max-md:border-b max-md:border-[#f0f2f5] max-md:px-1 max-md:py-2.75 max-md:text-sm"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            className="inline-flex min-h-10.5 items-center justify-center gap-2 rounded-md bg-navy px-4 text-xs font-semibold text-white transition-colors hover:bg-[#203d63] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber max-md:w-full"
            href="#kontak"
            onClick={closeMenu}
          >
            Konsultasi Proyek <Icon name="arrow" size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
