import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { PRODUCTS } from "../data/products.js";
import { buildLineUrl, defaultLeadMessage } from "../lib/line.js";

// โหลดโลโก้จาก public
// const logo = "/logo-re-bg.png";
<img src={`${import.meta.env.BASE_URL}logo-re-bg.png`} ... />


export default function Home() {
  const lineUrl = buildLineUrl(defaultLeadMessage());

  return (
    <div className="space-y-24">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-10 py-20 md:px-16 md:py-24 text-center">
        {/* background glow เบาๆ */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-techBlue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-sparkGold/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* ===== HERO LOGO (shape-follow effects) ===== */}
          <div className="mb-10 flex justify-center">
            <div className="logo-shape-wrap">
              <div className="logo-shape-glow" />
              <div className="logo-shape-scan" />

              <img
                src={logo}
                alt="IT DATA SPARK"
                loading="eager"
                className="logo-shape-img"
                onError={(e) => {
                  console.error("Logo failed to load:", logo);
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="text-sparkGold">IT DATA SPARK</span>
            <br />
            <span className="text-techBlue">
              Technology that drives your business forward
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            ระบบและโปรแกรมสำหรับธุรกิจที่ต้องการ
            <span className="text-white font-medium">
              {" "}
              ความเร็ว ความแม่นยำ และการเติบโต{" "}
            </span>
            บนเทคโนโลยีที่ออกแบบมาเพื่อคุณโดยเฉพาะ
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-techBlue px-8 py-4 font-semibold text-black shadow-glow transition hover:scale-105"
            >
              ขอเดโม่ / ใบเสนอราคา
            </a>

            <Link
              to="/solutions"
              className="rounded-xl border border-white/20 px-8 py-4 font-medium text-white transition hover:bg-white/10"
            >
              ดูโซลูชันทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <Section
        title="Core Solutions"
        subtitle="โซลูชันด้านระบบและข้อมูล ที่ออกแบบมาเพื่อการใช้งานจริงของธุรกิจ"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      {/* ================= HOW IT WORKS ================= */}
      <Section
        title="How It Works"
        subtitle="กระบวนการทำงานที่ชัดเจน โปร่งใส และโฟกัสผลลัพธ์"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Requirement Analysis",
              desc: "วิเคราะห์ปัญหา เป้าหมาย และ workflow ของธุรกิจคุณ",
            },
            {
              step: "02",
              title: "Design & Proposal",
              desc: "ออกแบบระบบและนำเสนอแนวทาง พร้อมเดโม่และใบเสนอราคา",
            },
            {
              step: "03",
              title: "Deploy & Support",
              desc: "ติดตั้ง อบรม และดูแลหลังการขายอย่างต่อเนื่อง",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="absolute -top-6 -right-6 text-7xl font-extrabold text-white/5">
                {item.step}
              </div>

              <div className="relative z-10">
                <div className="text-techBlue font-semibold">
                  {item.title}
                </div>
                <p className="mt-3 text-sm text-white/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
