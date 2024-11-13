import { ButtonPrimary } from '@/components/ButtonPrimary';
import { ButtonSecondary } from '@/components/ButtonSecondary';
import { HeaderPage } from '@/components/HeaderPage';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';

export default function Register() {
  return (
    <main>
      <HeaderPage
        tittle="Novo usuário"
        description="Informe os campos a seguir para criar novo usuário."
      />
      <div>
        <form className="mb-8">
          <div className="my-10">
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
          </div>
          <div className="flex gap-8">
            <ButtonPrimary type="submit">Criar</ButtonPrimary>
            <ButtonSecondary type="button">Voltar</ButtonSecondary>
          </div>
        </form>
      </div>
    </main>
  );
}
