import React from 'react';
import { ChessComp } from './components/ChessComp';
import { ChessType } from './types/enums';

export class App extends React.Component {

  render() {
    return (
      <ChessComp type={ChessType.red} onClick={() => {
        
      }} />
    )
  }
}
