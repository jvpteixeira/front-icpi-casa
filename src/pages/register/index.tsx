import { useCallback, useContext } from 'react';
import dictionary from '../../config/dictionary';
import {
  Content,
  Form,
  Header,
  HeaderContainer,
  NextButton,
  StyledLink,
} from './styles';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import Register from '../../interfaces/register';
import Offsite from '../../containers/Offside';
import validationLogin from './validation';
import LoadingContextContent from '../../contexts/LoadingContext';
import Textbox from '../../components/Textbox';
import PostColaborator from '../../@core/application/colaborator/postColaborator';

export default function RegisterPage() {
  const { setLoading } = useContext(LoadingContextContent);

    const postColaborator = new PostColaborator();

    const doRegister = async (value: Register) => {
      try {
        // Chama o método execute da instância de PostColaborator e passa os dados do registro
        const response = await postColaborator.execute(["3950c980-bf61-4a40-badf-f5425ac42db0", value.name, value.age, value.email, value.telephone]);
        console.log('Dados enviados com sucesso:', response.data);
        // Aqui você pode adicionar tratamentos adicionais conforme necessário
      } catch (error) {
        console.error('Ocorreu um erro ao enviar os dados:', error);
        // Aqui você pode adicionar tratamentos para erros de requisição
      }
    };



  const formState: Register = {
    name: '', 
    age: '',
    email: '',
    telephone: '',
  };

  const registerForm = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    initialValues: formState,
    validationSchema: validationLogin,
    onSubmit: (value: Register) => {
      setLoading(true);
      doRegister(value);
      setLoading(false);
    },
  });

 
  

  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      registerForm.submitForm();
    },
    [registerForm]
  );

  return (
    <Offsite>
      <Content>
        <HeaderContainer>
          <Header>{dictionary.register.welcomeTitle}</Header>
        </HeaderContainer>
        <Form>
          <Textbox
            label={dictionary.register.labelName}
            name="name"
            type="text"
            placeholder={dictionary.register.placeholderName}
            value={registerForm.values.name}
            setValue={registerForm.handleChange}
            error={registerForm.errors.name}
            icon={faUser} 
          />

          <Textbox
            label={dictionary.register.labelAge}
            name="age"
            type="text"
            placeholder={dictionary.register.placeholderAge}
            value={registerForm.values.age}
            setValue={registerForm.handleChange}
            error={registerForm.errors.age}
            icon={faPhone}
          />

          <Textbox
            label={dictionary.register.labelEmail}
            name="email"
            type="text"
            placeholder={dictionary.register.placeholderEmail}
            value={registerForm.values.email}
            setValue={registerForm.handleChange}
            error={registerForm.errors.email}
            icon={faEnvelope}
          />
          
          <Textbox
            label={dictionary.register.labelTelephone}
            name="telephone"
            type="text"
            placeholder={dictionary.register.placeholderTelephone}
            value={registerForm.values.telephone}
            setValue={registerForm.handleChange}
            error={registerForm.errors.telephone}
            icon={faPhone}
          />

          <NextButton onClick={handleSubmit}>
            <StyledLink to="/confirm">
              <span>{dictionary.register.save}</span>
            </StyledLink>
          </NextButton>
        </Form>
      </Content>
    </Offsite>
  );
}
