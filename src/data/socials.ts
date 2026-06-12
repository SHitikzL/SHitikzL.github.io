import MailIcon from "../assets/icons/mail.svg";
import TelegramIcon from "../assets/icons/brand-telegram.svg";
import VkIcon from "../assets/icons/brand-vk.svg";
import type { SvgComponent } from "astro/types";

export interface SocialCard {
  icon: SvgComponent;
  title: string;
  login: string;
  href: string;
}
export const socialCards: SocialCard[] = [
  {
    icon: MailIcon,
    title: "Email",
    login: "shitikova.lesi@icloud.com",
    // description: "Для официальных запросов и документов.",
    href: "mailto:shitikova.lesi@icloud.com",
  },
  {
    icon: VkIcon,
    title: "ВКонтакте",
    login: "vk.ru/shitikz",
    // description: "Полезные посты и живое общение.",
    href: "https://vk.ru/shitikz",
  },
  {
    icon: TelegramIcon,
    title: "Telegram",
    login: "@shitikz",
    // description: "Самый быстрый способ получить ответ.",
    href: "https://t.me/shitikz",
  },
];