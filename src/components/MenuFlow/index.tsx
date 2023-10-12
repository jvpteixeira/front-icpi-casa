import { faCalendar, faCalendarAlt, faClose, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { CalendarButton, CalendarIcon, Container, Icon, TogglePage, ToggleText, TopContainer } from "./styles";
import { MenuNotification } from "../MenuNotification";
import { useState } from "react";

export default function MenuFlow() {

	const [notification, setNotification] = useState(false);

	return (
		<>
		{notification && <MenuNotification />}
			<Container>
				<TogglePage href="/shop">
					<Icon icon={faHouse} />
					<ToggleText>Início</ToggleText>
				</TogglePage>
				<TogglePage href="/user">
					<Icon icon={faUser} />
					<ToggleText>Perfil</ToggleText>
				</TogglePage>
			</Container>
			<TopContainer>
				<CalendarButton onClick={() => setNotification(!notification)}>
					<CalendarIcon icon={notification ? faClose : faCalendarAlt} />
				</CalendarButton>
			</TopContainer>
		</>
	)
}