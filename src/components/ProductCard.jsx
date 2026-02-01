import { Link } from "react-router-dom";
import { buildLineUrl, productLeadMessage } from "../lib/line.js";

export default function ProductCard({ product }) {
  const lineUrl = buildLineUrl(productLeadMessage(product.name));

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-techBlue/50 hover:shadow-glow">
      
      {/* Glow hover effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-techBlue/25 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div>
          <h3 className="text-lg font-semibold tracking-wide text-techBlue">
            {product.name}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {product.shortDesc}
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            to={`/solutions/${product.slug}`}
            className="rounded-lg bg-techBlue px-4 py-2 text-sm font-semibold text-black transition hover:shadow-glow hover:scale-105"
          >
            ดูรายละเอียด
          </Link>

          <a
            href={lineUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-sparkGold/40 px-4 py-2 text-sm font-medium text-sparkGold transition hover:bg-sparkGold/10"
          >
            ทักไลน์
          </a>
        </div>
      </div>
    </div>
  );
}
