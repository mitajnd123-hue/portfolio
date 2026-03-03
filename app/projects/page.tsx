import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { projects, getAllCategories } from '../data/projects';

export default function ProjectsPage() {
  const categories = getAllCategories();
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-blue-100">
              A showcase of my recent work and side projects, demonstrating various technologies and problem-solving approaches
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Badge */}
      {featuredProjects.length > 0 && (
        <section className="py-8 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold">Featured Projects</span>
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Category Filter Info */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} hover>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.featured && (
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-600">
                          ⭐ Featured
                        </span>
                      )}
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-600' 
                          : project.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <Button variant="primary" className="flex-1" size="sm">
                        View Demo
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" className="flex-1" size="sm">
                        GitHub
                      </Button>
                    )}
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    Updated: {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life with modern technologies and best practices
          </p>
          <Link href="/contact">
            <Button size="lg">Get In Touch</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
