import { Github } from 'lucide-react';

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Reference work
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            UE5 Pre-Production Gameplay Architecture (Reference)
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            A minimal, production-minded foundation demonstrating contracts in C++
            and extension points in Blueprint. Shows clean separation between core
            systems, networking considerations, and how to build scalable gameplay
            features without over-engineering.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <Github size={18} />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
