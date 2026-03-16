import FadeIn from './FadeIn';

const tiers = [
  {
    label: 'Micro Team',
    description: 'Solo devs or small founding teams with a clear concept and limited scope.',
  },
  {
    label: 'Small Team',
    description: 'Structured teams working on a defined project with cross-discipline collaboration.',
  },
  {
    label: 'Mid-size Team',
    description: 'Larger productions with multiple systems, art pipelines, and engineering depth.',
  },
  {
    label: 'Large Team',
    description: 'Complex productions with significant scope and multiple cross-discipline teams.',
  },
];

const addons = [
  {
    name: 'Multiplayer / Dedicated Server Architecture',
    description: 'Full replication strategy, authority model, and server topology design.',
  },
  {
    name: 'Prototype / Reference Implementation',
    description: 'A working implementation of a core system to validate the architecture and serve as a reference for the team.',
  },
  {
    name: 'Art–Tech Pipeline Setup',
    description: 'Houdini tooling, Editor automation, or custom content pipelines for art teams.',
  },
  {
    name: 'Existing Codebase Audit',
    description: 'Structured review of an existing codebase before architecture is defined.',
  },
  {
    name: 'No GDD / Concept-only Start',
    description: 'Additional discovery overhead when starting without a defined design document.',
  },
  {
    name: 'Accelerated Timeline',
    description: 'Priority scheduling to compress the engagement below the standard duration.',
  },
  {
    name: 'Implementation Accompaniment',
    description: 'Periodic check-ins during active development to review progress against the architecture, answer technical questions, and catch drift before it becomes debt. Scoped and priced per engagement.',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Pricing
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Each phase is invoiced separately — you only commit one step at a time.
          </p>
        </FadeIn>

        <FadeIn delay={60}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Pricing ranges</h3>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {tiers.map((tier, index) => (
            <FadeIn key={tier.label} delay={80 + index * 70} className="h-full">
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col h-full hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{tier.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Add-ons</h3>
        </FadeIn>
        <div className="space-y-3">
          {addons.map((addon, index) => (
            <FadeIn key={addon.name} delay={index * 50}>
              <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <p className="font-medium text-gray-900">{addon.name}</p>
                <p className="text-sm text-gray-500 mt-0.5">{addon.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={100}>
          <p className="text-sm text-gray-400 text-center mt-10">
            Final pricing is confirmed after the Phase 0 exploratory call.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
