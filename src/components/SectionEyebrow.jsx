export default function SectionEyebrow({ children, light = false }) {
  return (
    <p
      className={`mb-4.5 flex items-center gap-2 text-[11px] font-bold uppercase leading-[1.4] tracking-[1.25px] ${
        light ? "text-[#b7c8e3]" : "text-blue"
      }`}
    >
      <span className="h-0.5 w-5.25 bg-amber" />
      {children}
    </p>
  );
}
