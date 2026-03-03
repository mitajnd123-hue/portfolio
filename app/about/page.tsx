import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { profile, skills, currentFocus } from '../data/profile';

export default function AboutPage() {

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-blue-100">
              Passionate full-stack developer with a love for creating elegant solutions to complex problems
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">My Journey</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  I'm a passionate developer who loves building modern web applications
                  that make a difference. With years of experience in full-stack development,
                  I've worked on projects ranging from small startups to enterprise applications.
                </p>
                <p>
                  My journey in web development started with a curiosity about how websites work,
                  and it has evolved into a career focused on creating exceptional user experiences
                  with clean, maintainable code.
                </p>
                <p>
                  I believe in continuous learning and staying up-to-date with the latest
                  technologies and best practices in the industry.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-12 text-center">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">{profile.experience.years}+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">{profile.experience.projectsCompleted}+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">{profile.experience.clientSatisfaction}%</div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-blue-600 text-xl">
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Currently Working On
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {currentFocus.map((focus, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{focus.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{focus.title}</h3>
                <p className="text-gray-600">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Quality First</h3>
              <p className="text-gray-600">
                Delivering high-quality code and solutions that stand the test of time
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Always exploring new technologies and approaches to solve problems
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Working closely with teams and clients to achieve the best results
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
