import React from 'react';
import {
  Drawer as MuiDrawer,
  Box,
  Avatar,
  Typography,
  Stack,
  IconButton,
  Link as MuiLink,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Twitter,
  Facebook,
  Instagram,
  GitHub,
  LinkedIn,
  HomeOutlined,
  PersonOutline,
  DescriptionOutlined,
  MenuBookOutlined,
  MiscellaneousServicesOutlined,
  MailOutline,
  BuildOutlined,
} from '@mui/icons-material';

const drawerWidth = 280;

function SocialButton({ label, icon, onClick }) {
  return (
    <IconButton
      size="small"
      sx={{
        color: '#b0c4d4',
        bgcolor: 'rgba(176,196,212,0.08)',
        border: '1px solid rgba(176,196,212,0.15)',
        width: 36,
        height: 36,
        '&:hover': { bgcolor: 'rgba(176,196,212,0.15)' },
      }}
      aria-label={label}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
}

function NavItem({ active, icon, label, onClick }) {
  return (
    <ListItemButton
      selected={active}
      onClick={onClick}
      sx={{
        px: 2,
        borderRadius: 1,
        color: '#c9d7e1',
        '&.Mui-selected': {
          bgcolor: 'rgba(74,144,226,0.12)',
          color: '#e6f0ff',
        },
        '&:hover': {
          bgcolor: 'rgba(255,255,255,0.05)',
        },
      }}
    >
      <Box component="span" sx={{ width: 28, display: 'inline-flex', mr: 1.5, opacity: 0.85 }}>
        {icon}
      </Box>
      <ListItemText primary={label} primaryTypographyProps={{ fontWeight: active ? 600 : 500 }} />
    </ListItemButton>
  );
}

export default function Drawer({ onPageChange, currentPage }) {
  const navItems = [
    { id: 'about', icon: <PersonOutline fontSize="small" />, label: 'About' },
    { id: 'skills', icon: <BuildOutlined fontSize="small" />, label: 'Skills' },
    { id: 'gallery', icon: <MenuBookOutlined fontSize="small" />, label: 'Gallery' },
    { id: 'resume', icon: <DescriptionOutlined fontSize="small" />, label: 'Resume' },
    { id: 'portfolio', icon: <MenuBookOutlined fontSize="small" />, label: 'Portfolio' },
    { id: 'services', icon: <MiscellaneousServicesOutlined fontSize="small" />, label: 'Services' },
    { id: 'contact', icon: <MailOutline fontSize="small" />, label: 'Contact' },
  ];

  return (
    <MuiDrawer
      variant="permanent"
      PaperProps={{
        sx: {
          width: drawerWidth,
          bgcolor: '#0b1220',
          color: '#c9d7e1',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          backgroundImage: 'none',
        },
      }}
      sx={{ width: drawerWidth, flexShrink: 0 }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Box sx={{ px: 3, pt: 4, pb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar
              alt="Profile"
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              sx={{
                width: 112,
                height: 112,
                border: '6px solid #1b2433',
                '& .MuiAvatar-img': {
                  objectFit: 'cover',
                  objectPosition: '50% 35%',
                },
              }}
            />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#e6f0ff', textAlign: 'center' }}>
           JOEL
          </Typography>

          <Stack direction="row" spacing={1.5} sx={{ pt: 1 }}>
            <SocialButton label="Twitter" icon={<Twitter fontSize="small" />} />
            <SocialButton label="Facebook" icon={<Facebook fontSize="small" />} />
            <SocialButton
              label="Instagram"
              icon={<Instagram fontSize="small" />}
              onClick={() =>
                window.open('https://instagram.com/tap_to_launch', '_blank', 'noopener,noreferrer')
              }
            />
            <SocialButton label="GitHub" icon={<GitHub fontSize="small" />} />
            <SocialButton label="LinkedIn" icon={<LinkedIn fontSize="small" />} />
          </Stack>
        </Box>

        <Box sx={{ px: 2.5 }}>
          <List dense disablePadding>
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                active={currentPage === item.id}
                icon={item.icon}
                label={item.label}
                onClick={() => onPageChange(item.id)}
              />
            ))}
          </List>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />

        <Box sx={{ px: 3, py: 2.5 }}>
          <Typography variant="caption" sx={{ color: '#9fb1c1' }}>
            Designed by{' '}
            <MuiLink href="#" underline="hover" sx={{ color: '#7fb1ff', fontWeight: 600 }}>
             Joel Valookaran
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </MuiDrawer>
  );
}


