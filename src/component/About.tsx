import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaBootstrap, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiAngular, SiMysql, SiFigma } from 'react-icons/si';

export default function About() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'AngularJS', icon: <SiAngular /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'GitHub', icon: <FaGithub /> },
  ];

  const hobbies = ['Reading', 'Designing', 'Gaming', 'Photography', 'Learning new tech', 'Watching anime', 'Marvel movies', 'Exploring history'];

  return (
    <section className="py-24 px-6 md:px-16 bg-black text-white border-b border-white/5" id="about">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/20">02 — Profile</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">About Me</h2>

      <p className="text-white/40 text-sm leading-relaxed mb-14 max-w-3xl">
        I am Arvin Charls D. Basco, born on July 5, 2003, and a BSIT graduate from Cavite State University – Tanza Campus (2025).

        I originally wanted a science-related career, but I chose IT due to financial reasons. I’ve since grown to enjoy it, especially networking and system administration.

        I have experience as a web developer and am currently focusing on improving my skills in networking.

        In my free time, I play Dota, watch movies and anime, and read about self-development and related topics. My goal is to build a stable career in the tech industry.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Tech Skills */}
        <div>
          <p className="text-[0.65rem] tracking-[0.16em] uppercase text-white/20 mb-5">Tech Skills</p>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-px bg-white/5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 bg-black p-4 text-white/30 hover:text-white hover:bg-white/5 transition group"
              >
                <div className="text-2xl">{skill.icon}</div>
                <span className="text-[0.65rem] tracking-[0.08em] uppercase">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div id="hobbies">
          <p className="text-[0.65rem] tracking-[0.16em] uppercase text-white/20 mb-5">Hobbies</p>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                className="px-4 py-2 border border-white/10 text-xs tracking-[0.06em] text-white/30 hover:border-white hover:text-white hover:bg-white hover:text-black transition cursor-default"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}