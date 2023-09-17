import * as Yup from 'yup';
import dictionary from '../../config/dictionary';

const validationLogin = Yup.object().shape({
  email: Yup.string()
    .email(dictionary.login.validation.email)
    .required(dictionary.login.validation.required),
  password: Yup.string().required(dictionary.login.validation.required),
  rememberMe: Yup.boolean(),
});

export default validationLogin;
