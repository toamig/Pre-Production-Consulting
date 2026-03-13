const projects = [
  {
    title: 'Dakar Desert Rally',
    role: 'Multiplayer Programmer',
    tags: ['UE4', 'Racing', 'Multiplayer', 'Shipped'],
    description:
      'Diagnosed and resolved multiplayer bugs across a large open-world racing title, refactoring existing features to align with proper replication architecture. Work spanned gameplay systems, state synchronisation, and ensuring consistent behaviour across client and server.',
    link: 'https://store.steampowered.com/app/1839940/Dakar_Desert_Rally/',
    linkLabel: 'View on Steam',
  },
  {
    title: 'Road Kings',
    role: 'Tools Lead Programmer',
    tags: ['UE5', 'Simulation', 'Open World', 'Houdini', 'In Development'],
    description:
      'Built end-to-end pipelines bridging art production and gameplay logic in a large-scale open-world title. Developed Houdini-based art tools and custom Unreal Editor tooling to accelerate content iteration, enforce performance budgets, and reduce friction between disciplines.',
    link: 'https://store.steampowered.com/app/2141130/Road_Kings/',
    linkLabel: 'View on Steam',
  },
  {
    title: 'Timefront',
    role: 'Gameplay Lead Engineer',
    tags: ['UE5', 'RTS', 'Multiplayer', 'Early Access'],
    description:
      'Led the architectural transition from a single-player prototype to a dedicated server multiplayer title. Redesigned and refactored core systems — including abilities, buildings, and fog of war — to support replication at scale. Conducted in-depth profiling and delivered targeted performance improvements across the gameplay stack.',
    link: 'https://store.steampowered.com/app/3328840/Timefront/',
    linkLabel: 'View on Steam',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Selected projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-3">
                {project.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:underline"
                >
                  {project.linkLabel} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
