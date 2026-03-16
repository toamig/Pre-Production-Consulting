import FadeIn from './FadeIn';

const phases = [
  {
    label: 'Phase 0',
    title: 'Exploratory Call',
    free: true,
    payment: null,
    description:
      'A no-commitment conversation to understand your project, team, and core problem. No deep technical analysis — just enough to determine if there is a fit and what the engagement should look like.',
    deliverables: [],
  },
  {
    label: 'Phase 1',
    title: 'Discovery & Audit',
    free: false,
    payment: 'Invoiced before start',
    description:
      'Deep-dive into your current state — idea, GDD, prototype, or existing codebase. The goal is to surface risks early and map out exactly what needs to be built and in what order.',
    deliverables: [
      'Technical risk report',
      'Core loop validation with edge cases flagged',
      'Preliminary system map and dependency order',
    ],
  },
  {
    label: 'Phase 2',
    title: 'Architecture & Standards',
    free: false,
    payment: 'Invoiced before start',
    description:
      'Define the foundations before a single production feature is built. System contracts, cross-discipline standards, and development guidelines are locked in here.',
    deliverables: [
      'Core system architecture document',
      'Art/tech pipeline and handoff standards',
      'Development standards (naming, ownership, Blueprint vs C++ boundaries, performance guidelines)',
    ],
  },
  {
    label: 'Phase 3',
    title: 'Handoff & Q&A',
    free: false,
    payment: 'Invoiced after Phase 2 delivery',
    description:
      'A timeboxed session to walk the team through every document, answer technical questions, and make sure everyone is aligned before development starts. You leave with full clarity, I leave knowing the work lands correctly.',
    deliverables: [
      'Structured walkthrough of all architecture and standards documents',
      'Live Q&A with the full tech team',
      'Engineer onboarding documentation',
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Process
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            A full engagement typically spans 1 to 3 months depending on project scope and team size.
          </p>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <FadeIn key={index} delay={60}>
              <div
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {phase.label}
                      </span>
                      {phase.free && (
                        <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded">
                          Free
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                    {phase.deliverables.length > 0 && (
                      <ul className="mt-4 space-y-1">
                        {phase.deliverables.map((item, i) => (
                          <li key={i} className={`flex items-start gap-2 text-sm text-gray-600 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {phase.payment && (
                      <p className={`mt-4 text-xs font-medium text-gray-400 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {phase.payment}
                      </p>
                    )}
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-900 rounded-full items-center justify-center z-10">
                  <span className="text-white text-sm font-semibold">{index}</span>
                </div>

                <div className="md:w-1/2" />
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
