import { buildLineUrl } from "../lib/line.js";
import Section from "../components/Section.jsx";

const packs = [
  { name: "Starter", desc: "เริ่มต้นใช้งาน / ฟีเจอร์หลัก", msg: "ขอใบเสนอราคาแพ็กเกจ Starter" },
  { name: "Pro", desc: "เพิ่มรายงาน/สิทธิ์ผู้ใช้/เชื่อมต่อ", msg: "ขอใบเสนอราคาแพ็กเกจ Pro" },
  { name: "Enterprise", desc: "ปรับแต่ง/อินทิเกรต/ดูแลระดับองค์กร", msg: "ขอใบเสนอราคาแพ็กเกจ Enterprise" },
];

export default function Pricing() {
  return (
    <Section title="Pricing" subtitle="เลือกแพ็กเกจ แล้วทักไลน์เพื่อรับใบเสนอราคา">
      <div className="grid gap-4 md:grid-cols-3">
        {packs.map((p) => (
          <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">{p.name}</div>
            <div className="mt-2 text-sm text-white/70">{p.desc}</div>
            <a
              className="mt-5 inline-block rounded-xl bg-yellow-400 px-4 py-3 font-semibold text-black hover:bg-yellow-300"
              href={buildLineUrl(`สวัสดีครับ/ค่ะ ${p.msg}\nธุรกิจ: \nจำนวนผู้ใช้: `)}
              target="_blank"
              rel="noreferrer"
            >
              ทักไลน์
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
