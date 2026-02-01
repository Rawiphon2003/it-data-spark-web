import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="space-y-3">
      <div className="text-xl font-semibold">404 - Not Found</div>
      <Link className="text-yellow-300 underline" to="/">
        กลับหน้าแรก
      </Link>
    </div>
  );
}
