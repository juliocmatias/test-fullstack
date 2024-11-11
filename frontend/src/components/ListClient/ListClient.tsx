import { StatusEnum } from '@/enums';

import { CardClient } from '@/components/CardClient';
import { HeaderPage } from '@/components/HeaderPage';

import { NewClientBtn } from './components/NewClientBtn';
import * as S from './styles';

export const ListClient = () => {
  return (
    <>
      <S.Container>
        <HeaderPage
          tittle="Listagem de usuários"
          description="Escolha um cliente para visualizar os detalhes."
        />
        <NewClientBtn />
      </S.Container>
      <div className="mb-8 flex flex-col gap-5">
        <CardClient
          name={'John Doe'}
          email={'john_doe@test.com'}
          cpf={'123.123.123-12'}
          phone={'(11) 12345-1234'}
          status={StatusEnum.ACTIVE}
        />
        <CardClient
          name={'John Doe'}
          email={'john_doe@test.com'}
          cpf={'123.123.123-12'}
          phone={'(11) 12345-1234'}
          status={StatusEnum.INACTIVE}
        />
        <CardClient
          name={'John Doe'}
          email={'john_doe@test.com'}
          cpf={'123.123.123-12'}
          phone={'(11) 12345-1234'}
          status={StatusEnum.WAITING_ACTIVATION}
        />
        <CardClient
          name={'John Doe'}
          email={'john_doe@test.com'}
          cpf={'123.123.123-12'}
          phone={'(11) 12345-1234'}
          status={StatusEnum.DISABLED}
        />
      </div>
    </>
  );
};
