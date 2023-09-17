import {
  Container,
  Content,
  ErrorMessage,
  Select,
  Label,
  ShowPassword,
} from './styles';
import { useState, useCallback, ChangeEvent, ChangeEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

interface TextboxParams {
  label?: string;
  id?: string;
  isPassword?: boolean;
  size?: number;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute;
  value: any;
  setValue: (e: React.ChangeEvent<any>) => void;
  name?: string;
  icon?: IconDefinition;
  children: React.ReactNode;
}

export default function SelectBox({
  label,
  id,
  error,
  value,
  setValue,
  name,
  icon,
  children,
}: TextboxParams) {
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<any>) => {
      setValue(event);
    },
    [setValue]
  );

  return (
    <Container id={`${id}-container`}>
      <Label id={`${id}-label`}>{label ?? ''}</Label>
      <Content>
        {icon && (
          <FontAwesomeIcon
            style={{ position: 'absolute', top: '15px', left: '15px' }}
            color="#fff"
            icon={icon}
          />
        )}
        <Select
          name={name}
          id={id}
          value={value}
          onChange={(event) => handleInputChange(event)}
        >
          {children}
        </Select>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Content>
    </Container>
  );
}
