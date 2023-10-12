import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Container, Description, Dot, Header, HeaderComplement, Icon, Timeline, Title, Toggle } from "./styles";
import { Notification } from "../../interfaces/notification/Notification";
import { TouchEvent, useCallback, useState } from "react";
import moment from "moment";

interface NotificationBoxParams extends Notification {
	removeList: () => void | {}
}

export function NotificationBox({
	title,
	description,
	creationDate,
	isNew,
	removeList
} : NotificationBoxParams) {

	const [expand, setExpand] = useState(false);
	const [isDrag, setIsDrag] = useState(false);
	const [initialX, setInitialX] = useState(0);
	const [move, setMove] = useState(0);
	const [show, setShow] = useState(true);

	const getTimeline = useCallback(() => {
		const now = moment();
		const creation = moment(creationDate);
		
		const minutes = now.diff(creation, 'minute');
		if (minutes < 60)
			return 'Há ' + minutes + ` ${minutes > 1 ? 'minutos' : 'minuto'}`;

		const hours = now.diff(creation, 'hour');
		if (hours < 24)
			return 'Há ' + hours + ` ${hours > 1 ? 'horas' : 'hora'}`;
		
		const days = now.diff(creation, 'days');
		if (days < 31)
			return 'Há ' + days + ` ${days > 1 ? 'dias' : 'dia'}`;

		const months = now.diff(creation, 'months');
		if (months < 12)
			return 'Há ' + months + ` ${months > 1 ? 'meses' : 'mês'}`;

		const years = now.diff(creation, 'years');
		return 'Há ' + years + ` ${years > 1 ? 'anos' : 'ano'}`;
	}, [creationDate])

	return (
		<>
			{show && <Container 
				move={move}
				onTouchStart={(e: TouchEvent<HTMLDivElement>) => {
					setExpand(!expand);
					setIsDrag(true);
					setInitialX(e.touches[0].clientX);
				}} 
				onTouchMove={(e: TouchEvent<HTMLDivElement>) => {
					if (isDrag) setMove(e.touches[0].clientX - initialX);
				}}
				onTouchEnd={(e: TouchEvent<HTMLDivElement>) => {
					setIsDrag(false);
					if (move > 200) {
						setShow(false);
						removeList();
					}
					else {
						setMove(0);
					}
				}}>
				<Header>
					<HeaderComplement>
						{isNew && <Dot />}
						<Title>{title}</Title>
						<Timeline>{getTimeline()}</Timeline>
					</HeaderComplement>
					{description.length > 42 && <Toggle>
						<Icon icon={expand ? faChevronUp : faChevronDown} />
					</Toggle>}
				</Header>
				<Description>{(description.length > 42 && !expand) ? description.substring(0, 38) + '...' : description}</Description>
			</Container>}
		</>
	)
}