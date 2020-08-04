import { ToyReact, Component } from './ToyReact'

console.log(ToyReact)

class MyComponent extends Component {
  render() {
    return <div><span>hello</span><span>world!</span></div>
  }

  
}

const a = <MyComponent name="a"></MyComponent>

ToyReact.render(a, document.body)
