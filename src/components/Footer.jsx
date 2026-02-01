export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/70">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} IT DATA SPARK</div>
          <div>Dedicated services for you</div>
        </div>
      </div>
    </footer>
  );
}
