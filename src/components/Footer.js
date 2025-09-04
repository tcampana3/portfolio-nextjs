export default function Footer() {
    return (
      <footer className="border-t border-zinc-800 text-zinc-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm">
          © {new Date().getFullYear()} Anthony Campana
        </div>
      </footer>
    );
  }
  