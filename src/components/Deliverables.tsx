import { Check } from 'lucide-react';

export default function Deliverables() {
  const deliverables = [
    'Technical direction doc (constraints, risks, decisions)',
    'Architecture diagram (systems + ownership)',
    'Reference UE5 project structure (C++ contracts + BP examples)',
    'Golden-path implementation (combat/ability pipeline)',
    'Coding & extension guidelines',
    'Handoff walkthrough + continuation plan',
  ];

  return (
    <section id="deliverables" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Deliverables
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Everything you need to move from concept to confident production development.
        </p>
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10">
          <ul className="space-y-4">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700 text-lg leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
