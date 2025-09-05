import { ReactNode } from "react";

export type NavItem = {
  name: string;
  href?: string;
  image?: string;
  items?: {
    name: string;
    description: string;
    image?: string;
    href?: string;
  }[];
};

export type Stat = {
  value: string;
  label: string;
};

export type SocialLink = {
  icon?: React.ReactNode;
  name: string;
  href: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: string;
};

export interface ActionButton {
  id: string
  label: string
  url: string
  icon: ReactNode
  bgColor: "blue" | "red" | "green" | "yellow"
}
