import { StatusEnum } from '@/enums';
import { StatusSelectOption } from '@/types/Status';

export const getStatusOptions = (): StatusSelectOption[] =>
  Object.values(StatusEnum).map((status) => ({
    value: status,
    label: formatStatusLabel(status)
  }));

const formatStatusLabel = (status: StatusEnum) => {
  switch (status) {
    case StatusEnum.STATUS:
      return 'Status';
    case StatusEnum.ACTIVE:
      return 'Ativo';
    case StatusEnum.INACTIVE:
      return 'Inativo';
    case StatusEnum.WAITING_ACTIVATION:
      return 'Aguardando ativação';
    case StatusEnum.DISABLED:
      return 'Desativado';
    default:
      return status;
  }
};
