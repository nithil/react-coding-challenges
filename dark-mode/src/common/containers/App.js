import React, { useState } from 'react';

import ThemeContext from '../../contexts/theme';

import { themeMode } from '../../constants';

export default function App({ children }) {
  const [mode, toggleMode] = useState(themeMode.LIGHT);

  return <ThemeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeContext.Provider>;
}
