import { Network, GitBranch, Wrench, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Services() {
  const services = [
    {
      icon: Network,
      title: 'Multiplayer Architecture',
      description:
        'Design replication strategies, authority models, and dedicated server topology for networked titles — before a single line of feature code is written. Built on real experience shipping multiplayer across UE4 and UE5.',
    },
    {
      icon: ShieldCheck,
      title: 'Systems Design & Object-Oriented Architecture',
      description:
        'Define clear contracts between gameplay systems, establish C++/Blueprint boundaries, and structure your codebase to scale with the feature list — not against it.',
    },
    {
      icon: GitBranch,
      title: 'Development Standards & Pipelines',
      description:
        'Establish naming conventions, ownership rules, and cross-discipline handoff protocols that keep art and tech teams aligned throughout production.',
    },
    {
      icon: Wrench,
      title: 'Technical Risk & Audit',
      description:
        'Identify the architectural gaps, wrong priorities, and hidden debt in your current direction — early enough to fix them without derailing production.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What I do
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={index} delay={index * 80} className="h-full">
              <div
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 h-full"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
