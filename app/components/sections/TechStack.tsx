import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

export const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API'],
    },
    {
      category: 'Tools & Others',
      techs: ['Git', 'Docker', 'AWS', 'Vercel', 'Jest'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Working with modern and proven technologies to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-center text-blue-600">
                  {tech.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tech.techs.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
