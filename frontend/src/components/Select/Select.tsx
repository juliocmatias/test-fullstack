import { forwardRef, useId } from 'react';

import * as S from './styles';

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  options: SelectOption[];
  error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, ...props }, ref) => {
    const selectId = useId();

    return (
      <S.StyledContainer>
        <S.StyledLabel htmlFor={selectId}>{label}</S.StyledLabel>
        <S.StyledSelect id={selectId} ref={ref} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.StyledSelect>
        {error && <S.StyledError>{error}</S.StyledError>}
      </S.StyledContainer>
    );
  }
);

Select.displayName = 'Select';
