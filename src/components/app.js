import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Button from "./Button";

const App = () => (
  <MuiThemeProvider>
    <Button />
  </MuiThemeProvider>
);

export default App;
