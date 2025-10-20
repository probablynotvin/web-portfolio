import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#000000] text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-4 text-[var(--primary)]">Contact me</h2>
        <p className="text-gray-400 mb-12">
          I'd love to hear from you! Whether you have a project, a question, or just want to say hi—feel free to reach out.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-left">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="bg-white/5 text-white border border-white/10 p-3 rounded-lg focus:outline-none focus:border-[#7da0c4] transition"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-left">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="bg-white/5 text-white border border-white/10 p-3 rounded-lg focus:outline-none focus:border-[#7da0c4] transition"
              placeholder="you@email.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-left">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="bg-white/5 text-white border border-white/10 p-3 rounded-lg focus:outline-none focus:border-[#7da0c4] transition"
              placeholder="Type your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-[#7da0c4] hover:bg-[#7da0c4] px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="#"
            className="text-gray-400 hover:text-[#7da0c4] transition duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#7da0c4] transition duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-400 hover:text-[#7da0c4] transition duration-300"
          >
            <Mail size={28} />
          </a>
        </div>
        
      </div>
    </section>
  );
}
