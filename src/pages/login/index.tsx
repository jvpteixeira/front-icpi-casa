import { useCallback, useContext } from 'react';
import Checkbox from '../../components/Checkbox';
import Textbox from '../../components/Textbox';
import dictionary from '../../config/dictionary';
import {
  Bee8bBaseboardContainer,
  Bee8bBaseboardSubtitle,
  Bee8bBaseboardTitle,
  Content,
  DoNotHaveAccount,
  DoNotHaveAccountLink,
  ForgetPassword,
  Form,
  Header,
  HeaderContainer,
  LoginButton,
  Subheader,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faArrowRightToBracket as loginIcon } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import Login from '../../interfaces/login';
import Offsite from '../../containers/Offside';
import validationLogin from './validation';
import LoadingContextContent from '../../contexts/LoadingContext';

export default function LoginPage() {
  const { setLoading } = useContext(LoadingContextContent);

  const formState: Login = {
    email: '',
    password: '',
    rememberMe: false
  };

  const loginForm = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    initialValues: formState,
    validationSchema: validationLogin,
    onSubmit: (value: Login) => {
      setLoading(true);
      doLogin(value);
    },
  });

  const doLogin = useCallback((value: Login) => {
    alert(
      `email: ${value.email} password: ${value.password} rememberMe: ${value.rememberMe}`
    );
  }, []);

  const handleCheckbox = useCallback(
    (value: boolean) => {
      loginForm.setFieldValue('rememberMe', value);
    },
    [loginForm]
  );

  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      loginForm.submitForm();
    },
    [loginForm]
  );

  return (
    <Offsite>
      <Content>
        <HeaderContainer>
          <Header>{dictionary.login.welcomeTitle}</Header>
          <Subheader>{dictionary.login.welcomeSubtitle}</Subheader>
        </HeaderContainer>
        <Form>
          <Textbox
            label={dictionary.login.labelEmail}
            name="email"
            type="text"
            placeholder={dictionary.login.placeholderEmail}
            value={loginForm.values.email}
            setValue={loginForm.handleChange}
            error={loginForm.errors.email}
            icon={faEnvelope}
          />
          <Textbox
            label={dictionary.login.labelPassword}
            name="password"
            type="password"
            placeholder={dictionary.login.placeholderPassword}
            isPassword
            value={loginForm.values.password}
            setValue={loginForm.handleChange}
            error={loginForm.errors.password}
            icon={faLock}
          />
          <Checkbox
            label={dictionary.login.rememberPassword}
            name="rememberMe"
            value={loginForm.values.rememberMe}
            setValue={handleCheckbox}
          />
          <LoginButton onClick={handleSubmit}>
            <span>{dictionary.login.enter}</span>
            <FontAwesomeIcon icon={loginIcon} />
          </LoginButton>
          <ForgetPassword to="/">
            {dictionary.login.forgetPassword}
          </ForgetPassword>
          <DoNotHaveAccount>
            {dictionary.login.doNotHaveAccount}
            <DoNotHaveAccountLink to="/registre-se">
              {dictionary.login.clickHere}
            </DoNotHaveAccountLink>
          </DoNotHaveAccount>
        </Form>
        <Bee8bBaseboardContainer>
          <Bee8bBaseboardSubtitle>From</Bee8bBaseboardSubtitle>
          <Bee8bBaseboardTitle>BEE8B</Bee8bBaseboardTitle>
        </Bee8bBaseboardContainer>
      </Content>
    </Offsite>
  );
}
