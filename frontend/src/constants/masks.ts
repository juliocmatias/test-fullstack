export const maskCpf = (cpf: string): string => {
  if (!cpf) {
    return '';
  }
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length <= 3) {
    return cpf;
  } else if (cpf.length <= 6) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3)}`;
  } else if (cpf.length <= 9) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6)}`;
  } else {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
  }
};

export const maskPhone = (phone: string): string => {
  if (!phone) {
    return '';
  }

  phone = phone.replace(/\D/g, '');

  if (phone.length <= 2) {
    return phone;
  } else if (phone.length <= 7) {
    return `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
  } else {
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`;
  }
};

export const maskCpfRemove = (cpf: string): string => {
  return cpf.replace(/\D/g, '');
};

export const maskPhoneRemove = (phone: string): string => {
  return phone.replace(/\D/g, '');
};
