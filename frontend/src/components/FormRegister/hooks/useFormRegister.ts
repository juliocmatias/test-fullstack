'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

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

  const handleSubmitForm = (data: DataForm) => {
    console.log(data);
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
