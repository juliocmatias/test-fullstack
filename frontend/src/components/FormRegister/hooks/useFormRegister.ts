'use client';

import { useRouter } from 'next/navigation';

export const useFormRegister = () => {
  const router = useRouter();

  const handleNavigateToHome = () => {
    router.push('/');
  };

  return {
    handleNavigateToHome
  };
};
