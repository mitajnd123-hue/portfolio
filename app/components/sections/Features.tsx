import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

export const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Optimized applications with lightning-fast load times and smooth interactions.',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Beautiful interfaces that work seamlessly across all devices and screen sizes.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Built with security best practices and robust error handling.',
    },
    {
      icon: '💡',
      title: 'Modern Stack',
      description: 'Using cutting-edge technologies like Next.js, React, TypeScript, and Tailwind CSS.',
    },
    {
      icon: '🎨',
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following industry best practices.',
    },
    {
      icon: '⚡',
      title: 'SEO Optimized',
      description: 'Built-in SEO optimization for better search engine visibility.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose This Approach?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every project is built with attention to detail, performance, and user experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover>
              <CardHeader>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
