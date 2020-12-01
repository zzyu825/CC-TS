import React from 'react';

interface IProps {
  num: number
  onChange?: (n: number) => void
}

interface IState {
  msg: string
  description: string
}

export class CountComp extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <button onClick={() => {
          if (this.props.onChange) {
            this.props.onChange(this.props.num - 1)
          }
        }}>-</button>
        <span>{this.props.num}</span>
        <button onClick={() => {
          if (this.props.onChange) {
            this.props.onChange(this.props.num + 1)
          }
        }}>+</button>
      </div>
    )
  }
}

// export const CountComp: React.FC<IProps> = props => {
//   return (
//     <div>
//       <button onClick={() => {
//         if (props.onChange) {
//           props.onChange(props.num - 1)
//         }
//       }}>-</button>
//       <span>{props.num}</span>
//       <button onClick={() => {
//         if (props.onChange) {
//           props.onChange(props.num + 1)
//         }
//       }}>+</button>
//     </div>
//   )
// }