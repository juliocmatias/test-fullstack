import { User } from '@/components/Icons';

import * as S from './styles';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <S.Content>
        <User size={25} weight="bold" color="black" />
        <S.Title>Painel de Clientes</S.Title>
      </S.Content>
      {children}
    </S.Container>
  );
};
