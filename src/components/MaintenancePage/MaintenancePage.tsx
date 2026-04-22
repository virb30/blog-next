import Logo from "@/components/Logo/Logo";

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_40%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(2,6,23,0.95))]" />

      <section className="relative z-10 w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-indigo-950/40 backdrop-blur md:p-12">
        <div className="mb-10 flex items-center justify-between gap-6 border-b border-white/10 pb-6">
          <Logo className="w-44 max-w-full" />
          <span className="rounded-full border border-indigo-300/30 bg-indigo-400/10 px-4 py-2 text-sm font-medium tracking-[0.2em] uppercase text-indigo-100">
            Status do site
          </span>
        </div>

        <div className="space-y-6">
          <p className="font-magik text-sm tracking-[0.35em] uppercase text-indigo-200">
            Atualização em andamento
          </p>
          <h1 className="font-bluu-next text-4xl leading-tight md:text-6xl">
            Página em manutenção
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
            O site está temporariamente indisponível enquanto algumas melhorias são publicadas.
            Tente novamente em instantes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-sm text-slate-300 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-4">
            <strong className="block text-slate-50">Conteúdo preservado</strong>
            Artigos e páginas retornam assim que a manutenção terminar.
          </div>
          <div className="rounded-2xl bg-white/5 p-4">
            <strong className="block text-slate-50">Atualização rápida</strong>
            A indisponibilidade deve ser curta e planejada.
          </div>
          <div className="rounded-2xl bg-white/5 p-4">
            <strong className="block text-slate-50">Mesmo domínio</strong>
            Nenhuma ação é necessária; basta recarregar depois.
          </div>
        </div>
      </section>
    </main>
  );
}
