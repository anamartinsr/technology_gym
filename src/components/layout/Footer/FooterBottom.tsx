import { UI_TEXT } from "@/constants/uiText";

export default function FooterBottom() {
  return (
    <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-300 text-sm">
      © {new Date().getFullYear()} {UI_TEXT.brand.name}. Todos os direitos
      reservados.
    </div>
  );
}
