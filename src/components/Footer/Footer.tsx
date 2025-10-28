import React from 'react';
import '../../assets/styles/footer.css'
import { footerLinks } from '../../assets/data/footerLinks';

const Footer = () => {
  return (
    <footer>
      {footerLinks.map((footerLinksGroup) => (
        <div className="footer-links-wrapper">
            <h2 className="footer-links-head">{footerLinksGroup.header}</h2>
            {footerLinksGroup.links.map((footerLink) => (
                <a href={footerLink.url}>{footerLink.name}</a>
            ))}
        </div>
      ))}
      <div className="footer-bottom">
        <p>Project Novoakopovsk - 2025. Not official Minecraft product. Not approved by or associated with Mojang Synergies AB.</p>
      </div>
    </footer>
  );
};

export default Footer;