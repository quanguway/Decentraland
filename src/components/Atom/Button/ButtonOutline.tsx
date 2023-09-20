import styled from '@emotion/styled';
import { Button, ButtonProps } from '@mui/material';
import { COLOR_TEXT } from '../../../assets/colors';
import { buttonStyle } from './styles';

type ButtonOutlineProps = ButtonProps & {
  label: string;
}

const ButtonOutline = ({
  label = 'Learn more',
  ...props
} : ButtonOutlineProps) => {
  return (
  <ButtonStyled 
    variant='outlined'
    size='small'
    sx={{
    ...buttonStyle
  }} {...props}>
    {label}
  </ButtonStyled>
  );
};

export default ButtonOutline;

const ButtonStyled = styled(Button)`
  border-color: ${COLOR_TEXT};
  &:hover {
    border-color: ${COLOR_TEXT};
  }
`;
