import { Container } from './styles';

interface IProps {
  onClick?: any;
  children: any;
  responsiveness?: boolean | undefined;
  disabled?: boolean;
  styles?: 1 | null;
  type?: 'submit' | 'reset' | 'button' | undefined;
}
const defaultProps = {
  onClick: null,
  responsiveness: false,
  disabled: false,
  styles: null,
  type: undefined,
};

const Button: React.FC<IProps> = ({
  onClick,
  children,
  responsiveness,
  disabled,
  styles,
  type,
}: IProps) => {
  return (
    <Container
      responsiveness={responsiveness}
      disabled={disabled}
      onClick={onClick}
      styles={styles}
      type={type}
    >
      {children}
    </Container>
  );
};

Button.defaultProps = defaultProps;

export default Button;
