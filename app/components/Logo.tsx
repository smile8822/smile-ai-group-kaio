import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 select-none">
      {/* Logo Mark */}
      <div className="flex h-9 w-9 items-center justify-center rounded-lg
                      bg-gradient-to-br from-white/90 to-white/60
                      text-black font-bold tracking-tight shadow-md">
        AI
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-wide text-white">
          SMILE AI GROUP
        </span>
        <span className="text-[10px] uppercase tracking-widest text-white/60">
          VERIFIED · LIVE · TRANSPARENT
        </span>
      </div>
    </Link>
  );
}
