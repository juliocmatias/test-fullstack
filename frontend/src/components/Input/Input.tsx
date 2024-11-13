import { forwardRef, useId } from 'react';

import * as S from './styles';

type InputProps = {
  label: string;
  placeholder?: string;
  type?: string; // Adiciona uma prop "type"
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, type = 'text', error, ...props }, ref) => {
    const inputId = useId();

    return (
      <S.StyledContainer>
        <S.StyledLabel htmlFor={inputId}>{label}</S.StyledLabel>
        <S.StyledInput
          id={inputId}
          type={type} // Define o tipo de input
          placeholder={placeholder}
          ref={ref} // Passa a referência para o input
          {...props} // Outros props que venham do componente pai
        />
        {error && <S.StyledError>{error}</S.StyledError>}
      </S.StyledContainer>
    );
  }
);

Input.displayName = 'Input';
