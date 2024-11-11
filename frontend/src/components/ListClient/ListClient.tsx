import { HeaderPage } from '@/components/HeaderPage';
import { NewClientBtn } from '@/components/ListClient/components/NewClientBtn';

import * as S from './styles';

export const ListClient = () => {
  return (
    <S.Container>
      <HeaderPage
        tittle="Listagem de usuários"
        description="Escolha um cliente para visualizar os detalhes."
      />
      <NewClientBtn />
    </S.Container>
  );
};
