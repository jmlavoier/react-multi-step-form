import React from 'react';

import Container from 'components/Container';
import Item from 'components/Item';

import ComposeAllForms from 'containers/ComposeAllForms';

import style from './App.sass';

const App = () => (
  <div className={style.app}>
    <Container justifyContent="center" height="100px">
      <Item flexGrow="1" styles={{ textAlign: 'center', paddingTop: '20px', color: '#fff' }}>
        <h1>Multi Step Form</h1>
      </Item>
    </Container>
    <Container justifyContent="center" height="100%">
      <ComposeAllForms />
    </Container>
  </div>
);

export default App;
