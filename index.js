import { ToyReact, Component } from './ToyReact'

// console.log(ToyReact)

class Square extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.props.value}
        {'-'}
        {this.state.value ? this.state.value : ''}
      </button>
    )
  }
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handleClick = (i) => {
    console.log('i: ', i)
  }

  renderSquare(i) {
    return <Square value={i} onClick={() => this.handleClick(i)} />
  }

  render() {
    const status = 'Next player: X'

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

ToyReact.render(<Board />, document.body)
