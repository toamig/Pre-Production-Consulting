export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          About
        </h2>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            I specialise in multiplayer architecture and object-oriented systems design for Unreal Engine — the kind of foundational work that determines whether a project scales gracefully or collapses under its own weight mid-production.
          </p>
          <p>
            What I keep seeing across projects is the same pattern: wrong priorities early on, no pipelines, no standards, and <strong>technical debt that quietly accumulates until it starts costing real money</strong> — in refactors, in delays, in developers losing faith in the codebase they have to ship. By then, fixing it is expensive. Often teams don't fix it at all, and that drags all the way to release.
          </p>
          <p>
            My approach is the opposite. <strong>Do the heavy lifting early.</strong> Invest in the foundations before the feature list grows. Define the contracts, the pipelines, the architecture — when the cost of change is still near zero. So that when you reach the end of production, certifications and final delivery are smooth for every developer on the team.
          </p>
          <p>
            <strong>Solid foundations are not a luxury or a nice-to-have. They are the most cost-effective decision a team can make.</strong> I'm here to help you make that decision before it's too late.
          </p>
        </div>
      </div>
    </section>
  );
}
