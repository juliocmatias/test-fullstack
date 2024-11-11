import { StatusEnum } from '@/enums';

import { StatusIcon } from '@/components/Icons';

import { mapStatusColors } from './utils';

import * as S from './styles';

type CardClientProps = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: StatusEnum;
};

export const CardClient = ({
  name,
  email,
  cpf,
  phone,
  status
}: CardClientProps) => {
  const colorStatus = mapStatusColors[status] || 'gray';
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

      <div>
        <button className="rounded border border-primaryButton bg-white px-8 py-1 text-primaryButton transition hover:bg-primaryButton hover:text-white">
          Editar
        </button>
      </div>
    </S.CardClientContainer>
  );
};