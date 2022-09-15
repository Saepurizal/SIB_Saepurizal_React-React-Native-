import Counter from '../src/components/Counter';
import Users from '../src/components/Users';
import HeroName from '../src/components/HeroName';
import Prop from '../src/components/Prop';
import TulisState from '../src/components/TulisState';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <Counter />
      <Users />
      <HeroName />
      <Prop />
      <TulisState />
    </div>
  );
}

export default App;
