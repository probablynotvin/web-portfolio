import React from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  FileDown,
} from "lucide-react";

import resumeFile from "../assets/BASCO_Arvin_Charls_Resume.pdf";
import profileImg from "../assets/vin-removebg.png";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
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

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 py-24 md:flex-row md:items-center md:justify-between">
        {/* LEFT: text block */}
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 text-sm text-white/70">
            <span className="text-xl">👋</span> Hello!
          </span>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            I'm <span className="text-[#2563eb]">Arvin Charls</span>
          </h1>

          <p className="mt-2 text-xl text-white/80">Information Technology</p>

          <p className="mt-5 text-white/80">
            I am learning IT fundamentals, including Ubuntu and Windows OS, and 
            upskilling to become a Cloud Engineer. I aim to grow my skills in technology 
            and create meaningful digital solutions. 
          </p>

          {/* checklist */}
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
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-6 py-3 text-white shadow-lg ring-1 ring-white/10 transition hover:translate-y-[-1px] hover:bg-[#0f172a]"
            >
              Let's Talk <ArrowDown className="h-4 w-4" />
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
            <a href="https://github.com/probablynotvin" aria-label="GitHub" className="opacity-80 transition hover:opacity-100">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/arvin-charls-basco-549b65283/" aria-label="LinkedIn" className="opacity-80 transition hover:opacity-100">
              <Linkedin size={22} />
            </a>
            <a href="mailto:contactarvincharls@gmail.com" aria-label="Email" className="opacity-80 transition hover:opacity-100">
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT: Profile picture */}
        <div className="relative flex-shrink-0">
          {/* Animated conic gradient ring */}
          <div
            className="absolute -inset-1 rounded-full opacity-80 blur-sm"
            style={{
              background:
                "conic-gradient(at 50% 50%, #1e3a8a 0deg,#2563eb 120deg,#1e40af 240deg, #1e3a8a 360de)",
              animation: "spin 6s linear infinite",
            }}
          />

          {/* Static outer glow */}
          <div className="absolute -inset-4 rounded-full bg-[#2563eb] opacity-10 blur-2xl" />

          {/* Image container */}
          <div className="relative h-56 w-56 rounded-full ring-2 ring-white/10 overflow-hidden sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <img
              src={profileImg}
              alt="Charls Basco"
              className="h-full w-full object-cover object-center" // default center
              style={{ objectPosition: 'center 30%' }} // move image downwards
              loading="eager"
              draggable={false}
            />
          </div>

          {/* Floating badge */}
          {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2563eb] px-4 py-1 text-xs font-semibold text-white shadow-lg">
            Available for work 🟢
          </div> */}
        </div>
      </div>

      {/* spin keyframes injected inline */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* bottom marquee nav */}
      <div className="absolute bottom-0 left-0 right-0 hidden bg-black/30 py-3 backdrop-blur md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-white/80">
          <span>UI/UX</span>
          <span>WEB DEVELOPMENT</span>
          <span>BASIC NETWORKING</span>
          <span>VIRTUALIZATION</span>
          <span>QUALITY ASSURANCE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;