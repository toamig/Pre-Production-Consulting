import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Get in touch
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          If you're about to start a project, I can help you avoid early technical debt.
        </p>
        <a
          href="mailto:support@migueltechlead.pt"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
        >
          <Mail size={20} />
          support@migueltechlead.pt
        </a>
      </div>
    </section>
  );
}
