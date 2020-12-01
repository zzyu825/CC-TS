import React from 'react';
import { CountComp } from './components/CountComp';

// const App = () => {
//   return (
//     <div>
//       <CountComp num={2} />
//     </div>
//   );
// }

// export default App;

interface IState {
  num: number
}
export class App extends React.Component<{}, IState> {
  state = {
    num: 0
  }

  render() {
    return (
      <CountComp num={this.state.num} onChange={n => {
        this.setState({
          num: n
        })
      }} />
    )
  }
}
