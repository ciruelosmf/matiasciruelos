// src/app/page.tsx

import Link from 'next/link'; // Standard Next.js Link component
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // For contact icons
import { Public_Sans } from "next/font/google"; // Correctly typed font import

// Define a type for your project data for better type safety
interface Project {
  id: string;
  name:string;
  description: string;
  href: string; // Link to the project (can be external or internal)
}

const publicFont = Public_Sans({
  subsets: ["latin"],
  weight: "400",
});

// Sample project data
const projectsData: Project[] = [
  {
    id: 'genfoo',
    name: 'AI Chatbot Platform',
    description: 'Chat with Gemini using another UI.',
    href: 'https://www.genfoo.com',
  },
  {
    id: 'rocketcatcher69',
    name: '3D Game with JavaScript',
    description: 'A game to catch a rocket in mid-air.',
    href: 'https://rocketcatcher69.vercel.app',
  },
  {
    id: 'directory',
    name: 'AI Generators Directory',
    description: 'Static website showcasing AI image and video generators. ',
    href: 'https://www.aiimageandvideogenerators.xyz',
  },
];

export default function Home() {
  return (
    <div className={`${publicFont.className} min-h-screen bg-slate-200 flex flex-col md:flex-row items-stretch justify-center p-4 sm:p-8 gap-8`}>
      {/* Left Card: Name and Contact */}
      <div className="bg-purple-50 text-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col justify-between w-full md:w-1/3 lg:w-1/4">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Matías Ciruelos Federico</h1>
          <p className="text-xl sm:text-2xl text-slate-700 mb-8">Developer</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">Contact Me</h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="mailto:matiasciruelos@protonmail.com"
                className="flex items-center text-slate-800 hover:text-purple-700 transition-colors duration-300 group"
              >
 
                <span>matiasciruelos@protonmail.com</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/mat%C3%ADas-federico-ciruelos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-800 hover:text-purple-700 transition-colors duration-300 group"
              >
        
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/ciruelosmf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-800 hover:text-purple-700 transition-colors duration-300 group"
              >
 
                <span>GitHub</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Card: Project Listing & Skills */}
      <div className="bg-emerald-50 text-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl w-full md:w-2/3 lg:w-1/2 overflow-y-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-700">My Projects</h2>
        <div className="space-y-6">
          {projectsData.length > 0 ? (
            projectsData.map((project) => {
              const isExternal = project.href.startsWith('http');
              return (
                <div key={project.id} className="bg-emerald-100/50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                    <Link
                      href={project.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {project.name}
                    </Link>
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base">{project.description}</p>
                </div>
              );
            })
          ) : (
            <p className="text-slate-600">No projects to display yet. Check back soon!</p>
          )}
        </div>
         
        
        <h2 className="text-3xl sm:text-4xl font-bold my-6 mt-12 text-slate-700">Skills</h2>
        <div className="grid grid-cols-2 gap-1 mb-12">
          <p className="text-slate-600">TypeScript</p>
          <p className="text-slate-600">Next.js</p>
          <p className="text-slate-600">React.js</p>
          <p className="text-slate-600">Tailwind CSS</p>
          <p className="text-slate-600">Three.js</p>
          <p className="text-slate-600">Vercel</p>
          <p className="text-slate-600">Python</p>
          <p className="text-slate-600">Flask</p>
          <p className="text-slate-600">Google APIs</p>
          <p className="text-slate-600">AI vendors APIs</p>
          <p className="text-slate-600">PostgreSQL</p>
          {/* Placeholder skills, you can update or remove these */}
 
          <p className="text-slate-600"></p> {/* Empty string preferred over spaces for empty p */}
          <p className="text-slate-600"></p>
          <p className="text-slate-600"></p>
        </div>
      </div>
    </div>
  );
}