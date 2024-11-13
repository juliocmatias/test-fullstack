'use client';

import { useNewClientBtn } from './hooks';
import * as S from './styles';

export const NewClientBtn = () => {
  const { handleNavigateToRegister } = useNewClientBtn();

  return (
    <S.NewClientBtn onClick={handleNavigateToRegister}>
      Novo cliente
    </S.NewClientBtn>
  );
};
