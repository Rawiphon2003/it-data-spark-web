import { buildLineUrl, defaultLeadMessage } from "../lib/line.js";

export default function LineFloatingButton() {
  const url = buildLineUrl(defaultLeadMessage());
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold text-black shadow-lg hover:bg-yellow-300"
      aria-label="Chat on LINE"
    >
      ทักไลน์
    </a>
  );
}
