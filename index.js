import { ToyReact, Component } from './ToyReact'

console.log(ToyReact)

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>hello</span>
        <span>world!</span>
        <div>
          {true}
          {this.children}
        </div>
      </div>
    )
  }

  
}

const a = <MyComponent name="a"><div>123</div></MyComponent>

ToyReact.render(a, document.body)
