import { useCallback, useContext } from 'react';
import Checkbox from '../../components/Checkbox';
import Textbox from '../../components/Textbox';
import dictionary from '../../config/dictionary';
import {
  Content, PatrocinadorAssemb, PatrocinadorICPI, ProjectImagesPatrocinadores, ProjectPatrocinadores, ProjectPatrocinadoresTitle,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faArrowRightToBracket as loginIcon } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import Login from '../../interfaces/login';
import Offsite from '../../containers/Offside';
import validationLogin from './validation';
import LoadingContextContent from '../../contexts/LoadingContext';
import AssembLogo  from '../../assets/images/AssembleiaLogo.png';
import ICPILogo  from '../../assets/images/ICPILogo.png';
import MenuFlow from '../dashboard/index';
import HeaderNotification from '../notification';

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
        <HeaderNotification/>
        <ProjectPatrocinadores>
          <ProjectPatrocinadoresTitle>Patrocinadores</ProjectPatrocinadoresTitle>
            <ProjectImagesPatrocinadores>
              <PatrocinadorICPI src={ICPILogo}/>
              <PatrocinadorAssemb src={AssembLogo}/>
            </ProjectImagesPatrocinadores>
        </ProjectPatrocinadores>
        <MenuFlow/>
      </Content>
    </Offsite>
  );
}
