import img1 from '../assets/1.png';
import img3 from '../assets/3.png';
import img7 from '../assets/7.png';
import webportfolio from '../assets/webportfolio.png';

export default function Projects() {
  const projects = [
    { num: '001', title: 'ERIS Resident Mobile Interface', image: img1, description: 'A mobile-first UI for real-time alerts, resident mapping, and emergency coordination.', link: 'https://www.canva.com/design/DAGCVonUJ9Y/TAkfcgGdG9yzBYPoUiryuw/edit' },
    { num: '002', title: 'ERIS Responder Mobile Interface', image: img7, description: 'Real-time monitoring and location-based tools for emergency responders.', link: 'https://www.canva.com/design/DAGMJRKKfwQ/vHWPo8y7zIl21HX0L47DhA/edit' },
    { num: '003', title: 'ERIS Admin Dashboard', image: img3, description: 'Web-based admin UI for resident data, alerts, incident reports, and system configs.', link: 'https://www.canva.com/design/DAGNagP-GsQ/7b1Wht03B7HG0AlhJZVhAg/edit' },
    { num: '004', title: 'ThreadEscape', image: '', description: 'A fashion e-commerce site with custom-tailored UI built in PHP, Bootstrap, and AngularJS.', link: '#', github: '#' },
    { num: '005', title: 'Personal Portfolio', image: webportfolio, description: 'Responsive portfolio built with TypeScript and TailwindCSS — clean, modern, and mobile-optimized.', link: '#', github: '#' },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-black text-white border-b border-white/5">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/20">03 — Work</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Projects</h2>
      <p className="text-white/30 text-sm mb-12">Here are some of the projects I've worked on.</p>

      <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.num}
            className="bg-black p-6 flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-white/[0.02] hover:border-white/20"
          >

            <p className="text-[0.65rem] font-mono text-white/20 tracking-[0.1em] mb-4">
              {project.num}
            </p>

            <div className="h-44 overflow-hidden border border-white/5 mb-4 bg-white/[0.02] transition-all duration-300 ease-out group-hover:border-white/20">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[0.65rem] tracking-[0.1em] uppercase text-white/15">
                    No preview
                  </span>
                </div>
              )}
            </div>

            <h3 className="text-sm font-medium text-white mb-2">
              {project.title}
            </h3>

            <p className="text-xs text-white/30 leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.65rem] tracking-[0.12em] uppercase text-white/40 border-b border-white/10 pb-px hover:text-white hover:border-white transition"
              >
                Live Demo →
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.65rem] tracking-[0.12em] uppercase text-white/40 border-b border-white/10 pb-px hover:text-white hover:border-white transition"
                >
                  GitHub →
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}