import { MatrixRain } from "./MatrixRain";

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,#06180e_0%,#030806_55%)]" />
      {/* matrix digital rain */}
      <MatrixRain />
      {/* blueprint grid with radial mask */}
      <div className="bg-grid mask-radial absolute inset-0 opacity-70" />
      {/* drifting green orbs */}
      <div className="glow-orb drift absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 opacity-55" />
      <div
        className="glow-orb drift absolute top-1/3 -left-32 h-[360px] w-[360px] opacity-25"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="glow-orb drift absolute bottom-0 right-0 h-[420px] w-[420px] opacity-20"
        style={{ animationDelay: "-10s" }}
      />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#02060400_0%,#020604_100%)]" />
    </div>
  );
}
