export function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          BarberFlow
        </h1>

        <button className="rounded-lg bg-white px-4 py-2 text-black">
          Login
        </button>
      </div>
    </nav>
  );
}