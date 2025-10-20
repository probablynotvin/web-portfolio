import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaBootstrap,
  FaPhp,
} from 'react-icons/fa';
import { SiTailwindcss, SiAngular, SiMysql, SiFigma } from 'react-icons/si';


export default function About() {
  return (

    <section className="py-24 px-6 md:px-16 text-center bg-black text-white" id="about">
      <div className="max-full">
        <h2 className="text-4xl md:text-5xl mb-10 font-bold text-[var(--primary)]">About Me</h2>
        <p className="text-white/80 text-lg mb-12 mx-auto text-justify">
        I’m a BSIT graduate driven by a deep passion for technology and creativity. 
        I love building visually captivating and responsive web interfaces using modern tools and frameworks.
        Beyond coding, I’m a curious thinker with a strong appreciation for design, storytelling, 
        and crafting meaningful digital experiences. 

        In my free time, I enjoy reading books about human nature, power, psychology, finance, and history, 
        constantly exploring how the world works and how people think. I’m also an avid fan of Marvel, anime, 
        and the Harry Potter series, drawing inspiration from the rich worlds and characters they create.

        When I’m not coding or designing, you’ll often find me reading, gaming, or immersing myself in a great story. 
        One of my favorite Bible verses is <strong>John 3:16</strong>, a reminder of love and purpose. I also live by 
        Confucius’ words: <em>“A journey of a thousand miles begins with a single step.”</em> These guide my mindset in 
        both life and technology — start small, stay consistent, and keep growing.
        </p>


        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-30 items-start">
          
        {/* Tech Skills - Left Column */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">Tech Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
            {[
              { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
              { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
              { name: 'AngularJS', icon: <SiAngular className="text-red-500" /> },
              { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
              { name: 'PHP', icon: <FaPhp className="text-indigo-400" /> },
              { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
              { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
              { name: 'React', icon: <FaReact className="text-cyan-400" /> },
              { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
              { name: 'GitHub', icon: <FaGithub className="text-white" /> },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white/10 backdrop-blur-md p-4 rounded-xl w-28 h-28 shadow hover:scale-105 transition-transform"
              >
                <div className="text-3xl mb-5">{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Hobbies - Right Column */}
        <div id="hobbies">
          <h3 className="text-2xl font-semibold mb-6 text-white">Hobbies</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-white/80">
            {[
              'Reading',
              'Designing',
              'Gaming',
              'Photography',
              'Learning new tech',
              'Watching anime',
              'Marvel movies',
              'Exploring history',
            ].map((hobby, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm backdrop-blur-md hover:bg-white/10 transition"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}
