import { forwardRef } from 'react';

import * as S from './styles';

type ButtonSecondaryProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSecondary = forwardRef<
  HTMLButtonElement,
  ButtonSecondaryProps
>(({ children, ...props }, ref) => {
  return (
    <S.ButtonSecondary ref={ref} {...props}>
      {children}
    </S.ButtonSecondary>
  );
});

ButtonSecondary.displayName = 'ButtonSecondary';
