import { useCallback, useContext, useState } from 'react';
import dictionary from '../../config/dictionary';
import {
  AddPhotosButton,
  Bee8bBaseboardContainer,
  Bee8bBaseboardSubtitle,
  Bee8bBaseboardTitle,
  CheckBoxContainer,
  Content,
  Form,
  Header,
  HeaderContainer,
  ClientContainer,
  NextButton,
  PhotoSelectionContainer,
  FinalClient,
  FinalClientImage,
  FinalClientName,
} from './styles';
import { faCalendar, faEnvelope, faLocationDot, faLock, faMoneyCheck, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import Offsite from '../../containers/Offside';
import validationLogin from './validation';
import LoadingContextContent from '../../contexts/LoadingContext';
import Textbox from '../../components/Textbox';
import Painel from '../../interfaces/painel';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Checkbox from '../../components/Checkbox';
import SelectBox from '../../components/Selectbox';
import ClientsPhotos from '../../interfaces/clientsPhotos';

export default function ClientsPhotosPage() {
  const { setLoading } = useContext(LoadingContextContent);

  const formState: ClientsPhotos = {
    clientNameOrCpf: '',
    linkImageToService: false,
    linkPhotoWithLastSchedule: false,
    photoDate: ''
  };

  const filterForm = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    initialValues: formState,
    validationSchema: validationLogin,
    onSubmit: (value: ClientsPhotos) => {
      setLoading(true);
      setLoading(false);
    },
  });

  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      filterForm.submitForm();
    },
    [filterForm]
  );
  
  const [service, setService] = useState('');
    
  const services = [
    { value: 'Dreads mid size 1', label: 'Dreads mid size 1' },
    { value: 'Dreads mid size 2', label: 'Dreads mid size 2' },
    { value: 'Dreads mid size 3', label: 'Dreads mid size 3' },
    // Adicione mais países conforme necessário
  ];

  const handleServiceChange = (event: any) => {
    setService(event.target.value);
  };

  const finalClientMock =
  {
    id: 99,
    image: 'https://64.media.tumblr.com/6ca54b4d49fa0b6713bb2504797939db/tumblr_inline_pchd6mN52X1vzmbej_1280.jpg',
    name: 'EDGAR'
  }

	const [finalClient, setFinalClient] = useState<any>(finalClientMock);

  return (
    <Offsite>
      <Content>
        <HeaderContainer>
          <Header>{dictionary.clientsPhotos.welcomeTitle}</Header>
        </HeaderContainer>
        <Form>
          <PhotoSelectionContainer>
            <AddPhotosButton onClick={() => {}}>
              <span>{dictionary.clientsPhotos.addPhotos}</span>
            </AddPhotosButton>
          </PhotoSelectionContainer>
          
          <SelectBox
              label="Selecione um Serviço"
              id="service"
              value={service}
              setValue={handleServiceChange}
            >
            {services.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectBox>
          
          <ClientContainer>
            <Textbox
              label={dictionary.clientsPhotos.labelClientNameOrCPF}
              name="clientNameOrCpf"
              placeholder={dictionary.clientsPhotos.labelClientNameOrCPF}
              value={filterForm.values.clientNameOrCpf}
              setValue={filterForm.handleChange}
              error={filterForm.errors.clientNameOrCpf}
              icon={faMoneyCheck} 
            />
            <FinalClient key={"Thomas tetzner"} onClick={() => setFinalClient(finalClient)}>
              <FinalClientImage src={finalClient.image} selected={true}/>
              <FinalClientName>Edgar Teixeira</FinalClientName>
            </FinalClient>
          </ClientContainer>
          
          <CheckBoxContainer>
            <Checkbox
              label={dictionary.clientsPhotos.checkBoxPublishAtGalery}
              name="checkBoxPublishAtGalery"
              value={true}
              setValue={() => {}}
            />

            <Checkbox
              label={dictionary.clientsPhotos.checkBoxLinkWithLastSchedule}
              name="checkBoxLinkWithLastSchedule"
              value={true}
              setValue={() => {}}
            />
          </CheckBoxContainer>

          <Textbox
            label={dictionary.clientsPhotos.labelDatePhoto}
            name="photoDate"
            type="date"
            placeholder={dictionary.clientsPhotos.labelDatePhoto}
            value={filterForm.values.photoDate}
            setValue={filterForm.handleChange}
            error={filterForm.errors.photoDate}
            icon={faCalendar}
          />
          <NextButton onClick={handleSubmit}>
            <span>{dictionary.clientsPhotos.buttonSendImages}</span>
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
