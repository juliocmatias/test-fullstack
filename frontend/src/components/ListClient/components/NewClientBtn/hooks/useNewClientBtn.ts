'use client';

import { useRouter } from 'next/navigation';

export const useNewClientBtn = () => {
  const router = useRouter();

  const handleNavigateToRegister = () => {
    router.push('/register');
  };

  return { handleNavigateToRegister };
};
