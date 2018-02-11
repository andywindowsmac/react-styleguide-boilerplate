import * as React from 'react';
import styled from '~/theming';

const P = styled.p`
  color: ${props => props.theme.colors.primaryColor};
  font-size: 40px;
`;

interface TextProps {
  children: React.ReactChild | React.ReactChild[] | string;
}

const Text = (props: TextProps) => <P {...props}>{props.children}</P>;

export default Text;
