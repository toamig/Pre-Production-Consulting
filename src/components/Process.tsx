export default function Process() {
  const steps = [
    {
      phase: 'Discovery',
      duration: '1 week',
      description:
        'Understand your gameplay vision, technical constraints, team structure, and risk areas.',
    },
    {
      phase: 'Architecture plan',
      duration: '1 week',
      description:
        'Define system boundaries, data flows, networking considerations, and C++/Blueprint split.',
    },
    {
      phase: 'Reference implementation',
      duration: '2–4 weeks',
      description:
        'Build golden-path example (e.g., ability system) with proper contracts and extension points.',
    },
    {
      phase: 'Handoff',
      duration: '1 week',
      description:
        'Walk through architecture decisions, review code patterns, and outline next steps for your team.',
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Process
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Typical engagement runs 5–7 weeks from kickoff to handoff.
        </p>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3 md:justify-end">
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Phase {index + 1}
                      </span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{step.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.phase}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-900 rounded-full items-center justify-center z-10">
                  <span className="text-white text-sm font-semibold">{index + 1}</span>
                </div>

                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
