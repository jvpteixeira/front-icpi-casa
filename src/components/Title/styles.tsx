import styled from 'styled-components';

interface TitleContainerProps {
  size?: number;
}

interface TitleSpanProps {
  darkMode?: boolean;
}

export const Container = styled.div<TitleContainerProps>`
  display: flex;
  font-size: ${(props) => (props.size ? `${props.size}em` : '2em')};
`;

export const Um = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.color.dark};
`;

export const Bre = styled.span<TitleSpanProps>`
  font-weight: bold;
  color: ${(props) =>
    props.darkMode ? props.theme.color.light : props.theme.color.primary};
`;

export const Lla = styled.span<TitleSpanProps>`
  color: ${(props) =>
    props.darkMode ? props.theme.color.light : props.theme.color.primary};
`;
