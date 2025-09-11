import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={Logo} alt="Technology Gym" className="w-32 mb-4" />
          <p className="text-gray-400 text-sm">
            Transformando energia em resultados. Venha treinar em uma das
            academias mais modernas e completas da cidade.
          </p>
        </div>

        <div>
          <h4 className="text-lime-400 font-bold text-lg mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#activitie"
                className="hover:text-lime-400 transition-colors"
              >
                Atividades
              </a>
            </li>
            <li>
              <a href="#unit" className="hover:text-lime-400 transition-colors">
                Unidades
              </a>
            </li>
            <li>
              <a href="#time" className="hover:text-lime-400 transition-colors">
                Horários
              </a>
            </li>
            <li>
              <a href="#plan" className="hover:text-lime-400 transition-colors">
                Planos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lime-400 font-bold text-lg mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-lime-400" /> (11) 99999-9999
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-lime-400" />{" "}
              contato@technologygym.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-lime-400" /> Rua Exemplo, 123 -
              Centro
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lime-400 font-bold text-lg mb-4">Siga-nos</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-lime-400 rounded-full hover:bg-lime-500 transition-colors"
            >
              <Facebook size={20} className="text-black" />
            </a>
            <a
              href="#"
              className="p-2 bg-lime-400 rounded-full hover:bg-lime-500 transition-colors"
            >
              <Instagram size={20} className="text-black" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Technology Gym. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
