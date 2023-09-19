import { ThemeProvider, createTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {

  const theme = createTheme({
    palette:{
      text: {
        primary: '#fff'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Outlet/>
    </ThemeProvider>

  );
};

export default AppLayout;