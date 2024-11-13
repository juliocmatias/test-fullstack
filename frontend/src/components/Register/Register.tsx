import { FormRegister } from '@/components/FormRegister';
import { HeaderPage } from '@/components/HeaderPage';

type RegisterProps = {
  id?: string;
  editClient: boolean;
};

export const Register = ({ editClient }: RegisterProps) => {
  const title = editClient ? 'Editar usuário' : 'Novo usuário';
  const description = editClient
    ? 'Informe os campos a seguir para editar usuário.'
    : 'Informe os campos a seguir para criar novo usuário.';

  return (
    <>
      <HeaderPage tittle={title} description={description} />
      <FormRegister />
    </>
  );
};
