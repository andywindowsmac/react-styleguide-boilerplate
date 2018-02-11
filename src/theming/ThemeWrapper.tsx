import * as React from 'react';

import { ThemeProvider, colorsMap } from '~/theming';

interface ThemeWrapperProps {
  children: React.ReactChild;
}

interface ThemeWrapperState {}

class ThemeWrapper extends React.Component<
  ThemeWrapperProps,
  ThemeWrapperState
> {
  public render(): JSX.Element {
    return (
      <ThemeProvider theme={{ colors: { ...colorsMap } }}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export default ThemeWrapper;
