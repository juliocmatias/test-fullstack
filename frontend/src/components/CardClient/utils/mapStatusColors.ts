import { StatusEnum } from '@/enums';

export const mapStatusColors: Record<StatusEnum, string> = {
  [StatusEnum.ACTIVE]: 'green',
  [StatusEnum.INACTIVE]: 'red',
  [StatusEnum.WAITING_ACTIVATION]: 'yellow',
  [StatusEnum.DISABLED]: 'gray'
};
