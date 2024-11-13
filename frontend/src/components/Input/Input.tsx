import { forwardRef, useId } from 'react';

import * as S from './styles';

type InputProps = {
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, type = 'text', error, ...props }, ref) => {
    const inputId = useId();

    return (
      <S.StyledContainer>
        <S.StyledLabel htmlFor={inputId} $hasError={!!error}>
          {label}
        </S.StyledLabel>
        <S.StyledInput
          id={inputId}
          type={type}
          placeholder={placeholder}
          ref={ref}
          $hasError={!!error}
          {...props}
        />
        {error && <S.StyledError>{error}</S.StyledError>}
      </S.StyledContainer>
    );
  }
);

Input.displayName = 'Input';
