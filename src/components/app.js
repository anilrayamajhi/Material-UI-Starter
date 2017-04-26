import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Button from "./Button";

const App = () => (
  <MuiThemeProvider>
    <div>
        <h1>Nymphetamine</h1>
        <Button />
    </div>

  </MuiThemeProvider>
);

export default App;
