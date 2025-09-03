// components/Socialicons/index.tsx
import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import {
  FaGithub as FaGithubIcon,
  FaTwitter as FaTwitterIcon,
  FaFacebookF as FaFacebookFIcon,
  FaLinkedin as FaLinkedinIcon,
  FaYoutube as FaYoutubeIcon,
  FaTwitch as FaTwitchIcon,
} from 'react-icons/fa';
import { socialprofiles } from '../../Assets/social_accounts';
import { useColorModeValue } from '../../hooks/useColorModeValue';

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
  const hoverColor = useColorModeValue('grey.800', 'grey.100');

  return (
    <Box className="p-4 text-center">
      <ul className="flex justify-center flex-wrap gap-4">
        {Object.entries(socialprofiles).map(([platform, url]) => {
          if (!url) return null;
          const IconComponent = icons[platform];
          if (!IconComponent) return null;
          return (
            <li key={platform}>
              <Link
                href={url}
                sx={{
                  color: 'text.primary',
                  '&:hover': { color: hoverColor },
                  display: 'inline-flex',
                }}
              >
                <IconComponent size={25} />
              </Link>
            </li>
          );
        })}
      </ul>
      <Typography variant="body2" color="text.secondary">
        Follow Me
      </Typography>
    </Box>
  );
};

export default Socialicons;
