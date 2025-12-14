import img1 from '../assets/1.png';
import img3 from '../assets/3.png';
import img7 from '../assets/7.png';
import webportfolio from '../assets/webportfolio.png';

const projects = [
  { title: 'ERIS Resident Mobile Interface', image: img1, description: '...', link: '...' },
  { title: 'ERIS Responder Mobile Interface', image: img7, description: '...', link: '...' },
  { title: 'ERIS Admin Management Interface', image: img3, description: '...', link: '...' },
  { title: 'Personal Portfolio Website', image: webportfolio, description: '...', link: '...', github: '...' },
];


export default function Projects() {
  const projects = [
    {
      title: 'ERIS Resident Mobile Interface',
      image: '/src/assets/1.png',
      description:
        'A mobile-first user interface design for our capstone prototype, ERIS – an Emergency Response and Information System. It features intuitive layouts for real-time alerts, resident mapping, and streamlined emergency coordination to support community-based disaster response.',
      link: 'https://www.canva.com/design/DAGCVonUJ9Y/TAkfcgGdG9yzBYPoUiryuw/edit?utm_content=DAGCVonUJ9Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      title: 'ERIS Responder Mobile Interface',
      image: '/src/assets/7.png',
      description:
        'A mobile-first user interface designed for emergency responders in our ERIS capstone prototype. It enables real-time monitoring of incoming emergencies, facilitates rapid coordination, and provides location-based tools to support efficient on-ground disaster response.',
      link: 'https://www.canva.com/design/DAGMJRKKfwQ/vHWPo8y7zIl21HX0L47DhA/edit?utm_content=DAGMJRKKfwQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      title: 'ERIS Admin Management Interface',
      image: '/src/assets/3.png',
      description:
        'A web-based admin dashboard UI for ERIS, designed to manage and monitor emergency response operations. It includes modules for resident data, real-time alerts, incident reports, and system configurations—providing administrators with full control over the emergency response system.',
      link: 'https://www.canva.com/design/DAGNagP-GsQ/7b1Wht03B7HG0AlhJZVhAg/edit?utm_content=DAGNagP-GsQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      title: 'ThreadEscape',
      image: '',
      description:
        'A modern fashion e-commerce website with a custom-tailored UI. Built using PHP, Bootstrap, and AngularJS for dynamic content and user interaction.',
      link: '#',
      github: '#',
    },
    {
      title: 'Personal Portfolio Website',
      image: '/src/assets/webportfolio.png',
      description:
        'A responsive personal portfolio website built using TypeScript and TailwindCSS. It showcases my skills, projects, and experience with a clean, modern design optimized for both desktop and mobile viewing.',
      link: 'https://your-portfolio-link.com',
      github: 'https://github.com/yourusername/portfolio',
    },

  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a1a2f] text-white">
      <div className="p-10 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[var(--primary)]">Projects</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[450px]"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-4">{project.description}</p>
              </div>

              {/* Buttons */}
              <div className="mt-auto pt-2 flex justify-center gap-4">
                <a
                  href={project.link}
                  className="border border-[var(--primary)] hover:bg-[var(--primary)] text-white px-4 py-2 rounded text-sm transition"
                  target="_blank"
                >
                  Live Demo
                </a>
                {/* Render GitHub button only if github link exists */}
                {project.github && (
                  <a
                    href={project.github}
                    className="border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-4 py-2 rounded text-sm transition"
                    target="_blank"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
