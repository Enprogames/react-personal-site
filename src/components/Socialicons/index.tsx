// components/Socialicons/index.tsx
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
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
    <Box className="p-4 text-center">
      <ul className="flex justify-center flex-wrap gap-4">
        {Object.entries(socialprofiles).map(([platform, url]) => {
          if (!url) return null;
          const IconComponent = icons[platform];
          if (!IconComponent) return null;
          return (
            <li key={platform}>
              <a
                href={url}
                className={`${
                  theme === 'light'
                    ? 'text-gray-800 text-dark-hover'
                    : 'text-gray-100 text-light-hover'
                }`}
              >
                <IconComponent size={25} />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="text-gray-500">Follow Me</p>
    </Box>
  );
};

export default Socialicons;
