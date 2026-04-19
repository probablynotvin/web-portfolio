import React from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, #111 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #111 40px)",
        }}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 py-24 md:flex-row md:items-center md:justify-between">
        {/* LEFT */}
        <div className="max-w-xl">
          {/* Availability */}
          <span className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-white/30">
            <span className="w-5 h-px bg-white/30 inline-block" />
            Available for work
          </span>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            I'm{" "}
            <span
              style={{
                WebkitTextStroke: "1px white",
                WebkitTextFillColor: "transparent",
              }}
            >
              Arvin
            </span>
            <br />
            Charls
          </h1>

          <p className="mt-3 text-xs tracking-[0.14em] uppercase text-white/30">
            Information Technology
          </p>

          <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-sm">
            Learning IT fundamentals, including Ubuntu and Windows OS, and 
            continuously improving technical skills. Building meaningful digital solutions.
          </p>

          <ul className="mt-6 space-y-2">
            {[
              "Build useful and user-friendly products",
              "Create simple solutions that solve real problems",
              "Improve through testing and feedback",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-white/40"
              >
                <span className="mt-[2px] text-white/20">—</span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-xs tracking-[0.14em] uppercase font-medium hover:bg-white/90 transition"
            >
              Let's Talk <ArrowDown className="h-3.5 w-3.5" />
            </button>

            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 px-6 py-3 text-xs tracking-[0.14em] uppercase hover:border-white hover:text-white transition"
            >
              Download CV <FileDown className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-3">
            {[
              {
                href: "https://github.com/probablynotvin",
                icon: <Github size={16} />,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/arvin-charls-basco-549b65283/",
                icon: <Linkedin size={16} />,
                label: "LinkedIn",
              },
              {
                href: "mailto:contactarvincharls@gmail.com",
                icon: <Mail size={16} />,
                label: "Email",
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-white/40 hover:text-white transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex-shrink-0">
          

          <div
            className="relative border border-white/10 overflow-hidden bg-white/10"
            style={{ width: 260, height: 320 }}
          >
            <img
              src={profileImg}
              alt="Arvin Charls Basco"
              className="w-full h-full object-cover"
              style={{
                objectPosition: "center 20%",
                filter: "none",
              }}
              loading="eager"
              draggable={false}
            />

            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/80 px-3 py-2 backdrop-blur-sm">
              <p className="text-[0.6rem] tracking-[0.14em] uppercase text-white/30">
                IT
              </p>
              <p className="text-sm font-medium text-white">
                Arvin Charls Basco
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-3 hidden md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-[0.65rem] tracking-[0.14em] uppercase text-white/20">
          <span>UI/UX</span>
          <span>Web Development</span>
          <span>Basic Networking</span>
          <span>Virtualization</span>
          <span>Quality Assurance</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;