import * as S from './styles';

type ButtonSecondaryProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSecondary = ({
  children,
  ...props
}: ButtonSecondaryProps) => {
  return <S.ButtonSecondary {...props}>{children}</S.ButtonSecondary>;
};
