import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "../components/Section.jsx";
import { PRODUCTS } from "../data/products.js";
import { buildLineUrl, productLeadMessage } from "../lib/line.js";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = useMemo(() => PRODUCTS.find((p) => p.slug === slug), [slug]);

  if (!product) {
    return (
      <div className="space-y-4">
        <div className="text-xl font-semibold">ไม่พบสินค้า</div>
        <Link className="text-yellow-300 underline" to="/solutions">
          กลับไปหน้ารวมสินค้า
        </Link>
      </div>
    );
  }

  const lineUrl = buildLineUrl(productLeadMessage(product.name));

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
        <div className="text-2xl font-bold">{product.name}</div>
        <div className="mt-2 text-white/75">{product.shortDesc}</div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={lineUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-yellow-400 px-4 py-3 font-semibold text-black hover:bg-yellow-300"
          >
            ทักไลน์เพื่อขอเดโม่/ใบเสนอราคา
          </a>
          <Link
            to="/solutions"
            className="rounded-xl border border-white/20 px-4 py-3 font-medium hover:bg-white/10"
          >
            ดูระบบอื่นๆ
          </Link>
        </div>
      </div>

      <Section title="ฟีเจอร์หลัก">
        <ul className="list-inside list-disc space-y-2 text-white/80">
          {product.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </Section>

      <Section title="โมดูลเสริม / Add-ons">
        <ul className="list-inside list-disc space-y-2 text-white/80">
          {product.addons.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Section>

      <Section title="FAQ">
        <div className="space-y-3">
          {[
            { q: "ใช้เวลาติดตั้งนานไหม?", a: "ขึ้นกับขอบเขตงาน โดยทั่วไปเริ่มต้นได้ภายในไม่กี่วันหลังสรุป requirement" },
            { q: "มีซัพพอร์ตหลังการขายไหม?", a: "มี ทั้งแบบ remote และ onsite ตามแพ็กเกจ" },
            { q: "ปรับแต่งได้แค่ไหน?", a: "ปรับได้ตาม workflow จริง และสามารถเพิ่มรายงาน/ฟอร์มเฉพาะได้" },
          ].map((x) => (
            <div key={x.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold">{x.q}</div>
              <div className="mt-2 text-sm text-white/70">{x.a}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
