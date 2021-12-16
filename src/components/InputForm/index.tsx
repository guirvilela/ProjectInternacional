import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  FormErrorMessage,
  InputProps as ChakraInputProps,
  useColorMode,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...props },
  ref,
) => {
  const { colorMode } = useColorMode();

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="blue.400"
        bgColor={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
        variant="filled"
        size="lg"
        ref={ref}
        _hover={{
          bgColor: colorMode === 'dark' ? 'gray.700' : 'gray.400',
        }}
        {...props}
      />

      {!!error && <FormErrorMessage> {error.message} </FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
