import React from 'react';

export type TTheme = 'light' | 'dark';

const ThemeContext = React.createContext('light' as TTheme);

export default ThemeContext;
