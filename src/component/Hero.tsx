import React from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  FileDown,
} from "lucide-react";


import resumeFile from "../assets/charlsresume.png";


const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-transparent via-[#0b1220] to-[#0b1220] text-white"
    >
      {/* soft background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#2563eb] blur-3xl opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[22rem] w-[22rem] rounded-full bg-fuchsia-500 blur-3xl opacity-20" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 py-24 md:flex-row md:items-end md:justify-between">
        {/* LEFT: text block */}
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 text-sm text-white/70">
            <span className="text-xl">👋</span> Hello!
          </span>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          I’m <span className="text-[#2563eb]">Charls</span>
          </h1>

          <p className="mt-2 text-xl text-white/80">Information Technology</p>

          <p className="mt-5 text-white/80">
            I specialize in crafting responsive, visually engaging websites using modern frameworks
            and design systems to create seamless digital experiences. My goal is to keep growing
            and evolving in the ever-changing world of technology, pursuing opportunities that lead
            to meaningful impact.
          </p>

          {/* checklist like in the sample */}
          <ul className="mt-6 space-y-2 text-white/90">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2563eb]" />
              <span>Products should feel authentic and usable</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2563eb]" />
              <span>Design that solves pain points elegantly</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2563eb]" />
              <span>User testing, feedback, and iteration</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-3 text-white shadow-lg ring-1 ring-white/10 transition hover:translate-y-[-1px] hover:bg-[#0f172a]"
            >
              Let’s Talk <ArrowDown className="h-4 w-4" />
            </button>

            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2563eb] px-6 py-3 text-[#2563eb] transition hover:bg-[#2563eb] hover:text-white"
            >
              Download CV <FileDown className="h-4 w-4" />
            </a>

          </div>

          {/* socials */}
          <div className="mt-6 flex items-center gap-5">
            <a href="#" aria-label="GitHub" className="opacity-80 transition hover:opacity-100">
              <Github size={22} />
            </a>
            <a href="#" aria-label="LinkedIn" className="opacity-80 transition hover:opacity-100">
              <Linkedin size={22} />
            </a>
            <a href="#" aria-label="Email" className="opacity-80 transition hover:opacity-100">
              <Mail size={22} />
            </a>
          </div>
        </div>

  <div className="relative">
  <div className="absolute -inset-8 -z-10 rounded-[36px] bg-[conic-gradient(at_60%_40%,#60a5fa_0deg,#a78bfa_120deg,#fbbf24_240deg,#60a5fa_360deg)] opacity-70 blur-2xl" />
    {/* plain image, no card */}
    {/* <img
      src={profileImg}
      alt="Profile"
      className="
        relative z-10 block
        w-40  h-auto          
        sm:w-48            
        md:w-60            
        lg:w-80            
        xl:w-[24rem]         
        object-contain
        select-none drop-shadow-2xl
      "
      loading="eager"
      draggable={false}
    /> */}
  </div>

      </div>

      {/* bottom marquee nav like the sample */}
      <div className="absolute bottom-0 left-0 right-0 hidden bg-black/30 py-3 backdrop-blur md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-white/80">
          <span>UI/UX</span>
          <span>WEB DEVELOPMENT</span>
          <span>BASIC NETWORKING</span>
          <span>LAYOUT DESIGN</span>
          <span>QUALITY ASSURANCE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
