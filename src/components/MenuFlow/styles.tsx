import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	z-index: 998;
	position: fixed;
	bottom: 0;
	width: 100vw;
	display: flex;
	align-items: center;
	gap: 10em;
	justify-content: center;
	background-color: ${props => props.theme.color.black};
	padding: .6em;
`;

export const TogglePage = styled.a`
	display: flex;
	flex-direction: column;
	color: ${props => props.theme.color.light_gray};
	text-decoration: none;
	gap: .2em;
`;

export const Icon = styled(FontAwesomeIcon)`
	font-size: 1em;
`;

export const ToggleText = styled.span`
	font-size: .75em;
`;

export const TopContainer = styled.div`
	z-index: 999;
	position: fixed;
	bottom: 0;
	margin-bottom: 0;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 1em;
`;

export const CalendarButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1em;
	border: none;
	outline: none;
	box-shadow: none;
	background-color: ${props => props.theme.color.orange};
	color: ${props => props.theme.color.white};
	border-radius: .7em;
`;

export const CalendarIcon = styled(FontAwesomeIcon)`
	font-size: 1.5em;
`
