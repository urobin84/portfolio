import { ReactNode } from "react";

export type Links = {
  links: Link[]
}

type Link = {
  path: string;
  title: string;
};

export type NavLinkType = {
  href: string
  title: string
}

export type TabButtonType = {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
};

export type ProjectCardType = {
  imgUrl:string
  title:string
  description:string
  gitUrl:string
  previewUrl:string
};

export type ProjectTagType = {
  name:string
  onClick: (tag:string) => void
  isSelected:boolean
};