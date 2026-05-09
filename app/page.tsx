import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            BarberFlow
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Sistema moderno de reservas para barberías
          </h1>

          <p className="mt-6 text-lg text-zinc-400 md:text-xl">
            Gestiona citas, clientes y barberos en una sola plataforma.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-8 py-4 text-black transition hover:scale-105">
              Empezar ahora
            </button>

            <button className="rounded-xl border border-zinc-700 px-8 py-4 transition hover:border-zinc-500">
              Ver demo
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-6 pb-20 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-semibold">
            Reservas inteligentes
          </h3>

          <p className="mt-3 text-zinc-400">
            Organiza citas fácilmente con calendario integrado.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-semibold">
            Gestión de clientes
          </h3>

          <p className="mt-3 text-zinc-400">
            Administra historial y datos de clientes.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-semibold">
            Dashboard profesional
          </h3>

          <p className="mt-3 text-zinc-400">
            Visualiza métricas y estadísticas del negocio.
          </p>
        </div>
      </section>
    </main>
  );
}