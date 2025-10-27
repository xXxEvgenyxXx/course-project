import React, { FC } from 'react';
import { FooterUIProps } from './type';
import { footerLinks } from '../../assets/data/footerLinks';
import '../../assets/styles/footer.css'

const Footer: FC<FooterUIProps> = (props) => {

  return (
    <footer>
      {footerLinks.map((footerLinkGroup) => (
        <div className="footer-links-wrapper">
          <h2>{footerLinkGroup.header}</h2>
          {footerLinkGroup.links.map((footerLink) => (
            <a href={footerLink.url}>{footerLink.name}</a>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;