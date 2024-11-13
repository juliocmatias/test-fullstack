'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Client } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';

import { addClient } from '@/lib/redux';
import { useClientsDispatch } from '@/lib/redux/hooks';

import { DataForm, schema } from '../validation';

export const useFormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DataForm>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema)
  });

  const router = useRouter();

  const dispatch = useClientsDispatch();

  const handleSubmitForm = (data: DataForm) => {
    const valid = schema.safeParse(data);
    if (valid.success) {
      const id = Math.random().toString(36).substr(2, 9);
      dispatch(addClient({ ...data, id } as Client));

      router.push('/');
    }
  };

  const handleNavigateToHome = () => {
    router.push('/');
  };

  return {
    handleNavigateToHome,
    register,
    handleSubmit,
    errors,
    handleSubmitForm
  };
};
