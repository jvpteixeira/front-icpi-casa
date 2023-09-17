import { useCallback, useContext } from 'react';
import dictionary from '../../config/dictionary';
import {
  Bee8bBaseboardContainer,
  Bee8bBaseboardSubtitle,
  Bee8bBaseboardTitle,
  Content,
  Form,
  Header,
  HeaderContainer,
  NextButton,
  Partition,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faLock, faMoneyCheck, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import Register from '../../interfaces/register';
import Offsite from '../../containers/Offside';
import validationLogin from './validation';
import LoadingContextContent from '../../contexts/LoadingContext';
import Textbox from '../../components/Textbox';

export default function RegisterPage() {
  const { setLoading } = useContext(LoadingContextContent);

  const formState: Register = {
    owner: '', 
    email: '',
    password: '',
    telephone: '', 
    socialName: '', 
    fantasyName: '', 
    cnpj: '', 
    CEP: '', 
    street: '', 
    neighborhood: '', 
    city: '', 
    country: '', 
    number: ''
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

 
  const doRegister = useCallback((value: Register) => {
    alert(
      `email: ${value.email}
       password: ${value.password}
       owner: ${value.owner}
       telephone: ${value.telephone}
       socialName: ${value.socialName}
       fantasyName: ${value.fantasyName}
       cnpj: ${value.cnpj}
       CEP: ${value.CEP}
       street: ${value.street}
       neighborhood: ${value.neighborhood}
       city: ${value.city}
       country: ${value.country}`
    );
    // doRegister(value) TODO: Implementar tratativas para erros
  }, []);

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
            label={dictionary.register.labelOwner}
            name="owner"
            type="text"
            placeholder={dictionary.register.placeholderOwner}
            value={registerForm.values.owner}
            setValue={registerForm.handleChange}
            error={registerForm.errors.owner}
            icon={faUser} 
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
            label={dictionary.register.labelPassword}
            name="password"
            type="password"
            placeholder={dictionary.register.placeholderPassword}
            isPassword
            value={registerForm.values.password}
            setValue={registerForm.handleChange}
            error={registerForm.errors.password}
            icon={faLock}
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

          <Textbox
            label={dictionary.register.socialName}
            name="socialName"
            type="text"
            placeholder={dictionary.register.placeholderSocialName}
            value={registerForm.values.socialName}
            setValue={registerForm.handleChange}
            error={registerForm.errors.socialName}
            icon={faMoneyCheck}
          />

          <Textbox
            label={dictionary.register.fantasyName}
            name="fantasyName"
            type="text"
            placeholder={dictionary.register.placeholderFantasyName}
            value={registerForm.values.fantasyName}
            setValue={registerForm.handleChange}
            error={registerForm.errors.fantasyName}
            icon={faMoneyCheck}
          />

          <Textbox
            label={dictionary.register.cnpj}
            name="cnpj"
            type="text"
            placeholder={dictionary.register.cnpj}
            value={registerForm.values.cnpj}
            setValue={registerForm.handleChange}
            error={registerForm.errors.cnpj}
            icon={faMoneyCheck}
          />

          <Partition>
            <Textbox
              label={dictionary.register.CEP}
              name="CEP"
              type="text"
              placeholder={dictionary.register.CEP}
              value={registerForm.values.CEP}
              setValue={registerForm.handleChange}
              error={registerForm.errors.CEP}
              icon={faLocationDot}
            />

            <Textbox
              label={dictionary.register.street}
              name="street"
              type="text"
              placeholder={dictionary.register.placeholderStreet}
              value={registerForm.values.street}
              setValue={registerForm.handleChange}
              error={registerForm.errors.street}
              icon={faLocationDot}
            />

            <Textbox
              label={dictionary.register.number}
              name="number"
              type="text"
              placeholder={dictionary.register.placeholderNumber}
              value={registerForm.values.number}
              setValue={registerForm.handleChange}
              error={registerForm.errors.number}
              icon={faLocationDot}
            />

            <Textbox
              label={dictionary.register.neighborhood}
              name="neighborhood"
              type="text"
              placeholder={dictionary.register.placeholderNeighborhood}
              value={registerForm.values.neighborhood}
              setValue={registerForm.handleChange}
              error={registerForm.errors.neighborhood}
              icon={faLocationDot}
            />

            <Textbox
              label={dictionary.register.city}
              name="city"
              type="text"
              placeholder={dictionary.register.placeholderCity}
              value={registerForm.values.city}
              setValue={registerForm.handleChange}
              error={registerForm.errors.city}
              icon={faLocationDot}
            />

            <Textbox
              label={dictionary.register.country}
              name="country"
              type="text"
              placeholder={dictionary.register.placeholderCountry}
              value={registerForm.values.country}
              setValue={registerForm.handleChange}
              error={registerForm.errors.country}
              icon={faLocationDot}
            />
          </Partition>
          <NextButton onClick={handleSubmit}>
            <span>{dictionary.register.save}</span>
          </NextButton>
        </Form>
        <Bee8bBaseboardContainer>
          <Bee8bBaseboardSubtitle>From</Bee8bBaseboardSubtitle>
          <Bee8bBaseboardTitle>BEE8B</Bee8bBaseboardTitle>
        </Bee8bBaseboardContainer>
      </Content>
    </Offsite>
  );
}
