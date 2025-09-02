// components/SocialIcons/index.tsx
import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaGithub as FaGithubIcon,
  FaTwitter as FaTwitterIcon,
  FaFacebookF as FaFacebookFIcon,
  FaLinkedin as FaLinkedinIcon,
  FaYoutube as FaYoutubeIcon,
  FaTwitch as FaTwitchIcon,
} from 'react-icons/fa';
import { socialprofiles } from '../../Assets/social_accounts';
import { ThemeContext } from '../../ThemeContext';
import './Socialicons.css';

type SizedIcon = React.ComponentType<{ size: number }>;

const icons: Record<string, SizedIcon> = {
  twitter: FaTwitterIcon as unknown as SizedIcon,
  github: FaGithubIcon as unknown as SizedIcon,
  facebook: FaFacebookFIcon as unknown as SizedIcon,
  linkedin: FaLinkedinIcon as unknown as SizedIcon,
  youtube: FaYoutubeIcon as unknown as SizedIcon,
  twitch: FaTwitchIcon as unknown as SizedIcon,
};

export const Socialicons: React.FC = () => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <footer className="bg-tertiary">
      <Container className="p-4 text-center">
        <Row>
          <Col>
            <ul className="list-inline">
                {Object.entries(socialprofiles).map(([platform, url]) => {
                  if (!url) return null;

                  const IconComponent = icons[platform];
                  if (!IconComponent) return null;

                  return (
                    <li className="list-inline-item mx-2" key={platform}>
                      <a
                        href={url}
                        className={`${
                          theme === 'light'
                            ? 'text-dark text-dark-hover'
                            : 'text-light text-light-hover'
                        }`}
                      >
                        <IconComponent size={25} />
                      </a>
                    </li>
                  );
                })}
            </ul>
            <p className="text-muted">Follow Me</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Socialicons;
