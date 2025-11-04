import React from 'react';
import { Video, Calendar, Coins, Shield, Users, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Integrated Video Sessions',
    desc: 'WebRTC-powered 15-minute calls with screen sharing and optional recording.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Automatically finds mutual windows across timezones — no back-and-forth.'
  },
  {
    icon: Coins,
    title: 'Credit Economy',
    desc: 'Teach to earn, learn to spend. Get starter credits and referral bonuses.'
  },
  {
    icon: Shield,
    title: 'Quality & Trust',
    desc: 'Two-way ratings, verification badges, and reporting keep the community safe.'
  },
  {
    icon: Users,
    title: 'AI Matching',
    desc: 'Pairs your strengths with someone’s needs for serendipitous learning.'
  },
  {
    icon: ThumbsUp,
    title: 'Skill Chains',
    desc: 'Track your learning paths and help others to unlock bonus credits.'
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#36454F]">Everything you need to swap skills</h2>
          <p className="mt-3 text-[#36454F]/80">Designed for busy professionals — fast, friendly, and incredibly effective.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} Icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl p-6 bg-white/70 border border-white/60 shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,182,193,0.15), rgba(230,230,250,0.25))' }} />
      <div className="relative z-10">
        <div className="h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-tr from-[#E6E6FA] to-[#F5FFFA] text-[#36454F] shadow-sm">
          <Icon size={20} />
        </div>
        <h3 className="mt-4 font-semibold text-lg text-[#36454F]">{title}</h3>
        <p className="mt-2 text-sm text-[#36454F]/80">{desc}</p>
      </div>
    </div>
  );
}
