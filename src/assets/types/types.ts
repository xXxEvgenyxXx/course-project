interface FooterLink {
  name: string;
  url: string;
}

export interface FooterLinkGroup {
  header: string;
  links: FooterLink[];
}