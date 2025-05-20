

// src/ app/ page.tsx


import Image from "next/image";
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // For contact icons
 
import { Underdog, Public_Sans, Teko } from "next/font/google";

// Define a type for your project data for better type safety
interface Project {
  id: string;
  name: string;
  description: string;
  href: string; // Link to the project (can be external or internal like /projects/project-name)
}

const publicFont = Public_Sans({
  subsets: ["latin"],
  weight: "400",
});

const tekoFont = Teko({
  subsets: ["latin"],
  weight: "400",
});

const projectsData: Project[] = [
  {
    id: 'genfoo',
    name: 'AI chatbot Platform',
    description: 'Chat with Gemini using another UI. NextJS',
    href: 'https://www.genfoo.com', // Example internal link
  },
  {
    id: 'rocketcatcher69',
    name: '3D game using Javascript library',
    description: 'A game to catch a rocket in mid air. NextJS, ThreeJS',
    href: 'https://rocketcatcher69.vercel.app', // Example external link
  },
  {
    id: 'directory',
    name: 'AI generators directory',
    description: 'Static website to showcase AI image and video generators. NextJS',
    href: 'https://www.aiimageandvideogenerators.xyz',
  },
 
];

export default function Home() {
  return (
    <div className={`${publicFont.className} min-h-screen bg-purple-100 bg-slate-200 flex flex-col md:flex-row items-stretch justify-center p-4 sm:p-8 gap-8`}>
      {/* Left Card: Name and Contact */}
      <div className="bg-purple-100 text-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col justify-between w-full md:w-1/3 lg:w-1/4">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Matías Ciruelos Federico</h1>
          <p className="text-xl sm:text-2xl text-slate-700 mb-8">Web Developer</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">Contact Me</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto: matiasciruelos @example.com"
                className="flex items-center text-slate-800 hover:text-purple-700 transition-colors duration-300 group"
              >
                <FaEnvelope className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>matiasciruelos @ protonmail . com</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mat%C3%ADas-federico-ciruelos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-800 hover:text-purple-700 transition-colors duration-300 group"
              >
                <FaLinkedin className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ciruelosmf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-800 hover:text-purple-700 transition-colors duration-300 group"
              >
                <FaGithub className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </li>
            {/* Add other contact methods like a portfolio link or Twitter if desired */}
          </ul>
        </div>
      </div>

      {/* Right Card: Project Listing */}
      <div className="bg-emerald-100 text-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl w-full md:w-2/3 lg:w-1/2 overflow-y-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-700">My Projects</h2>
        <div className="space-y-6">
          {projectsData.length > 0 ? (
            projectsData.map((project) => (
              <div key={project.id} className="bg-emerald-100/50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
 
                <p className="text-slate-700 text-sm sm:text-base">{project.description}</p>
              </div>
            ))
          ) : (
            <p className="text-slate-600">No projects to display yet. Check back soon!</p>
          )}
        </div>
      </div>
    </div>
  );
}