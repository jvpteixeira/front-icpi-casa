import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div<{ move?: number }>`
	background-color: ${props => props.theme.color.dark_gray};
	display: flex;
	width: 100%;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	padding: .7em 1em;

	transform: translateX(${props => props.move + 'px'});
`;

export const Title = styled.span`
	color: ${props => props.theme.color.white};
	font-family: ${props => props.theme.font.segoe};
	font-size: .8em;
	font-weight: 600;
	text-transform: uppercase;
`;

export const Timeline = styled.span`
	color: ${props => props.theme.color.white};
	font-family: ${props => props.theme.font.segoe};
	font-size: .6em;
	padding-left: .8em;
`;

export const Dot = styled.div`
	background-color: ${props => props.theme.color.orange};
	border-radius: 50%;
	width: .6em;
	height: .6em;
`;

export const Description = styled.p`
	color: ${props => props.theme.color.white};
	font-size: .7em;
`;

export const Header = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderComplement = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: .4em;
`;

export const Toggle = styled.button`
	background-color: transparent;
	border: none;
`;

export const Icon = styled(FontAwesomeIcon)`
	color: ${props => props.theme.color.white};
`;
