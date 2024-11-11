import { Logo } from '@/components/Logo';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />
      </S.Content>
    </S.Container>
  );
};
