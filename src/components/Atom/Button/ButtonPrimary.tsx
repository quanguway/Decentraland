import styled from '@emotion/styled';
import { Button, ButtonProps } from '@mui/material';
import { COLOR_PRIMARY } from '../../../assets/colors';
import { buttonStyle } from './styles';
import MotionTopUp from '../Motion/MotionTopUp';
import Text from '../Text';

type ButtonPrimaryProps = ButtonProps & {
  label: string;
}

const ButtonPrimary = ({
  label = 'Learn more',
  fullWidth = false,
  ...props
} : ButtonPrimaryProps) => {
  return (
    <MotionTopUp fullWidth={fullWidth}>
      <ButtonStyled 
        size='large'
        fullWidth={true}
        sx={{
          ...buttonStyle
        }} {...props}>
        <Text fontSize={'1em'} fontWeight={600}>{label}</Text> 
      </ButtonStyled>
    </MotionTopUp>
  );
};

export default ButtonPrimary;

const ButtonStyled = styled(Button)`
  background-color: ${COLOR_PRIMARY};
  white-space: nowrap;

  &:hover {
    background-color: ${COLOR_PRIMARY};
  }
`;
