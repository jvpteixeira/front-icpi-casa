import { Notification } from "../../interfaces/notification/Notification";
import { Container, EmptyNotification, HeaderMenuClearToggle, HeaderMenuNotification, HeaderMenuTitle, NotificationList } from "./styles";
import { NotificationBox } from "../NotificationBox";
import { useMemo, useState } from "react";

export function MenuNotification() {

	const NOTIFICATIONS : Notification[] = [
		{
			title: "OFERTA 50% OFF",
			creationDate: new Date('2023-08-25'),
			description: "Gostaríamos de avisa-lo que amanhã (16/02) teremos 50% OFF em todos serviços, bora fazer um agendamento?",
			isNew: true
		},
		{
			title: "Agendamento",
			creationDate: new Date('2023-08-18'),
			description: " Não se esqueça, seu corte está próximo!!!",
			isNew: false
		}
	];

	const [notifications, setNotifications] = useState(NOTIFICATIONS);

	const renderNotifications = useMemo(() =>  {
		return (
			<NotificationList>
				{notifications.length > 0 
				? notifications.map(notification => 
					<NotificationBox 
						key={notification.title} 
						{...notification} 
						removeList={() => {
							setNotifications(notifications.filter(not => not.title !== notification.title))
						}} />)	 
				: <EmptyNotification>Não há notificações</EmptyNotification>
				}
			</NotificationList>
		)
	}, [notifications])

	return (
		<Container>
			<HeaderMenuNotification>
				<HeaderMenuTitle>NOTIFICAÇÕES</HeaderMenuTitle>
				<HeaderMenuClearToggle onClick={() => setNotifications([])}>LIMPAR TUDO</HeaderMenuClearToggle>
			</HeaderMenuNotification>
			{renderNotifications}
		</Container>
	)
}