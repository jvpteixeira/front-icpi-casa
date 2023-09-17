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
  MetricsComponent,
  MetricsContainer,
  MetricsLabel,
  MetricsSection,
  NextButton,
  PieComponent,
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

export default function PainelPage() {
  const { setLoading } = useContext(LoadingContextContent);

  const formState: Painel = {
    dateEnd: '', 
    dateStart: '',
  };

  const filterForm = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    initialValues: formState,
    validationSchema: validationLogin,
    onSubmit: (value: Painel) => {
      setLoading(true);
      doFilter(value);
      setLoading(false);
    },
  });

 
  const doFilter = useCallback((value: Painel) => {
    alert(
      `dateStart: ${value.dateStart}
       dateEnd: ${value.dateEnd}`
    );
    // doFilter(value) TODO: Implementar tratativas para erros
  }, []);

  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      filterForm.submitForm();
    },
    [filterForm]
  );

  const data = [
    { name: 'Degradê', value: 400 },
    { name: 'Militar', value: 300 },
    { name: 'Undercut', value: 300 },
    { name: 'Pompadour', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, value }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
    value: any;
  }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fontSize={15} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {data[index].name} ({`${(percent * 100).toFixed(0)}%`})
        </text>
      );
    };
  

  return (
    <Offsite>
      <Content>
        <HeaderContainer>
          <Header>{dictionary.painel.welcomeTitle}</Header>
        </HeaderContainer>
        <Form>
          <Textbox
            label={dictionary.painel.labelDateStart}
            name="dateStart"
            type="date"
            placeholder={dictionary.painel.dateStart}
            value={filterForm.values.dateStart}
            setValue={filterForm.handleChange}
            error={filterForm.errors.dateStart}
            icon={faCalendar} 
          />
          <Textbox
            label={dictionary.painel.labelDateEnd}
            name="dateEnd"
            type="date"
            placeholder={dictionary.painel.dateEnd}
            value={filterForm.values.dateEnd}
            setValue={filterForm.handleChange}
            error={filterForm.errors.dateEnd}
            icon={faCalendar}
          />
          <NextButton onClick={handleSubmit}>
            <span>{dictionary.painel.filter}</span>
          </NextButton>
        </Form>
        <MetricsContainer>
          <MetricsSection>
            <MetricsComponent>
              {`R$ 890,00`}
              <MetricsLabel>
                Faturamento
              </MetricsLabel>
            </MetricsComponent>
            <MetricsComponent>
              {32}
              <MetricsLabel>
                Agendamentos
              </MetricsLabel>
            </MetricsComponent>
          </MetricsSection>
          <MetricsSection>
            <MetricsComponent>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </MetricsComponent>
          </MetricsSection>
        </MetricsContainer>
        <Bee8bBaseboardContainer>
          <Bee8bBaseboardSubtitle>From</Bee8bBaseboardSubtitle>
          <Bee8bBaseboardTitle>BEE8B</Bee8bBaseboardTitle>
        </Bee8bBaseboardContainer>
      </Content>
    </Offsite>
  );
}
