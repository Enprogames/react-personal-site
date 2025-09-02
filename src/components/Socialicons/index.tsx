// components/SocialIcons/index.tsx
import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from 'react-icons/fa';
import { socialprofiles } from '../../Assets/social_accounts';
import { ThemeContext } from '../../ThemeContext';
import './Socialicons.css';

export const Socialicons: React.FC = () => {
  const { theme } = useContext(ThemeContext)!;

  const icons: Record<string, React.ComponentType<{ size: number }>> = {
    twitter: FaTwitter,
    github: FaGithub,
    facebook: FaFacebookF,
    linkedin: FaLinkedin,
    youtube: FaYoutube,
    twitch: FaTwitch,
  };

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
