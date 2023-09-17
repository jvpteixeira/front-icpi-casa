import {
  Container,
  Content,
  ErrorMessage,
  Input,
  Label,
  ShowIcon,
  ShowPassword,
} from './styles';
import { useState, useCallback, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface TextboxParams {
  label?: string;
  id?: string;
  isPassword?: boolean;
  size?: number;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  setValue?: (e: ChangeEvent<any>) => void;
  name?: string;
  icon?: any;
}

export default function Textbox({
  label,
  id,
  isPassword,
  placeholder,
  size,
  error,
  disabled,
  type,
  value,
  setValue,
  name,
  icon
}: TextboxParams) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setShowPassword(!showPassword);
    },
    [showPassword]
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (setValue) setValue(event);
    },
    [setValue]
  );

  return (
    <Container id={`${id}-container`}>
      <Content>
        <Input
          name={name}
          id={id}
          placeholder={placeholder ?? ''}
          type={showPassword ? 'text' : type ?? 'text'}
          size={size}
          showPassword={isPassword}
          disabled={disabled}
          value={value}
          onChange={handleInputChange}
        >
        </Input>
        {isPassword && (
          <ShowPassword id={`${id ?? 'out'}-button`} onClick={togglePassword}>
            <FontAwesomeIcon
              id={`${id ?? 'out'}-icon`}
              icon={showPassword ? faEye : faEyeSlash}
            />
          </ShowPassword>
        )}
        {icon != undefined && (
          <ShowIcon id={`${id ?? 'out'}-button`} onClick={togglePassword}>
            <FontAwesomeIcon
              icon={icon}
            />
          </ShowIcon>
        )}
        {error && (
          <ErrorMessage showPassword={isPassword}>{error}</ErrorMessage>
        )}
      </Content>
    </Container>
  );
}
