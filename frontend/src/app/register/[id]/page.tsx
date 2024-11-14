import { Register } from '@/components/Register';

export default function RegisterById({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <main>
      <Register editClient={true} id={id} />
    </main>
  );
}
