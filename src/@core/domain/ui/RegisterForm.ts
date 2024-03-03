import Register from '../model/Register';

export default interface RegisterForm {
  name: string;
  age: string;
  email: string;
  phone: string;
}

export const MapToRegister = (form: RegisterForm): Register => {
  return {
    name: form.name,
    age: form.age,
    email: form.email,
    phone: form.phone,
  };
};
