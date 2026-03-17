import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { UI_TEXT } from "@/constants/uiText";

export const navigationLinks = [
  { href: "#activitie", label: "Atividades" },
  { href: "#unit", label: "Unidades" },
  { href: "#time", label: "Horários" },
  { href: "#plan", label: "Planos" },
  { href: "#feedback", label: "Avaliações" },
  { href: "#faq", label: "FAQ" },
] as const;

export type NavigationLink = (typeof navigationLinks)[number];

export const introSectionActions = [
  { kind: "route", text: UI_TEXT.cta.enroll, to: "/enrollment" },
  {
    kind: "section",
    text: navigationLinks[1].label,
    href: navigationLinks[1].href,
  },
  {
    kind: "section",
    text: navigationLinks[3].label,
    href: navigationLinks[3].href,
  },
] as const;

export type IntroSectionAction = (typeof introSectionActions)[number];

export const contactItems = [
  { icon: Phone, text: "(11) 99999-9999" },
  { icon: Mail, text: "contato@technologygym.com" },
  { icon: MapPin, text: "Rua Exemplo, 123 - Centro" },
] as const;

export type ContactItemData = (typeof contactItems)[number];

export const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
] as const;

export type SocialLinkData = (typeof socialLinks)[number];
