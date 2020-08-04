class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }

  appendChild(vChild) {
    vChild.mountTo(this.root)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class TextWrapper {
  constructor(type) {
    this.root = document.createTextNode(type)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

export class Component {
  setAttribute(name, value) {
    this[name] = value
  }

  mountTo(parent) {
    let vDom = this.render()
    vDom.mountTo(parent)
  }
}

export const ToyReact = {
  createElement(type, attributes, ...children) {
    console.log(arguments)
    let element
    
    if (typeof type === 'string') {
      element = new ElementWrapper(type)
    } else {
      element = new type
    }

    // const element = document.createElement(type)

    if (attributes) {
      Object.entries(attributes).forEach(([name, value]) => {
        element.setAttribute(name, value)
      })
    }

    children.forEach((child) => {
      let newChild = child
      if (typeof child === 'string') {
        newChild = new TextWrapper(child)
      }

      element.appendChild(newChild)
    })

    return element
  },

  render(vDom, element) {
    vDom.mountTo(element)
  },
}
