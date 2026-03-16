import { Check } from 'lucide-react';
import FadeIn from './FadeIn';

const deliverables = [
  'Technical risk report',
  'Core loop validation with edge cases flagged',
  'System map and dependency order',
  'Core system architecture document',
  'Art/tech pipeline and handoff standards',
  'Development standards (naming, ownership, Blueprint vs C++ boundaries, performance guidelines)',
  'Structured walkthrough of all architecture and standards documents',
  'Engineer onboarding documentation',
  'Live Q&A session with the full team',
];

export default function Deliverables() {
  return (
    <section id="deliverables" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Deliverables
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Every engagement includes the following regardless of team size or project scope.
          </p>
        </FadeIn>
        <FadeIn delay={100}>
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10">
          <ul className="space-y-4">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
