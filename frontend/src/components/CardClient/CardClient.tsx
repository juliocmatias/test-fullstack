'use client';

import { useRouter } from 'next/navigation';

import { StatusEnum } from '@/enums';

import { ButtonSecondary } from '@/components/ButtonSecondary';
import { StatusIcon } from '@/components/Icons';

import { mapStatusColors } from './utils';

import * as S from './styles';

type CardClientProps = {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: StatusEnum;
};

export const CardClient = ({
  id,
  name,
  email,
  cpf,
  phone,
  status
}: CardClientProps) => {
  const colorStatus = mapStatusColors[status] || 'gray';

  const router = useRouter();

  const navigateToRegisterClient = () => {
    if (id) {
      router.push(`/register/${id}`);
    }
  };

  return (
    <S.CardClientContainer>
      <S.CardClientInfo>
        <S.CardClientInfoText>{name}</S.CardClientInfoText>
        <S.CardClientInfoSubText>{email}</S.CardClientInfoSubText>
      </S.CardClientInfo>

      <S.CardClientInfo>
        <S.CardClientInfoText>{cpf}</S.CardClientInfoText>
        <S.CardClientInfoSubText>{phone}</S.CardClientInfoSubText>
      </S.CardClientInfo>

      <S.CardClientStatus>
        <StatusIcon size={25} color={colorStatus} weight="fill" />
        <S.CardClientStatusText>{status}</S.CardClientStatusText>
      </S.CardClientStatus>

      <ButtonSecondary type="button" onClick={navigateToRegisterClient}>
        Editar
      </ButtonSecondary>
    </S.CardClientContainer>
  );
};
