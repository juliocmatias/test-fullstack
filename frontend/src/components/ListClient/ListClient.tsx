'use client';

import { maskCpf, maskPhone } from '@/constants';
import { StatusEnum } from '@/enums';

import { CardClient } from '@/components/CardClient';
import { HeaderPage } from '@/components/HeaderPage';

import { NewClientBtn } from './components/NewClientBtn';
import { useListClients } from './hooks';
import * as S from './styles';

export const ListClient = () => {
  const { clients, error, loading } = useListClients();

  if (loading) {
    return <p className="text-primary">Loading...</p>;
  }

  if (error) {
    return <p className="text-primary">Error: {error}</p>;
  }

  return (
    <>
      <S.Container>
        <HeaderPage
          tittle="Listagem de usuários"
          description="Escolha um cliente para visualizar os detalhes."
        />
        <NewClientBtn />
      </S.Container>
      <S.cardListContainer>
        {clients.map((client) => (
          <CardClient
            key={client.id}
            id={client.id ?? ''}
            name={client.name}
            status={client.status as StatusEnum}
            email={client.email}
            cpf={maskCpf(client.cpf)}
            phone={maskPhone(client.phone)}
          />
        ))}
        {!clients.length && <p>Nenhum cliente cadastrado</p>}
        {clients.length > 0 && <p>Total de clientes: {clients.length}</p>}
      </S.cardListContainer>
    </>
  );
};
