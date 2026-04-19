export default function Footer() {
  return (
    <footer className="py-5 px-6 md:px-16 flex items-center justify-between border-t border-white/5 bg-black">
      <p className="text-[0.7rem] tracking-[0.06em] text-white/20">© 2025 Arvin Charls Basco. All rights reserved.</p>
      <div className="flex gap-6">
        {['GitHub', 'LinkedIn', 'Email'].map((item) => (
          <a key={item} href="#" className="text-[0.65rem] tracking-[0.12em] uppercase text-white/20 hover:text-white transition">
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}