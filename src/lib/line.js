// ใส่ LINE OA หรือ LINE ID ที่ต้องการ
export const LINE_ID = "YOUR_LINE_ID_OR_OA"; // เช่น @itdataspark

export function buildLineUrl(message) {
  // ใช้ได้ทั้ง line.me/R/oaMessage/<id> หรือ line.me/ti/p/~<id>
  // แบบ OA message จะใส่ข้อความอัตโนมัติได้
  const encoded = encodeURIComponent(message || "");
  return `https://line.me/R/oaMessage/${LINE_ID}/?${encoded}`;
}

export function defaultLeadMessage() {
  return `สวัสดีครับ/ค่ะ สนใจบริการ IT DATA SPARK\nขอเดโม่/ใบเสนอราคา\nประเภทธุรกิจ: \nจำนวนผู้ใช้: \nต้องการเริ่มใช้เมื่อ: `;
}

export function productLeadMessage(productName) {
  return `สวัสดีครับ/ค่ะ สนใจระบบ: ${productName}\nขอเดโม่/ใบเสนอราคา\nประเภทธุรกิจ: \nจำนวนผู้ใช้: \nต้องการเริ่มใช้เมื่อ: `;
}
