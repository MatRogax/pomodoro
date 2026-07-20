import React from 'react';
import './styles/global.css';

import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

const App: React.FC = () => (
  <>
    <Container>
      <Logo />
    </Container>

    <Container>
      <Menu />
    </Container>
  </>
);

export default App;
