import React from 'react';
import Spline from '@splinetool/react-spline';
import { Star, Video, Calendar, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-60" style={{ background: 'radial-gradient(circle at center, #FFE5B4 0%, #FFB6C1 45%, transparent 70%)' }} />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-60" style={{ background: 'radial-gradient(circle at center, #E6E6FA 0%, #F5FFFA 50%, transparent 70%)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/60 px-3 py-1 text-xs text-[#36454F] shadow-sm">
              <Star size={14} className="text-[#9DC183]" /> Trusted by remote pros worldwide
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-[#36454F] leading-tight">
              Trade skills, not money.
            </h1>
            <p className="mt-4 text-[#36454F]/80 text-base md:text-lg">
              SkillSwap Live connects you to professionals for 15-minute expertise sessions — teach what you know, learn what you don’t, and grow together.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-gradient-to-r from-[#FFB6C1] via-[#FFE5B4] to-[#E6E6FA] shadow-md hover:shadow-lg transition-all">
                Start swapping now
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-[#36454F] bg-white/70 border border-white/60 hover:bg-white transition-colors">
                See how it works
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-[#36454F]">
              <FeatureChip icon={<Video size={16} />} label="Built-in video" />
              <FeatureChip icon={<Calendar size={16} />} label="Smart scheduling" />
              <FeatureChip icon={<Zap size={16} />} label="Instant matches" />
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] w-full rounded-3xl overflow-hidden shadow-lg bg-white/60 border border-white/60">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl bg-white/70 border border-white/60 px-3 py-2 shadow-sm">
      <span className="text-[#36454F] opacity-80">{icon}</span>
      <span className="text-[#36454F]">{label}</span>
    </div>
  );
}
