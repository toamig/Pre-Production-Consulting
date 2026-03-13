import { Box, GitBranch, FileCode } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Box,
      title: 'Architecture & system boundaries',
      description:
        'Define clear contracts between gameplay systems, avoiding tight coupling that breaks at scale.',
    },
    {
      icon: GitBranch,
      title: 'Pipelines & multiplayer-ready rules',
      description:
        'Design data flows and authority patterns that work for networked gameplay from day one.',
    },
    {
      icon: FileCode,
      title: 'Reference implementations & handoff docs',
      description:
        'Deliver working C++ foundations with Blueprint extension points and documentation your team can build on.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          What I do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
