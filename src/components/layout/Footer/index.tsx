import { useLocation, useNavigate } from "react-router-dom";
import ResponsiveImage from "@/components/common/ResponsiveImage";

import FooterSection from "@/components/layout/Footer/FooterSection";
import SocialLink from "@/components/layout/Footer/SocialLink";
import ContactItem from "@/components/layout/Footer/ContactItem";
import FooterBottom from "@/components/layout/Footer/FooterBottom";
import { scrollToSection } from "@/utils/scrollToSection";
import { contactItems, navigationLinks, socialLinks } from "@/data/navigation";
import { UI_TEXT } from "@/constants/uiText";
import { imageAssets } from "@/data/images";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFooterNavClick = (e: React.MouseEvent, href: string) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate(`/${href}`);
      return;
    }

    scrollToSection(e, href);
  };

  return (
    <footer className="bg-(--secondary-color) text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <FooterSection title="">
          <ResponsiveImage
            asset={{
              ...imageAssets.logo,
              alt: UI_TEXT.brand.name,
              width: 128,
              height: 128,
            }}
            imgClassName="w-32 mb-4"
          />
          <p className="text-gray-200 text-sm">
            Transformando energia em resultados. Venha treinar em uma das
            academias mais modernas e completas da cidade.
          </p>
        </FooterSection>

        <FooterSection title="Navegação">
          <ul className="space-y-2 text-sm">
            {navigationLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleFooterNavClick(e, href)}
                  className="hover:text-(--primary-color) transition-colors focus-visible:text-(--primary-color)"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </FooterSection>

        <FooterSection title="Contato">
          <ul className="space-y-3 text-sm text-gray-200">
            {contactItems.map(({ icon: Icon, text }) => (
              <ContactItem
                key={text}
                icon={<Icon size={16} className="text-(--primary-color)" />}
                text={text}
              />
            ))}
          </ul>
        </FooterSection>

        <FooterSection title="Siga-nos">
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <SocialLink key={label} href={href}>
                <Icon
                  size={20}
                  className="text-(--secondary-color)"
                  aria-label={label}
                />
              </SocialLink>
            ))}
          </div>
        </FooterSection>
      </div>

      <FooterBottom />
    </footer>
  );
}
