import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofiles } from "../../data/social_accounts";

export const Socialicons = () => {
  return (
    <footer className="bg-tertiary">
      <Container className="p-4 text-center">
        <Row>
          <Col>
            <ul className="list-inline">
              {socialprofiles.twitter && (
                <li className="list-inline-item mx-2">
                  <a href={socialprofiles.twitter} className="text-dark">
                    <FaTwitter size={25} />
                  </a>
                </li>
              )}
              {socialprofiles.github && (
                <li className="list-inline-item mx-2">
                  <a href={socialprofiles.github} className="text-dark">
                    <FaGithub size={25} />
                  </a>
                </li>
              )}
              {socialprofiles.facebook && (
                <li className="list-inline-item mx-2">
                  <a href={socialprofiles.facebook} className="text-dark">
                    <FaFacebookF size={25} />
                  </a>
                </li>
              )}
              {socialprofiles.linkedin && (
                <li className="list-inline-item mx-2">
                  <a href={socialprofiles.linkedin} className="text-dark">
                    <FaLinkedin size={25} />
                  </a>
                </li>
              )}
              {socialprofiles.youtube && (
                <li className="list-inline-item mx-2">
                  <a href={socialprofiles.youtube} className="text-dark">
                    <FaYoutube size={25} />
                  </a>
                </li>
              )}
              {socialprofiles.twitch && (
                <li className="list-inline-item mx-2">
                  <a href={socialprofiles.twitch} className="text-dark">
                    <FaTwitch size={25} />
                  </a>
                </li>
              )}
            </ul>
            <p className="text-muted">Follow Me</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Socialicons;
