import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "../../../assets/logo.png";

import FooterSection from "./FooterSection";
import SocialLink from "./SocialLink";
import ContactItem from "./ContactItem";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-(--secondary-color) text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <FooterSection title="">
          <img src={Logo} alt="Technology Gym" className="w-32 mb-4" />
          <p className="text-gray-400 text-sm">
            Transformando energia em resultados. Venha treinar em uma das
            academias mais modernas e completas da cidade.
          </p>
        </FooterSection>

        <FooterSection title="Navegação">
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#activitie"
                className="hover:text-(--primary-color) transition-colors"
              >
                Atividades
              </a>
            </li>
            <li>
              <a
                href="#unit"
                className="hover:text-(--primary-color) transition-colors"
              >
                Unidades
              </a>
            </li>
            <li>
              <a
                href="#time"
                className="hover:text-(--primary-color) transition-colors"
              >
                Horários
              </a>
            </li>
            <li>
              <a
                href="#plan"
                className="hover:text-(--primary-color) transition-colors"
              >
                Planos
              </a>
            </li>
          </ul>
        </FooterSection>

        <FooterSection title="Contato">
          <ul className="space-y-3 text-sm text-gray-400">
            <ContactItem
              icon={<Phone size={16} className="text-(--primary-color)" />}
              text="(11) 99999-9999"
            />
            <ContactItem
              icon={<Mail size={16} className="text-(--primary-color)" />}
              text="contato@technologygym.com"
            />
            <ContactItem
              icon={<MapPin size={16} className="text-(--primary-color)" />}
              text="Rua Exemplo, 123 - Centro"
            />
          </ul>
        </FooterSection>

        <FooterSection title="Siga-nos">
          <div className="flex gap-4">
            <SocialLink href="#">
              <Facebook size={20} className="text-(--secondary-color)" />
            </SocialLink>
            <SocialLink href="#">
              <Instagram size={20} className="text-(--secondary-color)" />
            </SocialLink>
          </div>
        </FooterSection>
      </div>

      <FooterBottom />
    </footer>
  );
}
