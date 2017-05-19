import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridListExampleComplex from './GridListExampleComplex';

import Button from "./Button";

const App = () => (
  <MuiThemeProvider>
    <div>
        <h1 className="text-center">Nymphetamine</h1>
        <GridListExampleComplex />
        <br />
        <div className="text-right"><Button /></div>
        <br /><br />
    </div>

  </MuiThemeProvider>
);

export default App;
