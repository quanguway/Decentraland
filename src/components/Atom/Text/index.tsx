import { Typography, TypographyProps, withStyles } from '@mui/material';

type TextProps = TypographyProps & {
  children: React.ReactNode;
}

const Text = ({children, ...props} : TextProps) => {
  return (
    <Typography {...props} color={'white'}>
      {children}
    </Typography>
  );
};
export default Text;