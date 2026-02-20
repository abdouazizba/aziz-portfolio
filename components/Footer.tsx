export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-8 px-4">
      {/* Neon glow line dessus */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>

      {/* Footer container */}
      <div className="w-full flex justify-center">
        <div className="w-[95%] bg-black/40 backdrop-blur-3xl border border-white/30 rounded-2xl py-6 px-8 shadow-2xl shadow-black/50">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Abdou Aziz Ba. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
