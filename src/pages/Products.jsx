import { useMemo, useState } from "react";
import Section from "../components/Section.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { CATEGORIES, PRODUCTS } from "../data/products.js";

export default function Products() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const okCat = cat === "all" ? true : p.categoryId === cat;
      const okQ =
        !qq ||
        p.name.toLowerCase().includes(qq) ||
        p.shortDesc.toLowerCase().includes(qq);
      return okCat && okQ;
    });
  }, [q, cat]);

  return (
    <div>
      <Section title="Solutions / Products" subtitle="ค้นหาและเลือกดูรายละเอียดระบบที่สนใจ">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ค้นหา (เช่น POS, Stock, CRM...)"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-yellow-400 md:flex-1"
          />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-yellow-400"
          >
            <option value="all">ทุกหมวด</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-6 text-sm text-white/70">ไม่พบรายการที่ค้นหา</div>
        ) : null}
      </Section>
    </div>
  );
}
