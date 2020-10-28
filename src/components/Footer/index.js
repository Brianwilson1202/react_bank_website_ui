import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {company, footerLinks, socialLinks} from '../../consts';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {footerLinks.col1.map((linkItem, index) => {
              return (
                <FooterLinkItems key={index}>
                  <FooterLinkTitle>{linkItem.title}</FooterLinkTitle>
                  {linkItem.contents.map((content, index) => {
                    return (
                      <FooterLink key={index} to={content.link}>
                        {content.name}
                      </FooterLink>
                    );
                  })}
                </FooterLinkItems>
              );
            })}
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            {footerLinks.col2.map((linkItem, index) => {
              return (
                <FooterLinkItems key={index}>
                  <FooterLinkTitle>{linkItem.title}</FooterLinkTitle>
                  {linkItem.contents.map((content, index) => {
                    return (
                      <FooterLink key={index} to={content.link}>
                        {content.name}
                      </FooterLink>
                    );
                  })}
                </FooterLinkItems>
              );
            })}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              {company}
            </SocialLogo>
            <WebsiteRights>
              {company} &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              {socialLinks.map((socialLink, index) => {
                return (
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label={socialLink.name}
                    key={index}
                  >
                    {socialLink.icon}
                  </SocialIconLink>
                );
              })}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
