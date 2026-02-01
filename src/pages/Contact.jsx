import { useState } from "react";
import Section from "../components/Section.jsx";
import { buildLineUrl, defaultLeadMessage } from "../lib/line.js";

const API_BASE = import.meta.env.VITE_API_BASE || ""; // เช่น http://localhost:4000

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setDone(false);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      setLoading(true);
      // ถ้ายังไม่มี backend ก็ comment ส่วนนี้ได้
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("ส่งข้อมูลไม่สำเร็จ");
      setDone(true);
      e.currentTarget.reset();
    } catch (ex) {
      setErr(ex?.message || "เกิดข้อผิดพลาด");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section title="Contact" subtitle="ทักไลน์หรือฝากข้อมูลไว้ให้ติดต่อกลับ">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">ทักไลน์</div>
          <p className="mt-2 text-sm text-white/70">
            กดปุ่มด้านล่างเพื่อส่งรายละเอียดความต้องการได้ทันที
          </p>
          <a
            href={buildLineUrl(defaultLeadMessage())}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-xl bg-yellow-400 px-4 py-3 font-semibold text-black hover:bg-yellow-300"
          >
            ทักไลน์ IT DATA SPARK
          </a>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">ขอให้ติดต่อกลับ</div>

          <div className="mt-4 grid gap-3">
            <input name="name" required placeholder="ชื่อ" className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-yellow-400" />
            <input name="phone" required placeholder="เบอร์โทร" className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-yellow-400" />
            <input name="email" placeholder="อีเมล (ไม่บังคับ)" className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-yellow-400" />
            <input name="company" placeholder="บริษัท/ร้าน (ไม่บังคับ)" className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-yellow-400" />
            <textarea name="message" required placeholder="สนใจระบบอะไร / รายละเอียดความต้องการ" rows={4} className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-yellow-400" />
          </div>

          {err ? <div className="mt-3 text-sm text-red-300">{err}</div> : null}
          {done ? <div className="mt-3 text-sm text-green-300">ส่งข้อมูลเรียบร้อย ✅</div> : null}

          <button
            disabled={loading}
            className="mt-5 w-full rounded-xl bg-blue-500 px-4 py-3 font-semibold hover:bg-blue-400 disabled:opacity-60"
          >
            {loading ? "กำลังส่ง..." : "ส่งข้อมูล"}
          </button>

          <div className="mt-3 text-xs text-white/50">
            * ถ้ายังไม่เปิด backend ให้ตั้งค่า VITE_API_BASE หรือคอมเมนต์ fetch ในไฟล์นี้ก่อน
          </div>
        </form>
      </div>
    </Section>
  );
}
