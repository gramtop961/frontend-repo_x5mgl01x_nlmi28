import React from 'react';
import { Rocket, User, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#FFB6C1] via-[#FFE5B4] to-[#E6E6FA] shadow-md grid place-items-center">
              <Rocket size={18} className="text-[#36454F]" />
            </div>
            <span className="font-semibold tracking-tight text-[#36454F]">SkillSwap Live</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-[#36454F]">
            <a href="#features" className="hover:text-black/80 transition-colors">Features</a>
            <a href="#how" className="hover:text-black/80 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-black/80 transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl text-[#36454F] hover:bg-black/5 transition-colors">Log in</button>
            <button className="px-4 py-2 rounded-xl text-white bg-gradient-to-r from-[#FFB6C1] to-[#E6E6FA] shadow-md hover:shadow-lg transition-all">
              Get started
            </button>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-black/5" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
            <Menu className="text-[#36454F]" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 rounded-2xl p-3 bg-white/70 border border-white/60 shadow-sm">
              <a href="#features" className="px-3 py-2 rounded-xl hover:bg-black/5">Features</a>
              <a href="#how" className="px-3 py-2 rounded-xl hover:bg-black/5">How it works</a>
              <a href="#pricing" className="px-3 py-2 rounded-xl hover:bg-black/5">Pricing</a>
              <div className="h-px bg-black/10 my-1" />
              <button className="px-3 py-2 rounded-xl text-left text-[#36454F] hover:bg-black/5">Log in</button>
              <button className="px-3 py-2 rounded-xl text-left text-white bg-gradient-to-r from-[#FFB6C1] to-[#E6E6FA] shadow-md">Get started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
