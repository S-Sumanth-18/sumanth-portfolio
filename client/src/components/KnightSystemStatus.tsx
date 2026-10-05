export function KnightSystemStatus({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="K.N.I.G.H.T. online. Open assistant"
      title="Open K.N.I.G.H.T. assistant"
      className="fixed right-4 top-4 z-40 flex min-h-10 items-center gap-2.5 border border-white/10 bg-[#111214]/90 px-3 font-mono text-[10px] text-slate-300 shadow-lg shadow-black/20 backdrop-blur transition-colors hover:border-cyan-400/30 hover:bg-[#151619] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:right-6 sm:top-6"
    >
      <svg
        viewBox="0 0 32 20"
        className="h-4 w-6 shrink-0 text-cyan-300"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M2 4.5 8 7.4l4.7-1.8L16 9.2l3.3-3.6L24 7.4l6-2.9-2.4 9-5.2-1.7-3.7 4.1-2.7-3.1-2.7 3.1-3.7-4.1-5.2 1.7z" />
      </svg>
      <span className="tracking-wider">K.N.I.G.H.T.</span>
      <span aria-hidden="true" className="system-online-dot h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
      <span className="text-slate-400">ONLINE</span>
    </button>
  );
}