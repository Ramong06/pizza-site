import React from 'react'
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialIcons, SocialMediaWrap, SocialMedia, SocialLogo, SocialIconLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to='/'>Pizza</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='noopener noreferrer'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitch' rel='noopener noreferrer'>
                            <FaTwitch/>
                        </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
