import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5FFFA] via-white to-[#E6E6FA]/40">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <CTASection />

        <section id="pricing" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-6 md:p-8 bg-white/70 border border-white/60 shadow-sm text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#36454F]">Go Premium — $9/month</h3>
              <p className="mt-2 text-[#36454F]/80">Unlimited sessions, priority matching, and extended 30-minute calls.</p>
              <div className="mt-6 flex justify-center gap-3">
                <button className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-[#FFB6C1] via-[#FFE5B4] to-[#E6E6FA] shadow-md hover:shadow-lg transition-all">Start 7-day free trial</button>
                <button className="px-6 py-3 rounded-xl text-[#36454F] bg-white/70 border border-white/60 hover:bg-white transition-colors">Stay on free plan</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[#36454F]/70">© {new Date().getFullYear()} SkillSwap Live. Built for curious, generous people.</p>
        </div>
      </footer>
    </div>
  );
}
