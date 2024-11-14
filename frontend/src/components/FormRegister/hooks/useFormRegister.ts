'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  maskCpf,
  maskPhone,
  maskCpfRemove,
  maskPhoneRemove
} from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';

import { addClient, editClient, selectClients } from '@/lib/redux';
import { useClientsDispatch, useClientsSelector } from '@/lib/redux/hooks';

import { DataForm, schema } from '../validation';

export const useFormRegister = (id?: string) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm<DataForm>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema)
  });

  const router = useRouter();

  const dispatch = useClientsDispatch();
  const clients = useClientsSelector(selectClients);

  useEffect(() => {
    if (id) {
      const client = clients.find((client) => client.id === id);
      if (client) {
        reset({
          name: client.name,
          email: client.email,
          cpf: maskCpf(client.cpf),
          phone: maskPhone(client.phone),
          status: client.status
        });
      }
    }
  }, [id, clients, reset]);

  const handleSubmitForm = (data: DataForm) => {
    const valid = schema.safeParse(data);
    if (valid.success) {
      const { cpf, phone } = data;
      const clientData = {
        ...data,
        cpf: maskCpfRemove(cpf),
        phone: maskPhoneRemove(phone)
      };

      if (id) {
        dispatch(editClient({ id, client: clientData }));
      } else {
        dispatch(addClient(clientData));
      }

      router.push('/');
    }
  };

  const handleNavigateToHome = () => {
    router.push('/');
  };

  const handleCpfChange = (e: ChangeEvent<HTMLInputElement>) => {
    const maskedCpf = maskCpf(e.target.value);
    setValue('cpf', maskedCpf, { shouldValidate: true });
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const maskedPhone = maskPhone(e.target.value);
    setValue('phone', maskedPhone, { shouldValidate: true });
  };

  return {
    handleNavigateToHome,
    register,
    handleSubmit,
    errors,
    handleSubmitForm,
    handleCpfChange,
    handlePhoneChange
  };
};
