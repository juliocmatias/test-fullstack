'use client';

import { getStatusOptions } from '@/config/statusOptions';

import { ButtonPrimary } from '@/components/ButtonPrimary';
import { ButtonSecondary } from '@/components/ButtonSecondary';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';

import { useFormRegister } from './hooks';
import * as S from './styles';

type FormRegisterProps = {
  id?: string;
};

export const FormRegister = ({ id }: FormRegisterProps) => {
  const {
    handleNavigateToHome,
    errors,
    handleSubmit,
    handleSubmitForm,
    register,
    handleCpfChange,
    handlePhoneChange
  } = useFormRegister(id);

  return (
    <S.FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <S.FormFields>
        <Input
          label="Nome"
          placeholder="Informe seu nome"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="E-mail"
          placeholder="Informe seu e-mail"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label="CPF"
          placeholder="Informe seu CPF"
          {...register('cpf')}
          onChange={handleCpfChange}
          error={errors.cpf?.message}
        />
        <Input
          label="Telefone"
          placeholder="Informe seu telefone"
          {...register('phone')}
          onChange={handlePhoneChange}
          error={errors.phone?.message}
        />
        <Select
          label="Status"
          {...register('status')}
          error={errors.status?.message}
          options={getStatusOptions()}
        />
      </S.FormFields>
      <S.FormActions>
        <ButtonPrimary type="submit">{id ? 'Salvar' : 'Criar'}</ButtonPrimary>
        <ButtonSecondary type="button" onClick={handleNavigateToHome}>
          Voltar
        </ButtonSecondary>
      </S.FormActions>
    </S.FormContainer>
  );
};
