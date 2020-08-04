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
  constructor() {
    this.children = []
  }

  setAttribute(name, value) {
    this[name] = value
  }

  mountTo(parent) {
    let vDom = this.render()
    vDom.mountTo(parent)
  }

  appendChild(vChild) {
    this.children.push(vChild)
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

    const insertChildren = (children) => {
      children.forEach((child) => {
        let newChild = child

        if (Array.isArray(child)) {
          insertChildren(child)
        } else {
          if (!(child instanceof Component 
            || child instanceof ElementWrapper 
            || child instanceof TextWrapper
          )) {
            newChild = String(child) 
          }
          
          if (typeof newChild === 'string') {
            newChild = new TextWrapper(child)
          }

          element.appendChild(newChild)
        }
      })
    }

    insertChildren(children)

    return element
  },

  render(vDom, element) {
    vDom.mountTo(element)
  },
}