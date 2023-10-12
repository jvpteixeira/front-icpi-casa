import styled, { keyframes } from "styled-components";

const motion = keyframes`
	from {
		transform: translateY(100%);
	}
	to {
		transform: translateY(0);
	}
`;

export const Container = styled.div`
	z-index: 998;
	position: fixed;
	bottom: 0;
	width: 100vw;
	background-color: rgba(0, 0, 0, .9);
	height: 80vh;
	animation: ${motion} .3s linear;
	border-radius: 1em 1em 0 0;
	display: flex;
	flex-direction: column;
	padding: 1em;
	gap: 1.5em;
`;

export const HeaderMenuNotification = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const HeaderMenuTitle = styled.span`
	color: ${props => props.theme.color.orange};
	font-family: ${props => props.theme.font.rufina};
	letter-spacing: 1px;
	font-weight: 600;
	font-size: .6em;
`;

export const HeaderMenuClearToggle = styled.span`
	color: ${props => props.theme.color.white};
	font-family: ${props => props.theme.font.rufina};
	letter-spacing: 1px;
	font-size: .6em;
	font-weight: 300;
`;

export const NotificationList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1em;
	overflow-y: auto;
	overflow-x: hidden;
	padding-bottom: 10em;
`;

export const EmptyNotification = styled.span`
	color: ${props => props.theme.color.white};
	font-family: ${props => props.theme.font.rufina};
`;
