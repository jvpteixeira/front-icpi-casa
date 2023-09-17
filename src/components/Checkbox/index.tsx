import { useCallback } from 'react';
import { Container, Custom, Box, Input, Text, Icon } from './styles';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface CheckboxParams {
  value: boolean;
  setValue: (value: boolean) => void | {};
  label?: string;
  name?: string;
}

export default function Checkbox({
  value,
  setValue,
  label,
  name,
}: CheckboxParams) {
  const handleCheckboxChange = useCallback(() => {
    setValue(!value);
  }, [setValue, value]);

  return (
    <Container>
      <Box onClick={handleCheckboxChange}>
        <Input name={name} onChange={handleCheckboxChange} checked={value} />
        <Custom checked={value}>
          <Icon icon={faCheck} checked={value} />
        </Custom>
      </Box>
      <Text>{label ?? 'Label'}</Text>
    </Container>
  );
}
