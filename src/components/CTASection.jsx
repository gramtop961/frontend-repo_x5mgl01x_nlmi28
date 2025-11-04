import React from 'react';
import { Gift, Clock } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="how" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl p-6 bg-white/70 border border-white/60 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#36454F]">How it works</h3>
            <ol className="mt-4 space-y-3 text-[#36454F]">
              <li className="flex gap-3"><span className="font-bold">1.</span> Create your profile with skills to teach and skills to learn.</li>
              <li className="flex gap-3"><span className="font-bold">2.</span> Our AI matches you with someone who needs what you know—and vice versa.</li>
              <li className="flex gap-3"><span className="font-bold">3.</span> Pick an instant slot or let Smart Scheduling find a mutual 15-minute window.</li>
              <li className="flex gap-3"><span className="font-bold">4.</span> Jump on a built-in video call, swap value, and earn learning credits.</li>
            </ol>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#F5FFFA] border border-white/60 p-4">
              <Clock className="text-[#9DC183]" />
              <p className="text-sm text-[#36454F]">Sessions are time-boxed to keep things focused and fun.</p>
            </div>
          </div>

          <div className="rounded-3xl p-6 bg-gradient-to-br from-[#FFE5B4]/60 via-white/80 to-[#E6E6FA]/60 border border-white/60 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#36454F]">Free to start</h3>
            <p className="mt-2 text-[#36454F]/80">New members get 3 learning credits plus 2 more for each successful referral.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-[#FFB6C1] via-[#FFE5B4] to-[#E6E6FA] shadow-md hover:shadow-lg transition-all">Create your free account</button>
              <button className="px-5 py-3 rounded-xl text-[#36454F] bg-white/70 border border-white/60 hover:bg-white transition-colors">Explore trending skills</button>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#36454F]">
              <Gift className="text-[#FFB6C1]" size={18} /> Bonus credits when you refer friends
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
