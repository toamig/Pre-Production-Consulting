import { Calendar, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Get in touch
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          If you're about to start a project, I can help you avoid early technical debt.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/migueltechlead-support/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
          >
            <Calendar size={20} />
            Book a free call
          </a>
          <a
            href="mailto:support@migueltechlead.pt"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            <Mail size={20} />
            support@migueltechlead.pt
          </a>
        </div>
      </div>
    </section>
  );
}
