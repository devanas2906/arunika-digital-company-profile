export default function Brand({ onClick, light = false }) {
  return (
    <a
      aria-label="Arunika Digital, kembali ke beranda"
      className="flex shrink-0 items-center gap-2.5"
      href="#beranda"
      onClick={onClick}
    >
      <span
        className={`grid size-9 place-items-center ${light ? "text-[#8cb4ff]" : "text-blue"}`}
        aria-hidden="true"
      >
        <svg fill="none" viewBox="0 0 36 36">
          <path
            d="M7 25.5a11 11 0 0 1 22 0"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.6"
          />
          <path
            d="M18 5v4M5.5 12.5l3 2M30.5 12.5l-3 2M6 26h24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.6"
          />
          <path
            d="M12 26a6 6 0 0 1 12 0"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.6"
          />
        </svg>
      </span>
      <span
        className={`text-[17px] font-bold tracking-[-.8px] ${light ? "text-white" : "text-navy"}`}
      >
        arunika
        <span className={`ml-1 font-medium ${light ? "text-[#9bbdff]" : "text-blue"}`}>
          digital
        </span>
      </span>
    </a>
  );
}
