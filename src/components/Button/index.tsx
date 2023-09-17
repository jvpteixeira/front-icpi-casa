import { ButtonStyle } from './styles';

interface ButtonParams {
  children: React.ReactNode;
  onClick?: () => void;
  colorType: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  width?: string | number;
}
export default function Button(props: ButtonParams) {
  return (
    <ButtonStyle
      style={{ width: props.width ?? '100%' }}
      type={props.type ? props.type : 'button'}
      colorType={props.colorType}
    >
      {props?.children}
    </ButtonStyle>
  );
}
