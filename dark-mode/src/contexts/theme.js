import { createContext } from 'react';

import { themeMode } from '../constants';

const ThemeContext = createContext({ mode: themeMode.LIGHT, toggleMode: () => {} });

export default ThemeContext;
