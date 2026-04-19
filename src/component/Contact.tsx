

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-black text-white border-b border-white/5">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/20">04 — Get in touch</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Contact</h2>
      <p className="text-white/30 text-sm mb-12">I'd love to hear from you.</p>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl">

        {/* Info */}
        <div>
          <p className="text-sm text-white/40 leading-relaxed mb-10">
            Whether you have a project, a question, or just want to say hi — feel free to reach out.
          </p>

          {[
            { label: 'Email', value: 'contactarvincharls@gmail.com', href: 'mailto:contactarvincharls@gmail.com' },
            { label: 'GitHub', value: 'github.com/probablynotvin', href: 'https://github.com/probablynotvin' },
            { label: 'LinkedIn', value: 'linkedin.com/in/arvin-charls-basco', href: 'https://www.linkedin.com/in/arvin-charls-basco-549b65283/' },
          ].map(({ label, value, href }) => (
            <div key={label} className="border-t border-white/5 py-4">
              <p className="text-[0.6rem] tracking-[0.16em] uppercase text-white/20 mb-1">{label}</p>
              <a href={href} className="text-sm text-white/50 hover:text-white transition">{value}</a>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="space-y-5">
          {[
            { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
            { id: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="flex flex-col gap-2">
              <label htmlFor={id} className="text-[0.65rem] tracking-[0.14em] uppercase text-white/30">{label}</label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="bg-black border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition placeholder:text-white/20"
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[0.65rem] tracking-[0.14em] uppercase text-white/30">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Type your message..."
              className="bg-black border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 transition placeholder:text-white/20 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black text-xs tracking-[0.16em] uppercase font-medium py-4 hover:bg-white/90 transition"
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}