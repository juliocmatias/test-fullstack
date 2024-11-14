'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  maskCpf,
  maskPhone,
  maskCpfRemove,
  maskPhoneRemove
} from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';

import { addClient } from '@/lib/redux';
import { useClientsDispatch } from '@/lib/redux/hooks';

import { DataForm, schema } from '../validation';

export const useFormRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm<DataForm>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema)
  });

  const cpf = watch('cpf');
  const phone = watch('phone');

  const router = useRouter();

  const dispatch = useClientsDispatch();

  const handleSubmitForm = (data: DataForm) => {
    const valid = schema.safeParse(data);
    if (valid.success) {
      const { cpf, phone } = data;
      const newClient = {
        ...data,
        cpf: maskCpfRemove(cpf),
        phone: maskPhoneRemove(phone)
      };

      dispatch(addClient(newClient));

      router.push('/');
    }
  };

  const handleNavigateToHome = () => {
    router.push('/');
  };

  useEffect(() => {
    setValue('cpf', maskCpf(cpf));
    setValue('phone', maskPhone(phone));
  }, [cpf, phone, setValue]);

  return {
    handleNavigateToHome,
    register,
    handleSubmit,
    errors,
    handleSubmitForm
  };
};
