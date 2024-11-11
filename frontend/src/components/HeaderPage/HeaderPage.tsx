import * as S from './styles';

type HeaderPageProps = {
  tittle: string;
  description: string;
};

export const HeaderPage = ({ tittle, description }: HeaderPageProps) => {
  return (
    <div>
      <S.Title>{tittle}</S.Title>
      <S.Description>{description}</S.Description>
    </div>
  );
};
