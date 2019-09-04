import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import './styles.css';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
