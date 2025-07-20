/**
 * Projects section component - Dark themed portfolio showcase with glowing effects
 * Features project cards with neon highlights and gradient overlays
 */
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ExternalLink, Github, Play, Star, Eye, GitBranch } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  category: string
  featured?: boolean
  stats: {
    stars: number
    views: number
    forks: number
  }
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js',
      longDescription: 'A full-featured e-commerce platform with user authentication, payment processing, inventory management, and admin dashboard. Built with performance and scalability in mind.',
      image: 'https://sider.ai/autoimage/ecommerce website dark',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Web Application',
      featured: true,
      stats: { stars: 124, views: 2400, forks: 38 }
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      longDescription: 'A productivity application that helps teams manage projects and tasks efficiently. Features real-time collaboration, drag-and-drop interface, and comprehensive reporting.',
      image: 'https://pub-cdn.sider.ai/u/U0VEHZLVN1W/web-coder/687c58dc00bcf77ebb7b4fa1/resource/e450867f-59b6-468f-9922-d089e28cb475.jpg',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Zustand'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Productivity',
      featured: true,
      stats: { stars: 89, views: 1800, forks: 22 }
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts',
      longDescription: 'An elegant weather application that provides detailed forecasts, weather maps, and historical data. Features location detection and beautiful visualizations.',
      image: 'https://pub-cdn.sider.ai/u/U0VEHZLVN1W/web-coder/687c58dc00bcf77ebb7b4fa1/resource/da15d84d-a865-4ad4-b60d-6fd6f1123645.jpg',
      technologies: ['React', 'TypeScript', 'OpenWeatherMap', 'Recharts', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Utility',
      stats: { stars: 76, views: 1200, forks: 15 }
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Responsive portfolio site with modern design',
      longDescription: 'A fully responsive portfolio website showcasing projects and skills. Built with modern web technologies and optimized for performance and SEO.',
      image: 'https://sider.ai/autoimage/dark portfolio website',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Portfolio',
      stats: { stars: 156, views: 3200, forks: 67 }
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'Full-stack social platform with real-time chat',
      longDescription: 'A comprehensive social media platform with user profiles, posts, real-time messaging, and social interactions. Features modern UI and robust backend.',
      image: 'https://pub-cdn.sider.ai/u/U0VEHZLVN1W/web-coder/687c58dc00bcf77ebb7b4fa1/resource/b6a3f290-bed7-4d52-bb3c-fa38cf076446.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Cloudinary'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Social',
      featured: true,
      stats: { stars: 203, views: 4100, forks: 89 }
    },
    {
      id: 6,
      title: 'Data Visualization Tool',
      description: 'Interactive charts and analytics dashboard',
      longDescription: 'A powerful data visualization tool that transforms complex datasets into interactive charts and dashboards. Perfect for business intelligence and analytics.',
      image: 'https://pub-cdn.sider.ai/u/U0VEHZLVN1W/web-coder/687c58dc00bcf77ebb7b4fa1/resource/0a58168e-7cc8-45c1-a33b-63fb33fdd641.jpg',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Analytics',
      stats: { stars: 98, views: 1900, forks: 31 }
    }
  ]

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className={`group overflow-hidden bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 transform hover:-translate-y-3 ${
                project.featured 
                  ? 'hover:shadow-2xl hover:shadow-purple-500/20 border-purple-500/30' 
                  : 'hover:shadow-xl hover:shadow-cyan-500/20'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Stats Overlay */}
                <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 bg-gray-900/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                    <Star className="h-3 w-3 text-yellow-400" />
                    {project.stats.stars}
                  </div>
                  <div className="flex items-center gap-1 bg-gray-900/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white">
                    <Eye className="h-3 w-3 text-cyan-400" />
                    {project.stats.views}
                  </div>
                </div>

                <Badge 
                  className={`absolute top-4 left-4 ${
                    project.featured
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-900/80 text-gray-300'
                  } border-0 shadow-lg backdrop-blur-sm`}
                >
                  {project.category}
                </Badge>

                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1.5 animate-pulse">
                    <Star className="h-3 w-3 text-white fill-current" />
                  </div>
                )}
              </div>

              <CardHeader className="pb-4">
                <CardTitle className={`text-xl group-hover:bg-gradient-to-r transition-all duration-300 ${
                  project.featured 
                    ? 'group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent text-white'
                    : 'group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent text-white'
                }`}>
                  {project.title}
                </CardTitle>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className="text-xs bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border-gray-600/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-700/50 pt-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {project.stats.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitBranch className="h-3 w-3" />
                        {project.stats.forks}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {project.stats.views}
                    </span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className={`flex-1 ${
                        project.featured
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                          : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'
                      } shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg"
          >
            <Play className="h-5 w-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
