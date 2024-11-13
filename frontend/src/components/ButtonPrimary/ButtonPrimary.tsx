import { forwardRef } from 'react';

import * as S from './styles';

type ButtonPrimaryProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({ children, ...props }, ref) => {
    return (
      <S.ButtonPrimary ref={ref} {...props}>
        {children}
      </S.ButtonPrimary>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';
