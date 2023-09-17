import Register from '../model/Register';

export default interface RegisterForm {
  name: string;
  email: string;
  password: string;
  cnpj: string;
  establishmentType: string;
  phone: string;
}

export const MapToRegister = (form: RegisterForm): Register => {
  return {
    name: form.name,
    email: form.email,
    password: form.password,
    cnpj: form.cnpj,
    establishmentType: form.establishmentType,
    phone: form.phone,
  };
};
