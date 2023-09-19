import { createTheme, useMediaQuery } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 730,
      md: 900,
      lg: 1100,
      xl: 1536,
    },
  },
});

const useDetachScreen = (screen: 'desktop' | 'tablet' | 'mobile') => {
  switch(screen) {
    case 'desktop':
      return useMediaQuery(theme.breakpoints.up('xl'));
    case 'tablet':
      return useMediaQuery(theme.breakpoints.down('lg'));
    case 'mobile':
      return useMediaQuery(theme.breakpoints.down('sm'));

  } 
};

export default useDetachScreen;