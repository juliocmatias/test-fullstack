'use client';

import { ButtonPrimary } from '@/components/ButtonPrimary';
import { ButtonSecondary } from '@/components/ButtonSecondary';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';

import { useFormRegister } from './hooks';
import * as S from './styles';

export const FormRegister = () => {
  const { handleNavigateToHome } = useFormRegister();

  return (
    <S.FormContainer>
      <S.FormFields>
        <Input label="Nome" placeholder="Informe seu nome" />
        <Input label="E-mail" placeholder="Informe seu e-mail" />
        <Input label="CPF" placeholder="Informe seu CPF" />
        <Input label="Telefone" placeholder="Informe seu telefone" />
        <Select
          label="Status"
          options={[
            { label: 'Status', value: '' },
            { label: 'Ativo', value: 'ativo' },
            { label: 'Inativo', value: 'inativo' },
            { label: 'Aguardando ativação', value: 'aguardando_ativacao' },
            { label: 'Desativado', value: 'desativado' }
          ]}
        />
      </S.FormFields>
      <S.FormActions>
        <ButtonPrimary type="submit">Criar</ButtonPrimary>
        <ButtonSecondary type="button" onClick={handleNavigateToHome}>
          Voltar
        </ButtonSecondary>
      </S.FormActions>
    </S.FormContainer>
  );
};
