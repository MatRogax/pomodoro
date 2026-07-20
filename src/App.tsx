import React from 'react';
import './styles/global.css';

import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Heading } from './components/Heading';

const App: React.FC = () => (
  <>
    <Container>
      <Logo />
    </Container>

    <Container>
      <Heading>Menu</Heading>
    </Container>
  </>
);

export default App;
