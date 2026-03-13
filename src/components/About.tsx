export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          About
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            I'm a systems architect with deep experience in Unreal Engine C++,
            gameplay programming, and networked game development. I've worked on
            shipped titles across multiple genres and scales. My focus is helping
            teams make the right technical decisions early — when the cost of
            change is still low. I think in systems, design for extension, and
            prioritize clarity over cleverness. If you're starting a project and
            want to avoid common architectural pitfalls, I can help you build a
            foundation that supports your vision without getting in the way.
          </p>
        </div>
      </div>
    </section>
  );
}
