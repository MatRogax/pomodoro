import React from 'react';
import './styles/global.css';
import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

const App: React.FC = () => (
  <>
    <Heading>
      hello world
      <button>
        <TimerIcon />
      </button>
    </Heading>

    <p>lore impum bla bla bla bla</p>
  </>
);

export default App;
