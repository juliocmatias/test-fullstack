import * as S from './styles';

type ButtonPrimaryProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonPrimary = ({ children, ...props }: ButtonPrimaryProps) => {
  return <S.ButtonPrimary {...props}>{children}</S.ButtonPrimary>;
};
