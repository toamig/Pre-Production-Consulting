import { Check, X } from 'lucide-react';
import FadeIn from './FadeIn';

export default function WhoItsFor() {
  const goodFit = [
    'Indie or AA teams starting a new UE5 project',
    'Studios moving from another engine to Unreal',
    'Teams adding multiplayer or scalable gameplay systems',
    'Projects that need technical direction before hiring a team',
  ];

  const notAFit = [
    'Teams deep in production needing feature delivery',
    'Long-term staff augmentation or ongoing development',
    '"Just make it work" without architecture standards',
    'Projects with established architecture already in place',
  ];

  return (
    <section id="fit" className="min-h-[calc(50vh-32px)] flex items-center bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 w-full py-10">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Is this a fit?
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={80} className="h-full">
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check size={18} className="text-green-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Good fit</h3>
              </div>
              <ul className="space-y-3">
                {goodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={180} className="h-full">
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                  <X size={18} className="text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Not a fit</h3>
              </div>
              <ul className="space-y-3">
                {notAFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
